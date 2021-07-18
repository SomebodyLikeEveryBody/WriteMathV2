/*
todo:

- faire que quand je fais entrée, en fait ca crée une ligne en dessous de la ligne courante
- faire une autocompletion avec un dico latex pour faciliter le typing
- rajouter le fait de pouvoir mettre des barres au dessus de chiffres / caracteres quand un pattern se reproduit, genre 10/3 = 3.33 barres
- 

*/

const MQ = MathQuill.getInterface(2);

function MathLineInput() {
    this.jQEl = $('<p class="mathLineInput"></p>');
    this.nextMathLineInput = null;
    this.previousMathLineInput = null;
    this.isDeletable = true;
    this.mathField = MQ.MathField(this.jQEl[0], {
        handlers: {
            edit: () => {
            },
    
            enter: () => {
                    let newMathLineInput = new MathLineInput();
                        newMathLineInput.insertAfter(this.jQEl);

                if (this.hasNextMathLineInput()) {
                    this.nextMathLineInput.previousMathLineInput = newMathLineInput;
                    newMathLineInput.nextMathLineInput = this.nextMathLineInput;
                }

                this.nextMathLineInput = newMathLineInput;
                newMathLineInput.previousMathLineInput = this;
                newMathLineInput.isDeletable = true; 

                this.nextMathLineInput.focus();
            },

            upOutOf: () => {
                if (this.hasPreviousMathLineInput()) {
                    this.previousMathLineInput.focus();
                }
            },

            downOutOf: () => {
                if (this.hasNextMathLineInput()) {
                    this.nextMathLineInput.focus();
                }
            },
        }
    });

    this.undoRedoManager = new UndoRedoManager(this.mathField, this.jQEl);
    this.getLatexValue = () => this.mathField.latex();
    this.isEmpty = () => (this.getLatexValue() === '');
    
    this.appendTo = function (pElement) {
        this.jQEl.appendTo(pElement);
    }

    this.hasPreviousMathLineInput = () => (this.previousMathLineInput !== null);
    this.hasNextMathLineInput = () => (this.nextMathLineInput !== null);
    this.insertAfter = (pElement) => {this.jQEl.insertAfter(pElement)};
    this.focus = () => (this.mathField.focus());
    this.erase = () => {
        if (this.hasPreviousMathLineInput()) {
            this.previousMathLineInput.nextMathLineInput = this.nextMathLineInput;
        }
        
        if (this.hasNextMathLineInput()) {
            this.nextMathLineInput.previousMathLineInput = this.previousMathLineInput;
        }

        this.jQEl.remove();
    };

    this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent = () => {
        this.jQEl.on('keydown', (e) => {
            //press delete
            if (e.which === 46 && this.isEmpty()) {
                if (this.hasPreviousMathLineInput() || this.hasNextMathLineInput()) {
                    if (!(this.hasNextMathLineInput())) {
                        this.previousMathLineInput.focus();
                    } else {
                        this.nextMathLineInput.focus();
                    }
    
                    this.erase();
                }

            //press backspace
            } else if (e.which === 8 && this.isDeletable) {
                if (this.previousMathLineInput !== null) {
                    this.erase();
                    this.previousMathLineInput.focus();
                }

            } else if (this.isEmpty()) {
                this.isDeletable = true;
            } else {
                this.isDeletable = false;
            }
        });
    };
    
    this.init = () => {
        this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent();
    };

    this.init();
}

//to translate the given textNode into proper math
//MQ.StaticMath(window.document.getElementById('problem'));

mathLineInputArray = [];
for (let i = 0; i < 5; i++) {
    mathLineInputArray[i] = new MathLineInput();
    mathLineInputArray[i].appendTo($('#content'));

    if (i !== 0) {
        mathLineInputArray[i - 1].nextMathLineInput = mathLineInputArray[i];
        mathLineInputArray[i].previousMathLineInput = mathLineInputArray[i - 1];
    }
}

mathLineInputArray[0].focus();