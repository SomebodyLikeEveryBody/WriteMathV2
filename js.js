const MQ = MathQuill.getInterface(2);

function MathLineInput() {
    this.jQEl = $('<p class="mathLineInput"></p>');
    this.nextMathLineInput = null;
    this.mathField = MQ.MathField(this.jQEl[0], {
        handlers: {
            edit: () => {
            },
    
            enter: () => {
                if (!(this.hasNextMathLineInput())) {
                    let newMathLineInput = new MathLineInput();
                        newMathLineInput.insertAfter(this.jQEl);

                    this.nextMathLineInput = newMathLineInput;
                    
                }

                this.nextMathLineInput.focus();
                console.log('ok');
            },

            upOutOf: () => {
                console.log('up');
            },

            downOutOf: () => {
                console.log('down');
            },
        }
    });

    this.undoRedoManager = new UndoRedoManager(this.mathField, this.jQEl);
    
    this.appendTo = function (pElement) {
        this.jQEl.appendTo(pElement);
    }

    this.hasNextMathLineInput = () => (this.nextMathLineInput !== null);
    this.insertAfter = (pElement) => {this.jQEl.insertAfter(pElement)};
    this.focus = () => (this.mathField.focus());
}

//to translate the given textNode into proper math
//MQ.StaticMath(window.document.getElementById('problem'));

mathLineInputArray = [];
for (let i = 0; i < 5; i++) {
    mathLineInputArray[i] = new MathLineInput();
    mathLineInputArray[i].appendTo($('#content'));

    if (i !== 0) {
        mathLineInputArray[i - 1].nextMathLineInput = mathLineInputArray[i];
    }
}

console.log(mathLineInputArray[3].hasNextMathLineInput());
console.log(mathLineInputArray[4].hasNextMathLineInput());

mathLineInputArray[2].jQEl.focus();