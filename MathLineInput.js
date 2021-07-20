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
                if ((this.autocompleter.AutoCompleterManager.autoCompletionWidget.isVisible === false)) {
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
                }
                    
            },

            upOutOf: () => {
                if (this.hasPreviousMathLineInput() && (this.autocompleter.AutoCompleterManager.autoCompletionWidget.isVisible === false)) {
                    this.previousMathLineInput.focus();
                }
            },

            downOutOf: () => {
                if (this.hasNextMathLineInput() && (this.autocompleter.AutoCompleterManager.autoCompletionWidget.isVisible === false)) {
                    this.nextMathLineInput.focus();
                }
            },
        }
    });

    this.undoRedoManager = new UndoRedoManager(this);
    this.getLatexValue = () => this.mathField.latex();
    this.getValue = () => this.getLatexValue();
    this.setLatexValue = (pValue) => this.mathField.latex(pValue);
    this.addValueAtCursorPosition = (pValue) => this.mathField.typedText(pValue);
    this.isEmpty = () => (this.getLatexValue() === '');
    
    this.appendTo = function (pElement) {
        this.jQEl.appendTo(pElement);
    }

    this.hasPreviousMathLineInput = () => (this.previousMathLineInput !== null);
    this.hasNextMathLineInput = () => (this.nextMathLineInput !== null);
    this.insertAfter = (pElement) => {this.jQEl.insertAfter(pElement)};
    this.focus = () => (this.mathField.focus());


    this.getCursorOffset = () => {
        this.mathField.focus();

        let retOffset = this.mathField.__controller.cursor.offset();
        if (!(retOffset)) {
            retOffset = { 'top': 0, 'left': 0 }
        }

        return retOffset
    };

    this.erase = () => {
        if (this.hasPreviousMathLineInput()) {
            this.previousMathLineInput.nextMathLineInput = this.nextMathLineInput;
        }
        
        if (this.hasNextMathLineInput()) {
            this.nextMathLineInput.previousMathLineInput = this.previousMathLineInput;
        }

        this.jQEl.remove();
    };

    this.keyDown = (pFunction) => this.jQEl.on('keydown', (e) => pFunction(e));
    this.keyUp = (pFunction) => this.jQEl.on('keyup', (e) => pFunction(e));

    this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent = () => {
        this.keyDown((e) => {
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

    this.autocompleter = new AutoCompleter(this, g_keywordsList);
    this.init();
}