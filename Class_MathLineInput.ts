declare var MathQuill: any;
declare function $(pStr: String): JQueryElement;

class MathLineInput {
    protected _jQEl: JQueryElement;
    protected _nextMathLineInput: MathLineInput;
    protected _previousMathLineInput: MathLineInput;
    protected _isDeletable: Boolean;
    protected _mathField: any;
    protected _autoCompleter: AutoCompleter;
    protected _undoRedoManager: UndoRedoManager;

    public constructor() {
        this._jQEl = $('<p class="mathLineInput"></p>');
        this._nextMathLineInput = null;
        this._previousMathLineInput = null;
        this._isDeletable = true;

        this._mathField = MathQuill.getInterface(2).MathField(this._jQEl[0], {
            autoCommands: 'implies infinity lor land neg union notin forall nabla Angstrom alpha beta gamma Gamma delta Delta zeta eta theta Theta iota kappa lambda mu nu pi rho sigma tau phi Phi chi psi Psi omega Omega', //add ctrl + E for varepsilon and ctrl + u for upsilon, see for Upsilon 
            autoOperatorNames: 'ln log det min max mod lcm gcd lim sin cos tan sec Function isEven isOdd divides Given Equation diff',
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
        

        this.setEvents();
    }

    /* * * * * * * * * * * * 
     * Getters and setters * 
     * * * * * * * * * * * */
    public get jQEl (): JQueryElement {
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
    
    public appendTo(pElement: JQueryElement) {        
        this._jQEl.appendTo(pElement);
    }

    public hasPreviousMathLineInput(): Boolean {
        return this._previousMathLineInput !== null;
    }

    public hasNextMathLineInput(): Boolean {
        return this._nextMathLineInput !== null
    }

    public insertAfter(pElement: JQueryElement): void {
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

        this._autoCompleter.hide();
        this._jQEl.remove();
    };

    public keyDown(pFunction: Function): void {
        this.jQEl.keydown((e) => pFunction(e));
    }

    public keyUp(pFunction: Function): void {
        this.jQEl.keyup((e) => pFunction(e));
    }

    public autoCompleterIsVisible(): Boolean {
        return this._autoCompleter.isVisible();
    }

    public blur(): void {
        this._mathField.blur();
    }

    public deleteLeftWord(pWordLen: number): void {
        for (let i = 0; i< pWordLen; i++) {
            this._mathField.keystroke('Shift-Left');
        }

        this._mathField.keystroke('Backspace');
    }

    protected setEvents(): void {
        this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent();

        this._jQEl.focusout(() => {
            this._autoCompleter.hide();
        });
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
            } else if (e.which === KeyCodes.ESCAPE_KEY) {
                if (this.autoCompleterIsVisible()) {
                    this._autoCompleter.hide()
                } else {
                    this.blur();
                }
            } else if (this.isEmpty()) {
                this.isDeletable = true;
            } else {
                this.isDeletable = false;
            }
        });
    }

    protected getLocationOf(pCursor: any) {
        const L = -1;
        const R = 1;
        const retCursorLocation: String[] = [];
        let mathfieldTreeElement: MathFieldTreeElement;

        if (pCursor[L]) {
            retCursorLocation.push('insRightOf');
            mathfieldTreeElement = pCursor[L];
        } else if (pCursor[R]) {
            retCursorLocation.push('insLeftOf')
            mathfieldTreeElement = pCursor[R];
        } else {
            retCursorLocation.push('insAtLeftEnd')
            mathfieldTreeElement = pCursor.parent;
        }
    
        while (mathfieldTreeElement != this._mathField.__controller.root) {
            if (mathfieldTreeElement[L]) {
                retCursorLocation.push('L');
                mathfieldTreeElement = mathfieldTreeElement[L]
            } else {
                retCursorLocation.push('endsL')
                mathfieldTreeElement = mathfieldTreeElement.parent;
            }
        }
    
        return retCursorLocation.reverse();
    }

    public getCursorConfiguration(): any {
        if (this._mathField.__controller.cursor.anticursor) {
            return { 
                cursor: this.getLocationOf(this._mathField.__controller.cursor),
                anticursor: this.getLocationOf(this._mathField.__controller.cursor.anticursor)
            }
        } else {
            return { cursor: this.getLocationOf(this._mathField.__controller.cursor) }
        }
    }

    protected setLocationOf(pCursor: any) {
        const L = -1;
        const R = 1;
        
        let mathfieldTreeElement: MathFieldTreeElement = this._mathField.__controller.root;

        for (let i = 0; i < pCursor.length; i++) {
            switch (pCursor[i]) {
                case 'L':
                    mathfieldTreeElement = mathfieldTreeElement[R];
                    break;

                case 'endsL':
                    mathfieldTreeElement = mathfieldTreeElement.ends[L];
                    break;

                default:
                    this._mathField.__controller.cursor[pCursor[i]](mathfieldTreeElement);
            }
        }
    }

    public setCursorConfiguration(pCursorConfiguration: any): void {
        this._mathField.__controller.cursor.clearSelection();
        
        if (pCursorConfiguration.anticursor) {
            this.setLocationOf(pCursorConfiguration.anticursor);
            this._mathField.__controller.cursor.startSelection();
        }
    
        if (pCursorConfiguration.cursor) {    
            this.setLocationOf(pCursorConfiguration.cursor);

            if (pCursorConfiguration.anticursor) {
                this._mathField.__controller.cursor.select();
            }
        }
    }
}