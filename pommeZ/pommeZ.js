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

function PommeZManager(pMathField, pElement) {
    this.mathField = pMathField;
    this.contentEl = pElement;
    this.typedHistory = [this.mathField.latex()];
    this.ctrlIsDown = false;
    this.YIsDown = false;
    this.ZIsDown = false;
    this.currentState = 0;
    this.buffSize = 50;

    console.log('begin -- ', this.typedHistory);

    this.rearrangeTypedArray = function () {
        if (this.typedHistory.length > this.buffSize) {
            let sizeOverflow = this.typedHistory.length - this.buffSize;
            this.currentState = this.currentState - sizeOverflow;
            this.typedHistory = this.typedHistory.slice(this.buffSize * (-1));
        }
    };

    this.contentEl.on('keyup', (e) => {
        if (e.which === CTRL_KEYCODE) {
            this.ctrlIsDown = false;
        }

        if (e.which === Y_KEYCODE) {
            this.YIsDown = false;
        }

        if (e.which === Z_KEYCODE) {
            this.ZIsDown = false;
        }

        //log in typedHistory
        if (!(unaffectingKeys.includes(e.which)) && (this.ctrlIsDown === false)) {
            if (this.currentState !== (this.typedHistory.length - 1)) {
                this.typedHistory = this.typedHistory.slice(0, (this.currentState + 1));
            }   
            
            this.typedHistory.push(this.mathField.latex());
            this.rearrangeTypedArray()
            this.currentState++;
        }

        console.log(this.typedHistory);
    });

    this.contentEl.on('keydown', (e) => {
        if (e.which === CTRL_KEYCODE) {
            this.ctrlIsDown = true;
        }

        if (e.which === Y_KEYCODE) {
            this.YIsDown = true;
        }

        if (e.which === Z_KEYCODE) {
            this.ZIsDown = true;
        }

        //ctrl+z
        if (this.ctrlIsDown && this.ZIsDown) {
            if (this.currentState !== 0) {
                this.currentState--;
                this.mathField.latex(this.typedHistory[this.currentState]);
            }  else {
                console.log('do nothing');
            }
        }

        //ctrl + y
        if (this.ctrlIsDown && this.YIsDown) {
            if (this.currentState < (this.typedHistory.length - 1)) {
                this.currentState++;
                this.mathField.latex(this.typedHistory[this.currentState]);
            } else {
                console.log('do nothing');
            }
        }
    });
}