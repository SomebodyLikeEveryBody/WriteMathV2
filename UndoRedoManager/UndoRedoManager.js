const TAB_KEYCODE = 9;
const ENTER_KEYCODE = 13;
const SHIFT_KEYCODE = 16;
const CTRL_KEYCODE = 17;
const ALT_KEYCODE = 18;
const CAPSLOCK_KEYCODE = 20;
const ESCAPE_KEYCODE = 27;
const PAGEUP_KEYCODE = 33;
const PAGEDOWN_KEYCODE = 34;
const END_KEYCODE = 35;
const HOME_KEYCODE = 36;
const LEFTARROW_KEYCODE = 37;
const UPARROW_KEYCODE = 38;
const RIGHTARROW_KEYCODE = 39;
const DOWNARROW_KEYCODE = 40;
const V_KEYCODE = 86;
const Y_KEYCODE = 89;
const Z_KEYCODE = 90;
const ALTGR_KEYCODE = 225;

const unaffectingKeys = [TAB_KEYCODE,
                        ENTER_KEYCODE,
                        SHIFT_KEYCODE,
                        CTRL_KEYCODE,
                        ALT_KEYCODE,
                        CAPSLOCK_KEYCODE,
                        ESCAPE_KEYCODE,
                        LEFTARROW_KEYCODE,
                        PAGEUP_KEYCODE,
                        PAGEDOWN_KEYCODE,
                        END_KEYCODE,
                        HOME_KEYCODE,
                        LEFTARROW_KEYCODE,
                        UPARROW_KEYCODE,
                        RIGHTARROW_KEYCODE,
                        DOWNARROW_KEYCODE,
                        ALTGR_KEYCODE];

function UndoRedoManager(pMathLineInput) {
    this.mathLineInput = pMathLineInput;
    this.typedHistory = [this.mathLineInput.mathField.latex()];
    this.ctrlIsDown = false;
    this.altIsDown = false;
    this.YIsDown = false;
    this.ZIsDown = false;
    this.currentState = 0;
    this.buffSize = 50;

    this.insertStr = (pStr) => {
        this.mathLineInput.mathField.typedText(pStr);
    };

    this.rearrangeTypedArray = () => {
        if (this.typedHistory.length > this.buffSize) {
            let sizeOverflow = this.typedHistory.length - this.buffSize;
            this.currentState = this.currentState - sizeOverflow;
            this.typedHistory = this.typedHistory.slice(this.buffSize * (-1));
        }
    };

    this.isKeyIsUnaffecting = (pKey) => {
        return unaffectingKeys.includes(pKey);
    };

    this.checkIfSpecialKeysAreUpAndSetStates = (pUppedKey) => {
        switch (pUppedKey) {
            case CTRL_KEYCODE:
                this.ctrlIsDown = false;
                break;

            case ALT_KEYCODE:
                this.altIsDown = false;
                break;

            case Y_KEYCODE:
                this.YIsDown = false;
                break;

            case Z_KEYCODE:
                this.ZIsDown = false;
                break;
        }
    }

    this.checkIfSpecialKeysAreDownAndSetStates = (pDownedKey) => {
        switch (pDownedKey) {
            case CTRL_KEYCODE:
                this.ctrlIsDown = true;
                break;

            case ALT_KEYCODE:
                this.altIsDown = true;
                break;

            case Y_KEYCODE:
                this.YIsDown = true;
                break;

            case Z_KEYCODE:
                this.ZIsDown = true;
                break;
        }
    }

    this.saveState = () => {
        if (this.currentState !== (this.typedHistory.length - 1)) {
            this.typedHistory = this.typedHistory.slice(0, (this.currentState + 1));
        }   
        
        this.typedHistory.push(this.mathLineInput.mathField.latex());
        this.rearrangeTypedArray();
        this.currentState++;
    };

    this.undo = () => {
        if (this.currentState !== 0) {
            this.currentState--;
            this.mathLineInput.mathField.latex(this.typedHistory[this.currentState]);
        }  else {
            //console.log('do nothing');
        }
    };

    this.simulateKeyPress = (pCode) => {
        jQuery.event.trigger({ type : 'keypress', which : pCode });
      }

    this.redo = () => {
        if (this.currentState < (this.typedHistory.length - 1)) {
            this.currentState++;
            this.mathLineInput.mathField.latex(this.typedHistory[this.currentState]);
        } else {
            //console.log('do nothing');
        }
    };

    this.setEvents = () => {
        this.mathLineInput.jQEl.on('keyup', (e) => {
            this.checkIfSpecialKeysAreUpAndSetStates(e.which);
            // console.log(this.mathLineInput.mathField.latex());
            
            if (e.which === ALT_KEYCODE) {
                e.preventDefault();
            }

            //log in typedHistory
            if ((this.isKeyIsUnaffecting(e.which) === false)
                && (this.ctrlIsDown === false || (this.ctrlIsDown && e.which === V_KEYCODE))) {
                this.saveState();
            }
        });
    
        this.mathLineInput.jQEl.on('keydown', (e) => {
            console.log(e.which)
            // console.log(this.mathLineInput.mathField.latex());
            this.checkIfSpecialKeysAreDownAndSetStates(e.which);

            if (e.which === ESCAPE_KEYCODE) {
                if (!(this.mathLineInput.autocompleter.AutoCompleterManager.autoCompletionWidget.isVisible)) {
                    this.mathLineInput.mathField.blur();
                }
            }

            if (e.which === TAB_KEYCODE) {
                console.log('tab');
            }

            //set shortcuts
            if (this.altIsDown) {
                e.preventDefault();

                switch (e.which) {
                    //alt + D
                    case 68:
                        this.mathLineInput.mathField.write('\\partial ');
                        break;

                    //alt + F
                    case 70:
                        this.mathLineInput.mathField.write('\\forall');
                        break;

                    //alt + right
                    case 39:
                        this.mathLineInput.mathField.write('\\rightarrow');
                        break;
        
                    //alt + left
                    case 37:
                        this.mathLineInput.mathField.write('\\leftarrow');
                        break;
        
                    //alt + V
                    case 86:
                        this.mathLineInput.mathField.typedText('\\vec ');
                        break;

                    //alt + S
                    case 83:
                        this.mathLineInput.mathField.write('\\sum');
                        break;

                    //alt + P
                    case 80:
                        this.mathLineInput.mathField.write('\\prod');
                        break;
        
                    //alt + I
                    case 191:
                        this.mathLineInput.mathField.write('\\in');
                        break;

                    //alt + R
                    case 82:
                        this.mathLineInput.mathField.write('\\R');
                        break;

                    //alt + Q
                    case 81:
                        this.mathLineInput.mathField.write('\\Q');
                        break;

                    //alt + Z
                    case 90:
                        this.mathLineInput.mathField.write('\\Z');
                        break;

                    //alt + N
                    case 78:
                        this.mathLineInput.mathField.write('\\N');
                        break;
                        
                    //alt + C
                    case 67:
                        this.mathLineInput.mathField.write('\\C');
                        break;

                    //alt + <
                    case 188:
                        this.mathLineInput.mathField.write('\\supset');
                        break;

                    //alt + >
                    case 190:
                        this.mathLineInput.mathField.write('\\subseteq');
                        break;

                    //alt + U
                    case 85:
                        this.mathLineInput.mathField.write('\\union');
                        break;

                    //alt + I
                    case 73:
                        this.mathLineInput.mathField.write('\\cap');
                        break;

                    //alt + ~
                    case 0:
                        this.mathLineInput.mathField.write('\\simeq');
                        break;
                        
                    //alt + W
                    case 87:
                        this.mathLineInput.mathField.cmd('\\sqrt');
                        break;

                    //alt + E
                    case 69:
                        this.mathLineInput.mathField.cmd('\\exists');
                        break;

                    //alt + 0
                    case 48:
                        this.mathLineInput.mathField.cmd('\\emptyset');
                        break;

                    //alt + =
                    case 61:
                        this.mathLineInput.mathField.cmd('\\neq');
                        break;
                    
                    //alt + A
                    case 65:
                        this.mathLineInput.mathField.cmd('\\land');
                        break;

                    //alt + )
                    case 79:
                        this.mathLineInput.mathField.cmd('\\lor');
                        break;
                }
            }
                
            //ctrl+z
            if (this.ctrlIsDown && this.ZIsDown) {
                e.preventDefault();
                this.undo();
            }
    
            //ctrl + y
            if (this.ctrlIsDown && this.YIsDown) {
                e.preventDefault();
                this.redo();
            }
        });
    };

    this.init = () => {
        this.setEvents();

        window.addEventListener('blur', () => {
            this.altIsDown = false;
        });
    }

    this.init();
}

(function getCursorPosition() {
    
})();