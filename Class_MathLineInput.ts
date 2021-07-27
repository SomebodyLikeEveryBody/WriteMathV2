declare var MathQuill: any;
declare function $(pStr: String): JQueryElement;

class MathLineInput {
    protected _jQEl: JQueryElement;
    protected _nextMathLineInput: MathLineInput;
    protected _previousMathLineInput: MathLineInput;
    protected _isDeletable: Boolean;
    protected _mathField: any;
    protected _autoCompleter: any;
    protected _undoRedoManager: any;

    public constructor() {
        this._jQEl = $('<p class="mathLineInput"></p>');
        this._nextMathLineInput = null;
        this._previousMathLineInput = null;
        this._isDeletable = true;

        this._mathField = MathQuill.getInterface(2).MathField(this._jQEl[0], {
            autoCommands: 'iff implies infinity not or and union notin forall nabla Angstrom alpha beta gamma Gamma delta Delta zeta eta theta Theta iota kappa lambda mu nu pi rho sigma tau phi chi psi Psi omega Omega', //add ctrl + E for varepsilon and ctrl + u for upsilon, see for Upsilon 
            autoOperatorNames: 'ln log det min max mod lcm gcd lim sin cos tan sec Function isEven isOdd divides Given',
            handlers: {
                edit: () => {
                },
    
                enter: () => {
                    if ((this._autoCompleter.isVisible() === false)) {  
                        const newMathLineInput = this.createNewMathLineInputAndAppendAfter(this);
                    
                        newMathLineInput.focus();
                    }
                },

                upOutOf: () => {
                    if (this.hasPreviousMathLineInput()) {
                        if (!this.autoCompleterIsVisible()) {
                            this.previousMathLineInput.focus();
                        }
                        
                    }
                },

                downOutOf: () => {
                    if (this.hasNextMathLineInput()) {
                        if (!this.autoCompleterIsVisible()) {
                            this.nextMathLineInput.focus();
                        }
                    }
                },
            }
        });

        this._autoCompleter = new AutoCompleter(this, g_keywordsList);
        this._undoRedoManager = new UndoRedoManager(this);
        

        this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent();
    }

    /* * * * * * * * * * * * 
     * Getters and setters * 
     * * * * * * * * * * * */
    public get jQEl (): any {
        return this._jQEl;
	}

    public get nextMathLineInput (): MathLineInput {
        return this._nextMathLineInput;
	}

    public set nextMathLineInput (pMathLineInput: MathLineInput) {
        this._nextMathLineInput = pMathLineInput;
	}

    public get previousMathLineInput (): MathLineInput {
        return this._previousMathLineInput;
	}

    public set previousMathLineInput (pMathLineInput: MathLineInput) {
        this._previousMathLineInput = pMathLineInput;
	}

    public get mathField () {
        return this._mathField;
	}

    public get isDeletable (): Boolean {
        return this._isDeletable;
    }

    public set isDeletable (pBool: Boolean) {
        this._isDeletable = pBool;
    }

    /* * * * * * 
     * Methods * 
     * * * * * */
    public focus(): void {
        this._mathField.focus();
    }

    public value(): String {
        return this._mathField.latex();
    }

    public setValue(pValue: String): void {
        this._mathField.latex(pValue);
    }

    public appendValueAtCursorPosition(pValue: String): void {
        this._mathField.typedText(pValue);
    }

    public appendCmdAtCursorPosition(pValue: String): void {
        this._mathField.cmd(pValue);
    }

    public isEmpty(): Boolean {
        return this.value() === '';
    }
    
    public appendTo(pElement: any) {        
        this._jQEl.appendTo(pElement);
    }

    public hasPreviousMathLineInput(): Boolean {
        return this._previousMathLineInput !== null;
    }

    public hasNextMathLineInput(): Boolean {
        return this._nextMathLineInput !== null
    }

    public insertAfter(pElement: any): void {
        this._jQEl.insertAfter(pElement);
    }

    public setCtrlToDown(): void {
        this._undoRedoManager.setCtrlToDown();
    }

    public createNewMathLineInputAndAppendAfter(pMathLineInput: MathLineInput): MathLineInput {
        const newMathLineInput = new MathLineInput();
            newMathLineInput.insertAfter(pMathLineInput.jQEl);

            if (pMathLineInput.hasNextMathLineInput()) {
                pMathLineInput.nextMathLineInput.previousMathLineInput = newMathLineInput;
                newMathLineInput.nextMathLineInput = pMathLineInput.nextMathLineInput;
            }

            pMathLineInput.nextMathLineInput = newMathLineInput;
            newMathLineInput.previousMathLineInput = pMathLineInput;
            newMathLineInput.isDeletable = true; 

            return newMathLineInput;
    }

    public getCursorCoordinates(): Object {
        this.mathField.focus();

        let retOffset = this.mathField.__controller.cursor.offset();
        if (!(retOffset)) {
            retOffset = { 'top': 0, 'left': 0 }
        }

        return retOffset
    };

    public erase() {
        if (this.hasPreviousMathLineInput()) {
            this.previousMathLineInput.nextMathLineInput = this.nextMathLineInput;
        }
        
        if (this.hasNextMathLineInput()) {
            this.nextMathLineInput.previousMathLineInput = this.previousMathLineInput;
        }

        this._jQEl.remove();
    };

    public keyDown(pFunction: Function): void {
        this.jQEl.on('keydown', (e) => pFunction(e));

    }

    public keyUp(pFunction: Function): void {
        this.jQEl.on('keyup', (e) => pFunction(e));
    }

    public autoCompleterIsVisible(): Boolean {
        return this._autoCompleter.isVisible();
    }

    public blur(): void {
        this._mathField.blur();
    }

    protected setDeleteIfBackSpaceInEmptyFieldIsTypedEvent() {
        this.keyDown((e) => {

            //press delete
            if (e.which === KeyCodes.DELETE_KEY && this.isEmpty()) {
                if (this.hasPreviousMathLineInput() || this.hasNextMathLineInput()) {
                    if (this.hasNextMathLineInput()) {
                        this.nextMathLineInput.focus();
                    } else {
                        this.previousMathLineInput.focus();
                    }
    
                    this.erase();
                }

            //press backspace
            } else if (e.which === KeyCodes.BACKSPACE_KEY && this.isDeletable) {
                if (this.hasPreviousMathLineInput() && this.isEmpty()) {
                    this.erase();
                    this.previousMathLineInput.focus();

                }
            } else if (this.isEmpty()) {
                this.isDeletable = true;
            } else {
                this.isDeletable = false;
            }
        });
    }
}