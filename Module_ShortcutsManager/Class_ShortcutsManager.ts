class ShortcutsManager {
    protected _mathLineInput: MathLineInput;
    protected _ctrlIsDown: Boolean;
    protected _altIsDown: Boolean;
    
    public constructor(pMathLineInput: MathLineInput) {
        this._mathLineInput = pMathLineInput;
        this._ctrlIsDown = false;
        this._altIsDown = false;

        this.setEvents();
    }

    public setCtrlToDown(): void {
        this._ctrlIsDown = true;   
    }

    protected checkIfSpecialKeysAreUpAndSetStates(pUppedKey: KeyCodes): void {
        switch (pUppedKey) {
            case KeyCodes.CTRL_KEY:
                this._ctrlIsDown = false;
                break;

            case KeyCodes.ALT_KEY:
                this._altIsDown = false;
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
        });
    }

    protected setKeysToDown(): void {
        this._ctrlIsDown = false;
        this._altIsDown = false;
    }

    protected bindCtrlShortcuts(pEventObj: EventObject): void {
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
                    this._mathLineInput.duplicateMathLine();
                }
                
                break;
        }
    }

    protected bindAltShortcuts(pEventObj: EventObject): void {
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
                this._mathLineInput.appendValueAtCursorPosition('\\Given ');
                break;

            //alt + 9
            case KeyCodes.NINE_KEY:
                this._mathLineInput.appendCmdAtCursorPosition('\\infinity');
                break;

            //alt + 7
            case KeyCodes.SEVEN_KEY:
                this._mathLineInput.appendValueAtCursorPosition('d/d_');
                break;

            //alt + 6
            case KeyCodes.SIX_KEY:
                this._mathLineInput.appendValueAtCursorPosition('\\partial/\\partial_');
                break;
        }
    }
}