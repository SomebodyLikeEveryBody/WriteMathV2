const unaffectingKeys: KeyCodes[] = [
    KeyCodes.TAB_KEY,
    KeyCodes.ENTER_KEY,
    KeyCodes.SHIFT_KEY,
    KeyCodes.CTRL_KEY,
    KeyCodes.ALT_KEY,
    KeyCodes.CAPSLOCK_KEY,
    KeyCodes.ESCAPE_KEY,
    KeyCodes.LEFTARROW_KEY,
    KeyCodes.PAGEUP_KEY,
    KeyCodes.PAGEDOWN_KEY,
    KeyCodes.END_KEY,
    KeyCodes.HOME_KEY,
    KeyCodes.LEFTARROW_KEY,
    KeyCodes.UPARROW_KEY,
    KeyCodes.RIGHTARROW_KEY,
    KeyCodes.DOWNARROW_KEY,
    KeyCodes.ALTGR_KEY,
];

class UndoRedoManager {
    protected _mathLineInput: MathLineInput;
    protected _typedHistory: String[];
    protected _ctrlIsDown: Boolean;
    protected _altIsDown: Boolean;
    protected _YIsDown: Boolean;
    protected _ZIsDown: Boolean;
    protected _currentState: Number;
    protected _buffSize: Number;

    public constructor(pMathLineInput: MathLineInput) {
        this._mathLineInput = pMathLineInput;
        this._typedHistory = [this._mathLineInput.value()];
        this._ctrlIsDown = false;
        this._altIsDown = false;
        this._YIsDown = false;
        this._ZIsDown = false;
        this._currentState = 0;
        this._buffSize = 50;

        this.setEvents();
    }

    public setCtrlToDown(): void {
        this._ctrlIsDown = true;   
    }

    protected rearrangeTypedHistoryArray(): void {
        if (this._typedHistory.length > this._buffSize) {
            const sizeOverflow: Number = ((this._typedHistory.length) - this._buffSize.valueOf());
            
            this._currentState = this._currentState.valueOf() - sizeOverflow.valueOf();
            this._typedHistory = this._typedHistory.slice(this._buffSize.valueOf() * (-1));
        }
    }

    protected isKeyIsUnaffecting(pKey: KeyCodes): Boolean {

        for (let keyCode of unaffectingKeys) {
            if (keyCode === pKey) {
                return true;
            }
        }

        return false;
    }

    protected checkIfSpecialKeysAreUpAndSetStates(pUppedKey: KeyCodes): void {
        switch (pUppedKey) {
            case KeyCodes.CTRL_KEY:
                this._ctrlIsDown = false;
                break;

            case KeyCodes.ALT_KEY:
                this._altIsDown = false;
                break;

            case KeyCodes.Y_KEY:
                this._YIsDown = false;
                break;

            case KeyCodes.Z_KEY:
                this._ZIsDown = false;
                break;
        }
    }

    protected checkIfSpecialKeysAreDownAndSetStates(pDownedKey: KeyCodes): void {
        switch (pDownedKey) {
            case KeyCodes.CTRL_KEY:
                this._ctrlIsDown = true;
                break;

            case KeyCodes.ALT_KEY:
                this._altIsDown = true;
                break;

            case KeyCodes.Y_KEY:
                this._YIsDown = true;
                break;

            case KeyCodes.Z_KEY:
                this._ZIsDown = true;
                break;
        }
    }

    protected isCurrentStateIsLastHistoryState(): Boolean {
        return (this._currentState === (this._typedHistory.length - 1));
    }

    protected isCurrentStateIsFirstHistoryState(): Boolean {
        return (this._currentState === 0);
    }

    protected saveState(): void {
        if (!(this.isCurrentStateIsLastHistoryState())) {
            this._typedHistory = this._typedHistory.slice(0, (this._currentState.valueOf() + 1));
        }   
        
        this._typedHistory.push(this._mathLineInput.value());
        this.rearrangeTypedHistoryArray();
        this._currentState = this._currentState.valueOf() + 1;
    }

    protected getValueHistoryAtState(pState: Number): String {
        return this._typedHistory[pState.valueOf()];
    }

    protected undo(): void {
        if (!this.isCurrentStateIsFirstHistoryState()) {
            this._currentState = this._currentState.valueOf() - 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
        }  else {
            //console.log('do nothing');
        }
    }

    protected redo(): void {
        if (!this.isCurrentStateIsLastHistoryState()) {
            this._currentState = this._currentState.valueOf() + 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
        } else {
            //console.log('do nothing');
        }
    }

    protected setEvents(): void {
        this.setKeyUpEvents();
        this.setKeyDownEvents();

        window.addEventListener('blur', () => {
            this.setKeysToDown();
        });
    }

    protected setKeyUpEvents(): void {
        this._mathLineInput.keyUp((e) => {
            this.checkIfSpecialKeysAreUpAndSetStates(e.which);

            if (e.which === KeyCodes.ALT_KEY) {
                e.preventDefault();
            }

            if ((this.isKeyIsUnaffecting(e.which) === false)
                && (this._ctrlIsDown === false || (this._ctrlIsDown && e.which === KeyCodes.V_KEY))) {
                this.saveState();
            }
        });    
    }

    protected setKeyDownEvents(): void {
        this._mathLineInput.keyDown((e) => {
            this.checkIfSpecialKeysAreDownAndSetStates(e.which);

            //set CTRL shortcuts
            if (this._ctrlIsDown) {
                this.bindCtrlShortcuts(e);
            }

            if (this._altIsDown) {
                e.preventDefault();
                this.bindAltShortcuts(e);
            }

            // ctrl + Z ==> undo
            if (this._ctrlIsDown && this._ZIsDown) {
                e.preventDefault();
                this.undo();
            }
    
            // ctrl + Y ==> redo
            if (this._ctrlIsDown && this._YIsDown) {
                e.preventDefault();
                this.redo();
            }
        });
    }

    protected setKeysToDown(): void {
        this._ctrlIsDown = false;
        this._altIsDown = false;
        this._YIsDown = false;
        this._ZIsDown = false;
    }

    protected bindCtrlShortcuts(pEventObj: any): void {
        switch (pEventObj.which) {

            //ctrl + [ ==> lfloor
            case KeyCodes.OPENHOOK_KEY:
                pEventObj.preventDefault();
                this._mathLineInput.appendCmdAtCursorPosition('\\lfloor');
                break;

            //ctrl + ] ==> rfloor
            case KeyCodes.CLOSEHOOK_KEY:
                pEventObj.preventDefault();
                this._mathLineInput.mathField.cmd('\\rfloor');
                break;

            //ctrl + D ==> duplicate line
            case KeyCodes.D_KEY:
                if ((this._mathLineInput.autoCompleterIsVisible() === false)) {
                    pEventObj.preventDefault();

                    const newMathlineInput = this._mathLineInput.createNewMathLineInputAndAppendAfter(this._mathLineInput);
                        newMathlineInput.setValue(this._mathLineInput.value());
                        console.log(this._mathLineInput.value());
                        this.setKeysToDown();
                        newMathlineInput.focus();
                        newMathlineInput.setCtrlToDown();
                }
                
                break;
        }
    }

    protected bindAltShortcuts(pEventObj: any): void {
        switch (pEventObj.which) {

            //alt + D
            case KeyCodes.D_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\partial');
                break;

            //alt + F
            case KeyCodes.F_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\forall');
                break;

            //alt + right arrow
            case KeyCodes.RIGHTARROW_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\rightarrow');
                break;

            //alt + left arrow
            case KeyCodes.LEFTARROW_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\leftarrow');
                break;

            //alt + V ==> vector arrows
            case KeyCodes.V_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\vec');
                break;

            //alt + S ==> sum
            case KeyCodes.S_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\sum');
                break;

            //alt + P ==> product
            case KeyCodes.P_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\prod');
                break;
                
            //alt + ;
            case KeyCodes.SEMICOLON_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\in');
                break;
            
            //alt + R
            case KeyCodes.R_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\R');
                break;

            //alt + Q
            case KeyCodes.Q_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\Q');
                break;

            //alt + Z
            case KeyCodes.Z_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\Z');
                break;

            //alt + N
            case KeyCodes.N_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\N');
                break;
                
            //alt + C
            case KeyCodes.C_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\C');
                break;

            //alt + <
            case KeyCodes.OPENCHEVRON_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\supset');
                break;

            //alt + >
            case KeyCodes.CLOSECHEVRON_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\subseteq');
                break;

            //alt + U
            case KeyCodes.U_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\union');
                break;

            //alt + I
            case KeyCodes.I_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\cap');
                break;

            //alt + ~
            case KeyCodes.TILDE_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\simeq');
                break;
                
            //alt + W
            case KeyCodes.W_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\sqrt');
                break;

            //alt + E
            case KeyCodes.E_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\exists');
                break;

            //alt + 0
            case KeyCodes.N0_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\emptyset');
                break;

            //alt + =
            case KeyCodes.EQUAL_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\neq');
                break;
            
            //alt + A
            case KeyCodes.A_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\land');
                break;

            //alt + O
            case KeyCodes.O_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\lor');
                break;

            //alt + -
            case KeyCodes.MINUS_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\overline');
                break;

            //alt + T
            case KeyCodes.T_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\perp');
                break;
                
            //alt + L
            case KeyCodes.L_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\parallel');
                break;

            //alt + |
            case KeyCodes.PIPE_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\|');
                break;

            //alt + [
            case KeyCodes.OPENHOOK_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\lceil');
                break;

            //alt + ]
            case KeyCodes.CLOSEHOOK_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\rceil');
                break;

            //alt + *
            case KeyCodes.EIGHT_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\star');
                break;

            //alt + G
            case KeyCodes.G_KEY:
                // this._mathLineInput.appendCmdAtCursorPosition('\\Given');
                this._mathLineInput.appendValueAtCursorPosition('\\Given ');
                break;
        }
    }
}