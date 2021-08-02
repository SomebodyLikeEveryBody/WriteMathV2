var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["TILDE_KEY"] = 0] = "TILDE_KEY";
    KeyCodes[KeyCodes["BACKSPACE_KEY"] = 8] = "BACKSPACE_KEY";
    KeyCodes[KeyCodes["TAB_KEY"] = 9] = "TAB_KEY";
    KeyCodes[KeyCodes["ENTER_KEY"] = 13] = "ENTER_KEY";
    KeyCodes[KeyCodes["SHIFT_KEY"] = 16] = "SHIFT_KEY";
    KeyCodes[KeyCodes["CTRL_KEY"] = 17] = "CTRL_KEY";
    KeyCodes[KeyCodes["ALT_KEY"] = 18] = "ALT_KEY";
    KeyCodes[KeyCodes["CAPSLOCK_KEY"] = 20] = "CAPSLOCK_KEY";
    KeyCodes[KeyCodes["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
    KeyCodes[KeyCodes["SPACE_KEY"] = 32] = "SPACE_KEY";
    KeyCodes[KeyCodes["PAGEUP_KEY"] = 33] = "PAGEUP_KEY";
    KeyCodes[KeyCodes["PAGEDOWN_KEY"] = 34] = "PAGEDOWN_KEY";
    KeyCodes[KeyCodes["END_KEY"] = 35] = "END_KEY";
    KeyCodes[KeyCodes["HOME_KEY"] = 36] = "HOME_KEY";
    KeyCodes[KeyCodes["LEFTARROW_KEY"] = 37] = "LEFTARROW_KEY";
    KeyCodes[KeyCodes["UPARROW_KEY"] = 38] = "UPARROW_KEY";
    KeyCodes[KeyCodes["RIGHTARROW_KEY"] = 39] = "RIGHTARROW_KEY";
    KeyCodes[KeyCodes["DOWNARROW_KEY"] = 40] = "DOWNARROW_KEY";
    KeyCodes[KeyCodes["DELETE_KEY"] = 46] = "DELETE_KEY";
    KeyCodes[KeyCodes["N0_KEY"] = 48] = "N0_KEY";
    KeyCodes[KeyCodes["SIX_KEY"] = 54] = "SIX_KEY";
    KeyCodes[KeyCodes["SEVEN_KEY"] = 55] = "SEVEN_KEY";
    KeyCodes[KeyCodes["EIGHT_KEY"] = 56] = "EIGHT_KEY";
    KeyCodes[KeyCodes["NINE_KEY"] = 57] = "NINE_KEY";
    KeyCodes[KeyCodes["SEMICOLON_KEY"] = 59] = "SEMICOLON_KEY";
    KeyCodes[KeyCodes["EQUAL_KEY"] = 61] = "EQUAL_KEY";
    KeyCodes[KeyCodes["A_KEY"] = 65] = "A_KEY";
    KeyCodes[KeyCodes["C_KEY"] = 67] = "C_KEY";
    KeyCodes[KeyCodes["D_KEY"] = 68] = "D_KEY";
    KeyCodes[KeyCodes["E_KEY"] = 69] = "E_KEY";
    KeyCodes[KeyCodes["F_KEY"] = 70] = "F_KEY";
    KeyCodes[KeyCodes["G_KEY"] = 71] = "G_KEY";
    KeyCodes[KeyCodes["I_KEY"] = 73] = "I_KEY";
    KeyCodes[KeyCodes["L_KEY"] = 76] = "L_KEY";
    KeyCodes[KeyCodes["N_KEY"] = 78] = "N_KEY";
    KeyCodes[KeyCodes["O_KEY"] = 79] = "O_KEY";
    KeyCodes[KeyCodes["P_KEY"] = 80] = "P_KEY";
    KeyCodes[KeyCodes["Q_KEY"] = 81] = "Q_KEY";
    KeyCodes[KeyCodes["R_KEY"] = 82] = "R_KEY";
    KeyCodes[KeyCodes["S_KEY"] = 83] = "S_KEY";
    KeyCodes[KeyCodes["T_KEY"] = 84] = "T_KEY";
    KeyCodes[KeyCodes["U_KEY"] = 85] = "U_KEY";
    KeyCodes[KeyCodes["V_KEY"] = 86] = "V_KEY";
    KeyCodes[KeyCodes["W_KEY"] = 87] = "W_KEY";
    KeyCodes[KeyCodes["Y_KEY"] = 89] = "Y_KEY";
    KeyCodes[KeyCodes["Z_KEY"] = 90] = "Z_KEY";
    KeyCodes[KeyCodes["MINUS_KEY"] = 173] = "MINUS_KEY";
    KeyCodes[KeyCodes["OPENCHEVRON_KEY"] = 188] = "OPENCHEVRON_KEY";
    KeyCodes[KeyCodes["CLOSECHEVRON_KEY"] = 190] = "CLOSECHEVRON_KEY";
    KeyCodes[KeyCodes["OPENHOOK_KEY"] = 219] = "OPENHOOK_KEY";
    KeyCodes[KeyCodes["PIPE_KEY"] = 220] = "PIPE_KEY";
    KeyCodes[KeyCodes["CLOSEHOOK_KEY"] = 221] = "CLOSEHOOK_KEY";
    KeyCodes[KeyCodes["ALTGR_KEY"] = 225] = "ALTGR_KEY";
})(KeyCodes || (KeyCodes = {}));
var g_keywordsList = [
    {
        keyword: "\\exists",
        tags: "exist",
    },
    {
        keyword: "\\exists!",
        tags: "exist",
    },
    {
        keyword: "\\nexists",
        tags: "existe",
    },
    {
        keyword: "\\neg",
        tags: "not neg",
    },
    {
        keyword: "\\forall",
        tags: "forall",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\neq",
        tags: "equal",
    },
    {
        keyword: "\\nsubseteq",
        tags: "included",
    },
    {
        keyword: "\\subsetneq",
        tags: "included",
    },
    {
        keyword: "\\notin ",
        tags: "in",
    },
    {
        keyword: "\\ngtr",
        tags: "greater",
    },
    {
        keyword: "\\ngeq",
        tags: "greater",
    },
    {
        keyword: "\\nsupseteq",
        tags: "include",
    },
    {
        keyword: "\\supsetneq",
        tags: "include",
    },
    {
        keyword: "\\subset",
        tags: "include",
    },
    {
        keyword: "\\subseteq",
        tags: "include",
    },
    {
        keyword: "\\supset",
        tags: "include",
    },
    {
        keyword: "\\supseteq",
        tags: "include",
    },
    {
        keyword: "\\emptyset",
        tags: "set empty",
    },
    {
        keyword: "\\ni",
        tags: "in",
    },
    {
        keyword: "\\in",
        tags: "in",
    },
    {
        keyword: "\\cup",
        tags: "union",
    },
    {
        keyword: "\\cap",
        tags: "inter",
    },
    {
        keyword: "\\in",
        tags: "in",
    },
    {
        keyword: "\\lor",
        tags: "or",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "arrow implies",
    },
    {
        keyword: "\\implies",
        tags: "implies",
    },
    {
        keyword: "\\Rightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\Longleftarrow",
        tags: "arrow",
    },
    {
        keyword: "\\Leftarrow",
        tags: "arrow",
    },
    {
        keyword: " \\Leftrightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\iff",
        tags: "equiv iff",
    },
    {
        keyword: "\\overline ",
        tags: "overline",
    },
    {
        keyword: "\\perp",
        tags: "perpendicular",
    },
    {
        keyword: "\\parallel",
        tags: "parallel",
    },
    {
        keyword: "\\nparallel",
        tags: "parallel",
    },
    {
        keyword: "\\lceil",
        tags: "ceil approx round",
    },
    {
        keyword: "\\rceil",
        tags: "ceil approx round",
    },
    {
        keyword: "\\lfloor",
        tags: "floor approx round",
    },
    {
        keyword: "\\rfloor",
        tags: "floor approx round",
    },
    {
        keyword: "\\rightarrow",
        tags: "right arrow",
    },
    {
        keyword: "\\mapsto",
        tags: "arrow",
    },
    {
        keyword: "\\leftarrow",
        tags: "left arrow",
    },
    {
        keyword: "\\Rightarrow",
        tags: "right arrow",
    },
    {
        keyword: "\\Leftarrow",
        tags: "left arrow",
    },
    {
        keyword: "\\longrightarrow",
        tags: "long right arrow",
    },
    {
        keyword: "\\longleftarrow",
        tags: "long left arrow",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "long right arrow",
    },
    {
        keyword: "\\Longleftarrow",
        tags: "long left arrow",
    },
    {
        keyword: "\\uparrow",
        tags: "up arrow",
    },
    {
        keyword: "\\downarrow",
        tags: "down arrow",
    },
    {
        keyword: "\\updownarrow",
        tags: "up down arrow",
    },
    {
        keyword: "\\Uparrow",
        tags: "up arrow",
    },
    {
        keyword: "\\Downarrow",
        tags: "down arrow",
    },
    {
        keyword: "\\Updownarrow",
        tags: "up down arrow",
    },
    {
        keyword: "\\partial",
        tags: "round d partial",
    },
    {
        keyword: "\\nabla",
        tags: "del nabla",
    },
    {
        keyword: "\\infty",
        tags: "infinity",
    },
    {
        keyword: "\\downarrow",
        tags: "down arrow",
    },
    {
        keyword: "Function",
        tags: "function",
    },
    {
        keyword: "Equation",
        tags: "equation",
    },
];
var MathLineInput = /** @class */ (function () {
    function MathLineInput() {
        var _this = this;
        this._jQEl = $('<p class="mathLineInput"></p>');
        this._nextMathLineInput = null;
        this._previousMathLineInput = null;
        this._isDeletable = true;
        this._mathField = MathQuill.getInterface(2).MathField(this._jQEl[0], {
            autoCommands: 'implies infinity lor land neg union notin forall nabla Angstrom alpha beta gamma Gamma delta Delta zeta eta theta Theta iota kappa lambda mu nu pi rho sigma tau phi Phi chi psi Psi omega Omega',
            autoOperatorNames: 'ln log det min max mod lcm gcd lim sin cos tan sec Function isEven isOdd divides Given Equation diff',
            handlers: {
                edit: function () {
                },
                enter: function () {
                    if ((_this._autoCompleter.isVisible() === false)) {
                        var newMathLineInput = _this.createNewMathLineInputAndAppendAfter(_this);
                        newMathLineInput.focus();
                    }
                },
                upOutOf: function () {
                    if (_this.hasPreviousMathLineInput()) {
                        if (!_this.autoCompleterIsVisible()) {
                            _this.previousMathLineInput.focus();
                        }
                    }
                },
                downOutOf: function () {
                    if (_this.hasNextMathLineInput()) {
                        if (!_this.autoCompleterIsVisible()) {
                            _this.nextMathLineInput.focus();
                        }
                    }
                },
            }
        });
        this._autoCompleter = new AutoCompleter(this, g_keywordsList);
        this._undoRedoManager = new UndoRedoManager(this);
        this.setEvents();
    }
    Object.defineProperty(MathLineInput.prototype, "jQEl", {
        /* * * * * * * * * * * *
         * Getters and setters *
         * * * * * * * * * * * */
        get: function () {
            return this._jQEl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "nextMathLineInput", {
        get: function () {
            return this._nextMathLineInput;
        },
        set: function (pMathLineInput) {
            this._nextMathLineInput = pMathLineInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "previousMathLineInput", {
        get: function () {
            return this._previousMathLineInput;
        },
        set: function (pMathLineInput) {
            this._previousMathLineInput = pMathLineInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "mathField", {
        get: function () {
            return this._mathField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "isDeletable", {
        get: function () {
            return this._isDeletable;
        },
        set: function (pBool) {
            this._isDeletable = pBool;
        },
        enumerable: false,
        configurable: true
    });
    /* * * * * *
     * Methods *
     * * * * * */
    MathLineInput.prototype.focus = function () {
        this._mathField.focus();
    };
    MathLineInput.prototype.value = function () {
        return this._mathField.latex();
    };
    MathLineInput.prototype.setValue = function (pValue) {
        this._mathField.latex(pValue);
    };
    MathLineInput.prototype.appendValueAtCursorPosition = function (pValue) {
        this._mathField.typedText(pValue);
    };
    MathLineInput.prototype.appendCmdAtCursorPosition = function (pValue) {
        this._mathField.cmd(pValue);
    };
    MathLineInput.prototype.isEmpty = function () {
        return this.value() === '';
    };
    MathLineInput.prototype.appendTo = function (pElement) {
        this._jQEl.appendTo(pElement);
    };
    MathLineInput.prototype.hasPreviousMathLineInput = function () {
        return this._previousMathLineInput !== null;
    };
    MathLineInput.prototype.hasNextMathLineInput = function () {
        return this._nextMathLineInput !== null;
    };
    MathLineInput.prototype.insertAfter = function (pElement) {
        this._jQEl.insertAfter(pElement);
    };
    MathLineInput.prototype.setCtrlToDown = function () {
        this._undoRedoManager.setCtrlToDown();
    };
    MathLineInput.prototype.createNewMathLineInputAndAppendAfter = function (pMathLineInput) {
        var newMathLineInput = new MathLineInput();
        newMathLineInput.insertAfter(pMathLineInput.jQEl);
        if (pMathLineInput.hasNextMathLineInput()) {
            pMathLineInput.nextMathLineInput.previousMathLineInput = newMathLineInput;
            newMathLineInput.nextMathLineInput = pMathLineInput.nextMathLineInput;
        }
        pMathLineInput.nextMathLineInput = newMathLineInput;
        newMathLineInput.previousMathLineInput = pMathLineInput;
        newMathLineInput.isDeletable = true;
        return newMathLineInput;
    };
    MathLineInput.prototype.getCursorCoordinates = function () {
        this.mathField.focus();
        var retOffset = this.mathField.__controller.cursor.offset();
        if (!(retOffset)) {
            retOffset = { 'top': 0, 'left': 0 };
        }
        return retOffset;
    };
    ;
    MathLineInput.prototype.erase = function () {
        if (this.hasPreviousMathLineInput()) {
            this.previousMathLineInput.nextMathLineInput = this.nextMathLineInput;
        }
        if (this.hasNextMathLineInput()) {
            this.nextMathLineInput.previousMathLineInput = this.previousMathLineInput;
        }
        this._autoCompleter.hide();
        this._jQEl.remove();
    };
    ;
    MathLineInput.prototype.keyDown = function (pFunction) {
        this.jQEl.keydown(function (e) { return pFunction(e); });
    };
    MathLineInput.prototype.keyUp = function (pFunction) {
        this.jQEl.keyup(function (e) { return pFunction(e); });
    };
    MathLineInput.prototype.autoCompleterIsVisible = function () {
        return this._autoCompleter.isVisible();
    };
    MathLineInput.prototype.blur = function () {
        this._mathField.blur();
    };
    MathLineInput.prototype.deleteLeftWord = function (pWordLen) {
        for (var i = 0; i < pWordLen; i++) {
            this._mathField.keystroke('Shift-Left');
        }
        this._mathField.keystroke('Backspace');
    };
    MathLineInput.prototype.setEvents = function () {
        var _this = this;
        this.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent();
        this._jQEl.focusout(function () {
            _this._autoCompleter.hide();
        });
    };
    MathLineInput.prototype.setDeleteIfBackSpaceInEmptyFieldIsTypedEvent = function () {
        var _this = this;
        this.keyDown(function (e) {
            //press delete
            if (e.which === KeyCodes.DELETE_KEY && _this.isEmpty()) {
                if (_this.hasPreviousMathLineInput() || _this.hasNextMathLineInput()) {
                    if (_this.hasNextMathLineInput()) {
                        _this.nextMathLineInput.focus();
                    }
                    else {
                        _this.previousMathLineInput.focus();
                    }
                    _this.erase();
                }
                //press backspace
            }
            else if (e.which === KeyCodes.BACKSPACE_KEY && _this.isDeletable) {
                if (_this.hasPreviousMathLineInput() && _this.isEmpty()) {
                    _this.erase();
                    _this.previousMathLineInput.focus();
                }
            }
            else if (e.which === KeyCodes.ESCAPE_KEY) {
                if (_this.autoCompleterIsVisible()) {
                    _this._autoCompleter.hide();
                }
                else {
                    _this.blur();
                }
            }
            else if (_this.isEmpty()) {
                _this.isDeletable = true;
            }
            else {
                _this.isDeletable = false;
            }
        });
    };
    MathLineInput.prototype.getLocationOf = function (pCursor) {
        var L = -1;
        var R = 1;
        var retCursorLocation = [];
        var mathfieldTreeElement;
        if (pCursor[L]) {
            retCursorLocation.push('insRightOf');
            mathfieldTreeElement = pCursor[L];
        }
        else if (pCursor[R]) {
            retCursorLocation.push('insLeftOf');
            mathfieldTreeElement = pCursor[R];
        }
        else {
            retCursorLocation.push('insAtLeftEnd');
            mathfieldTreeElement = pCursor.parent;
        }
        while (mathfieldTreeElement != this._mathField.__controller.root) {
            if (mathfieldTreeElement[L]) {
                retCursorLocation.push('L');
                mathfieldTreeElement = mathfieldTreeElement[L];
            }
            else {
                retCursorLocation.push('endsL');
                mathfieldTreeElement = mathfieldTreeElement.parent;
            }
        }
        return retCursorLocation.reverse();
    };
    MathLineInput.prototype.getCursorConfiguration = function () {
        if (this._mathField.__controller.cursor.anticursor) {
            return {
                cursor: this.getLocationOf(this._mathField.__controller.cursor),
                anticursor: this.getLocationOf(this._mathField.__controller.cursor.anticursor)
            };
        }
        else {
            return { cursor: this.getLocationOf(this._mathField.__controller.cursor) };
        }
    };
    MathLineInput.prototype.setLocationOf = function (pCursor) {
        var L = -1;
        var R = 1;
        var mathfieldTreeElement = this._mathField.__controller.root;
        for (var i = 0; i < pCursor.length; i++) {
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
    };
    MathLineInput.prototype.setCursorConfiguration = function (pCursorConfiguration) {
        this._mathField.__controller.cursor.clearSelection();
        this._mathField.__controller.cursor.startSelection();
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
    };
    MathLineInput.prototype.showCursor = function () {
        this._mathField.__controller.cursor.show();
    };
    return MathLineInput;
}());
var unaffectingKeys = [
    KeyCodes.ENTER_KEY,
    KeyCodes.SHIFT_KEY,
    KeyCodes.CTRL_KEY,
    KeyCodes.ALT_KEY,
    KeyCodes.CAPSLOCK_KEY,
    KeyCodes.ESCAPE_KEY,
    KeyCodes.PAGEUP_KEY,
    KeyCodes.PAGEDOWN_KEY,
    KeyCodes.ALTGR_KEY,
];
var UndoRedoManager = /** @class */ (function () {
    function UndoRedoManager(pMathLineInput) {
        this._mathLineInput = pMathLineInput;
        this._ctrlIsDown = false;
        this._altIsDown = false;
        this._YIsDown = false;
        this._ZIsDown = false;
        this._currentState = 0;
        this._buffSize = 50;
        this._typedHistory = [
            {
                value: this._mathLineInput.value(),
                cursorConfiguration: this._mathLineInput.getCursorConfiguration()
            }
        ];
        this.setEvents();
    }
    UndoRedoManager.prototype.setCtrlToDown = function () {
        this._ctrlIsDown = true;
    };
    UndoRedoManager.prototype.rearrangeTypedHistoryArray = function () {
        if (this._typedHistory.length > this._buffSize) {
            var sizeOverflow = ((this._typedHistory.length) - this._buffSize.valueOf());
            this._currentState = this._currentState.valueOf() - sizeOverflow.valueOf();
            this._typedHistory = this._typedHistory.slice(this._buffSize.valueOf() * (-1));
        }
    };
    UndoRedoManager.prototype.isKeyIsUnaffecting = function (pKey) {
        for (var _i = 0, unaffectingKeys_1 = unaffectingKeys; _i < unaffectingKeys_1.length; _i++) {
            var keyCode = unaffectingKeys_1[_i];
            if (keyCode === pKey) {
                return true;
            }
        }
        return false;
    };
    UndoRedoManager.prototype.checkIfSpecialKeysAreUpAndSetStates = function (pUppedKey) {
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
    };
    UndoRedoManager.prototype.checkIfSpecialKeysAreDownAndSetStates = function (pDownedKey) {
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
    };
    UndoRedoManager.prototype.isCurrentStateIsLastHistoryState = function () {
        return (this._currentState === (this._typedHistory.length - 1));
    };
    UndoRedoManager.prototype.isCurrentStateIsFirstHistoryState = function () {
        return (this._currentState === 0);
    };
    UndoRedoManager.prototype.saveState = function () {
        if (!(this.isCurrentStateIsLastHistoryState())) {
            this._typedHistory = this._typedHistory.slice(0, (this._currentState.valueOf() + 1));
        }
        this._typedHistory.push({
            value: this._mathLineInput.value(),
            cursorConfiguration: this._mathLineInput.getCursorConfiguration()
        });
        this.rearrangeTypedHistoryArray();
        this._currentState = this._currentState.valueOf() + 1;
    };
    UndoRedoManager.prototype.getValueHistoryAtState = function (pState) {
        return this._typedHistory[pState.valueOf()].value;
    };
    UndoRedoManager.prototype.getCursorConfigurationHistoryAtState = function (pState) {
        return this._typedHistory[pState.valueOf()].cursorConfiguration;
    };
    UndoRedoManager.prototype.undo = function () {
        if (!this.isCurrentStateIsFirstHistoryState()) {
            this._currentState = this._currentState.valueOf() - 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
            this._mathLineInput.setCursorConfiguration(this.getCursorConfigurationHistoryAtState(this._currentState));
            this._mathLineInput.showCursor();
        }
        else {
            //console.log('do nothing');
        }
    };
    UndoRedoManager.prototype.redo = function () {
        if (!this.isCurrentStateIsLastHistoryState()) {
            this._currentState = this._currentState.valueOf() + 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
            this._mathLineInput.setCursorConfiguration(this.getCursorConfigurationHistoryAtState(this._currentState));
        }
        else {
            //console.log('do nothing');
        }
    };
    UndoRedoManager.prototype.setEvents = function () {
        var _this = this;
        this.setKeyUpEvents();
        this.setKeyDownEvents();
        window.addEventListener('blur', function () {
            _this.setKeysToDown();
        });
    };
    UndoRedoManager.prototype.setKeyUpEvents = function () {
        var _this = this;
        this._mathLineInput.keyUp(function (e) {
            _this.checkIfSpecialKeysAreUpAndSetStates(e.which);
            if (e.which === KeyCodes.ALT_KEY) {
                e.preventDefault();
            }
            if ((_this.isKeyIsUnaffecting(e.which) === false)
                && (_this._ctrlIsDown === false || (_this._ctrlIsDown && e.which === KeyCodes.V_KEY))) {
                _this.saveState();
            }
        });
    };
    UndoRedoManager.prototype.setKeyDownEvents = function () {
        var _this = this;
        this._mathLineInput.keyDown(function (e) {
            // console.log(e.which);
            _this.checkIfSpecialKeysAreDownAndSetStates(e.which);
            //set CTRL shortcuts
            if (_this._ctrlIsDown) {
                _this.bindCtrlShortcuts(e);
            }
            if (_this._altIsDown) {
                e.preventDefault();
                _this.bindAltShortcuts(e);
            }
            // ctrl + Z ==> undo
            if (_this._ctrlIsDown && _this._ZIsDown) {
                e.preventDefault();
                _this.undo();
            }
            // ctrl + Y ==> redo
            if (_this._ctrlIsDown && _this._YIsDown) {
                e.preventDefault();
                _this.redo();
            }
        });
    };
    UndoRedoManager.prototype.setKeysToDown = function () {
        this._ctrlIsDown = false;
        this._altIsDown = false;
        this._YIsDown = false;
        this._ZIsDown = false;
    };
    UndoRedoManager.prototype.bindCtrlShortcuts = function (pEventObj) {
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
                    var newMathlineInput = this._mathLineInput.createNewMathLineInputAndAppendAfter(this._mathLineInput);
                    newMathlineInput.setValue(this._mathLineInput.value());
                    console.log(this._mathLineInput.value());
                    this.setKeysToDown();
                    newMathlineInput.focus();
                    newMathlineInput.setCtrlToDown();
                }
                break;
        }
    };
    UndoRedoManager.prototype.bindAltShortcuts = function (pEventObj) {
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
    };
    return UndoRedoManager;
}());
/******************************************************************************************
* AutoCompleterManager:
* Wrapper object that wrap the textarea where the auto-completion takes place.
* It reimplements the functions of the textarea jQuery element
* and implements new ones.
* */
var AutoCompleterManager = /** @class */ (function () {
    function AutoCompleterManager(pInputTextElement) {
        this._inputTextElement = pInputTextElement;
        this._autoCompletionWidget = new AutoCompletionWidget(this);
    }
    /*
    * AutoCompleterManager.keydown():
    * Shortcut to use this.jqEl.keydown
    * */
    AutoCompleterManager.prototype.keyDown = function (pFunction) {
        this._inputTextElement.keyDown(pFunction);
    };
    AutoCompleterManager.prototype.deleteLeftWord = function (pWordLen) {
        this._inputTextElement.deleteLeftWord(pWordLen);
    };
    AutoCompleterManager.prototype.updateContentAndShow = function (pKwList) {
        this._autoCompletionWidget.updateContentAndShow(pKwList);
    };
    AutoCompleterManager.prototype.getValueFromInputText = function () {
        return this._inputTextElement.value();
    };
    AutoCompleterManager.prototype.selectNextKeyword = function () {
        this._autoCompletionWidget.selectNextKeyword();
    };
    AutoCompleterManager.prototype.selectPreviousKeyword = function () {
        this._autoCompletionWidget.selectPreviousKeyword();
    };
    AutoCompleterManager.prototype.setValueToInputText = function (pValue) {
        this._inputTextElement.setValue(pValue);
    };
    AutoCompleterManager.prototype.isVisible = function () {
        return this._autoCompletionWidget.isVisible();
    };
    AutoCompleterManager.prototype.getSelectedKeyword = function () {
        return this._autoCompletionWidget.getSelectedKeyword();
    };
    AutoCompleterManager.prototype.hide = function () {
        this._autoCompletionWidget.hide();
    };
    AutoCompleterManager.prototype.show = function () {
        this._autoCompletionWidget.show();
    };
    AutoCompleterManager.prototype.setVisibility = function (pBool) {
        this._autoCompletionWidget.setVisibility(pBool);
    };
    /*
    * AutoCompleterManager.keyup():
    * Shortcut to use this.jqEl.keyup
    * */
    AutoCompleterManager.prototype.keyUp = function (pFunction) {
        this._inputTextElement.keyUp(pFunction);
    };
    /*
    * AutoCompleterManager.focus():
    * Put the focus on the AutoCompleterManager
    * */
    AutoCompleterManager.prototype.focus = function () {
        this._inputTextElement.focus();
    };
    /*
    * AutoCompleterManager.getSelectionStart():
    * Returns the selectionStart value of the <textatrea#input> element.
    * This will be rewrote in a near future to be up to date ==> <REWRITE>
    * */
    AutoCompleterManager.prototype.getSelectionStart = function () {
        // return this._inputTextElement.get(0).selectionStart;
        return 42;
    };
    /*
    * AutoCompleterManager.getInputStr():
    * Gives the content of the AutoCompleterManager in raw str
    * */
    AutoCompleterManager.prototype.getInputStr = function () {
        return this._inputTextElement.value();
    };
    /*
    * AutoCompleterManager.getCurrentlyTypingWord():
    * Returns the word being typed by the user.
    * This function is used to filter the keywordsList in order to
    * display the suggested keywords according to what the user is currently typing.
    * */
    AutoCompleterManager.prototype.getCurrentlyTypingWord = function () {
        var words = this.getInputStr()
            .replace(/_/g, ' ')
            .replace(/\^/g, ' ')
            .replace(/\{/g, ' ')
            .replace(/\}/g, ' [END_BRACKET]')
            .replace(/\\left\(/g, ' ')
            .replace(/\\right\)/g, ' [END_PARENTHESIS]')
            .replace('\\', ' ')
            .split(' ');
        // console.log(words);
        var typingWord = '[END_BRACKET]';
        while (typingWord === '[END_BRACKET]' || typingWord === '[END_PARENTHESIS]') {
            typingWord = words.pop();
        }
        if (typingWord.indexOf('[END_BRACKET]') !== -1) {
            typingWord = typingWord.replace(/\[END_BRACKET\]/g, '');
        }
        if (typingWord.indexOf('[END_PARENTHESIS]') !== -1) {
            typingWord = typingWord.replace(/\[END_PARENTHESIS\]/g, '');
        }
        // console.log('total: ', this.inputTextElement.getValue());
        // console.log('last: ', content);
        return typingWord;
    };
    ;
    /*
     * AutoCompleterManager.getCaretCoordinates():
     * Returns the Top and Left coordinates of the caret in the AutoCompleterManager.
     * Uses getCaretCoordinates() function defined in  ./textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    AutoCompleterManager.prototype.getCursorCoordinates = function () {
        return this._inputTextElement.getCursorCoordinates();
    };
    /*
     * AutoCompleterManager.setContent(pValue):
     * Erase all the content of the AutoCompleterManager and set its content to pValue
     * */
    AutoCompleterManager.prototype.setContent = function (pValue) {
        this._inputTextElement.setValue(pValue);
    };
    AutoCompleterManager.prototype.addContent = function (pValue) {
        this._inputTextElement.appendValueAtCursorPosition(pValue);
    };
    AutoCompleterManager.prototype.addCmd = function (pValue) {
        this._inputTextElement.appendCmdAtCursorPosition(pValue);
    };
    return AutoCompleterManager;
}());
/******************************************************************************************
* AutoCompletionWidget:
* Wrapper Object that manages the auto-completion Widget displayed over the textarea.
* Attributes are:
* - this.currentKeywordSelectedIndex = the index of the selected keyword in the widget
*                                      (-1 if no keyword is selected)
* - this.nbKeywords = the number of keywords displayed in the widget
* - this.isVisible = boolean, true if the widget is asked to be visible while typing,
*                    false if not.
*
* - this.AutoCompleterManager = the AutoCompleterManager Object where the auto-completion takes place
* */
var AutoCompletionWidget = /** @class */ (function () {
    function AutoCompletionWidget(pAutoCompleterManager) {
        /*
        * AutoCompletionWidget.show():
        * Displays the auto-completion widget in the AutoCompleterManager
        * */
        this.show = function () {
            this._jQEl.fadeIn(100);
        };
        this._jQEl = $('<ul id="auto_completer"></ul>');
        this.hide(0);
        this.appendTo($('body'));
        this._currentKeywordSelectedIndex = -1;
        this._nbKeywords = 0;
        this._isVisible = false;
        this._autoCompleterManager = pAutoCompleterManager;
    }
    AutoCompletionWidget.prototype.isVisible = function () {
        return this._isVisible;
    };
    /*
    * AutoCompletionWidget.hide():
    * Hides the auto-completion widget
    * */
    AutoCompletionWidget.prototype.hide = function (pTime) {
        var _this = this;
        if (pTime === void 0) { pTime = 100; }
        this._jQEl.fadeOut(100, function () {
            _this.emptyContent();
        });
    };
    ;
    AutoCompletionWidget.prototype.appendTo = function (pElement) {
        this._jQEl.appendTo(pElement);
    };
    AutoCompletionWidget.prototype.setVisibility = function (pBool) {
        this._isVisible = pBool;
    };
    /*
    * AutoCompletionWidget.emptyContent():
    * Empty the content of the widget
    * */
    AutoCompletionWidget.prototype.emptyContent = function () {
        this._jQEl.html('');
        this._nbKeywords = 0;
        this._currentKeywordSelectedIndex = -1;
    };
    ;
    /*
    * AutoCompletionWidget.getLiElements():
    * Returns all Li elements contained in the widget
    * */
    AutoCompletionWidget.prototype.getLiElements = function () {
        return this._jQEl.find('li');
    };
    /*
    * AutoCompletionWidget.positionWidgetUnderCaret():
    * Positions the widget under the caret of the textarea
    * For now, it shifts the coordinates to 30px down and 5px right
    * but in the near future we will shift with relative values
    * to give more flexibility and adapt font-sizes that have not
    * default values.
    * */
    AutoCompletionWidget.prototype.positionWidgetUnderCursor = function () {
        var caretCoords = this._autoCompleterManager.getCursorCoordinates();
        this._jQEl.css({
            "top": '' + (caretCoords.top.valueOf() + 30) + 'px',
            "left": '' + (caretCoords.left.valueOf() + 5) + 'px',
        });
    };
    /*
    * AutoCompletionWidget.getFirstLiElement():
    * Returns the first Li elements contained in the widget
    * */
    AutoCompletionWidget.prototype.getFirstLiElement = function () {
        return this.getLiElements().first();
    };
    /*
    * AutoCompletionWidget.setLiElementSelected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to selected
    * */
    AutoCompletionWidget.prototype.setLiElementSelected = function (pLiElement) {
        pLiElement.addClass('selected_keyword');
    };
    /*
    * AutoCompletionWidget.setLiElementUnselected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to NOT selected
    * */
    AutoCompletionWidget.prototype.setLiElementUnselected = function (pLiElement) {
        pLiElement.removeClass('selected_keyword');
    };
    /*
    * AutoCompletionWidget.updateContentAndShow(pKwList):
    * Updates the content of the widget by clearing its content
    * and filling it with the keyword list given in argument (pKwList).
    * Then it displays it if there is at leat one keyword, or hide it if not.
    * */
    AutoCompletionWidget.prototype.updateContentAndShow = function (pKwList) {
        this.emptyContent();
        this._nbKeywords = pKwList.length;
        if (pKwList.length !== 0) {
            this.positionWidgetUnderCursor();
            for (var _i = 0, pKwList_1 = pKwList; _i < pKwList_1.length; _i++) {
                var keyword = pKwList_1[_i];
                this._jQEl.append($('<li>' + keyword + '</li>'));
            }
            if (this._currentKeywordSelectedIndex === -1) {
                this.setLiElementSelected(this.getFirstLiElement());
                this._currentKeywordSelectedIndex = 0;
            }
            this.show();
        }
        else {
            this.hide();
        }
    };
    /*
    * AutoCompletionWidget.getSelectedLiEl():
    * Returns the selected Li element in the widget
    * */
    AutoCompletionWidget.prototype.getSelectedLiEl = function () {
        return $(this.getLiElements()[this._currentKeywordSelectedIndex]);
    };
    /*
    * AutoCompletionWidget.getSelectedKeyword():
    * Returns the selected keyword in the widget
    * */
    AutoCompletionWidget.prototype.getSelectedKeyword = function () {
        return this.getSelectedLiEl().text();
    };
    ;
    /*
    * AutoCompletionWidget.selectNextKeyword():
    * Set to selected the Li element in the widget that is next to the currently
    * selected Li element, and unselect this one
    * */
    AutoCompletionWidget.prototype.selectNextKeyword = function () {
        var selectedLiEl = this.getSelectedLiEl();
        var nextLiEl = selectedLiEl.next();
        if (nextLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            nextLiEl.addClass('selected_keyword');
            this._currentKeywordSelectedIndex += 1;
        }
    };
    ;
    /*
    * AutoCompletionWidget.selectPreviousKeyword():
    * Set to selected the Li element in the widget that is before the currently
    * selected Li element, and unselect this one
    * */
    AutoCompletionWidget.prototype.selectPreviousKeyword = function () {
        var selectedLiEl = this.getSelectedLiEl();
        var previousLiEl = selectedLiEl.prev();
        if (previousLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            previousLiEl.addClass('selected_keyword');
            this._currentKeywordSelectedIndex -= 1;
        }
    };
    return AutoCompletionWidget;
}());
/*******************************************************************************************
* ClickAndKeyListener:
* Object that Manages the events definition
* */
var ClickAndKeyListener = /** @class */ (function () {
    function ClickAndKeyListener(pAutoCompleterManager) {
        this._IsCtrlKeyIsDown = false;
        this._autoCompleterManager = pAutoCompleterManager;
    }
    /*
    * ClickAndKeyListener.setKeydownEventsToAutoCompleterManager(pController):
    * Definition of what to do when we press keys in the AutoCompleterManager.
    *  .  CTRL + SPACE ==> display / hide the auto-completer widget
    *  .  UP / DOWN / ENTER / BACKSPACE ==> navigation into the auto-completer widget
    *  .  ESCAPE ==> hide auto-completer widget
    * */
    ClickAndKeyListener.prototype.setKeyDownEventsToAutoCompleterManager = function (pController) {
        var _this = this;
        this._autoCompleterManager.keyDown(function (e) {
            if (e.which === KeyCodes.CTRL_KEY) {
                _this._IsCtrlKeyIsDown = true;
            }
            /*
             * Ctrl key down + SPACE
             * */
            if (_this._IsCtrlKeyIsDown) {
                if (e.which === KeyCodes.SPACE_KEY) {
                    if (_this._autoCompleterManager.isVisible() === true) {
                        _this._autoCompleterManager.hide();
                        _this._autoCompleterManager.setVisibility(false);
                    }
                    else {
                        var keywordsList = pController.getFormatedMatchkingKeywordsList();
                        if (keywordsList.length === 1) {
                            _this.writeKeyword(keywordsList[0]);
                        }
                        else {
                            _this._autoCompleterManager.updateContentAndShow(keywordsList);
                            _this._autoCompleterManager.setVisibility(true);
                        }
                    }
                }
                /*
                 * Ctrl key is up and auto-completer widget is visibles
                 * */
            }
            else if (_this._autoCompleterManager.isVisible()) {
                if (e.which === KeyCodes.ENTER_KEY) {
                    var selectedKeyword = _this._autoCompleterManager.getSelectedKeyword();
                    // const currentlyTypingWord = this._autoCompleterManager.getCurrentlyTypingWord();
                    // const inputStr = this._autoCompleterManager.getInputStr();
                    //let startText = inputStr.substring(0, this.AutoCompleterManager.getSelectionStart() - currentlyTypingWord.length);
                    //let endText = inputStr.substring(this.AutoCompleterManager.getSelectionStart(), inputStr.length);
                    // console.log(selectedKeyword);
                    if (selectedKeyword !== '') {
                        _this.writeKeyword(selectedKeyword);
                        _this._autoCompleterManager.hide();
                        _this._autoCompleterManager.setVisibility(false);
                        e.preventDefault();
                    }
                }
                else if (e.which === KeyCodes.DOWNARROW_KEY) {
                    _this._autoCompleterManager.selectNextKeyword();
                    e.preventDefault();
                }
                else if (e.which === KeyCodes.UPARROW_KEY) {
                    _this._autoCompleterManager.selectPreviousKeyword();
                    e.preventDefault();
                }
            }
        });
    };
    ClickAndKeyListener.prototype.writeKeyword = function (pSelectedKeyword) {
        this._autoCompleterManager.deleteLeftWord(this._autoCompleterManager.getCurrentlyTypingWord().length);
        if (pSelectedKeyword[0] === '\\') {
            this._autoCompleterManager.addCmd(pSelectedKeyword);
        }
        else {
            this._autoCompleterManager.addContent(pSelectedKeyword);
        }
    };
    /*
    * ClickAndKeyListener.setKeyupEventsToAutoCompleterManager():
    * Definition of what to do when we release keys in the AutoCompleterManager.
    * Very usefull to manage the navigation into the auto-completionWidget
    * */
    ClickAndKeyListener.prototype.setKeyUpEventsToAutoCompleterManager = function (pController) {
        var _this = this;
        this._autoCompleterManager.keyUp(function (e) {
            if (_this._autoCompleterManager.isVisible()
                && (e.which !== KeyCodes.UPARROW_KEY)
                && (e.which !== KeyCodes.DOWNARROW_KEY)) {
                _this._autoCompleterManager.updateContentAndShow(pController.getFormatedMatchkingKeywordsList());
            }
            if (e.which === KeyCodes.CTRL_KEY) {
                _this._IsCtrlKeyIsDown = false;
            }
        });
    };
    /*
    * ClickAndKeyListener.setkeyAndMouseEvents():
    * Set all events definitions of the ClickAndKeyListener object
    * */
    ClickAndKeyListener.prototype.setkeyAndMouseEvents = function (pController) {
        this.setKeyDownEventsToAutoCompleterManager(pController);
        this.setKeyUpEventsToAutoCompleterManager(pController);
    };
    ;
    return ClickAndKeyListener;
}());
/*******************************************************************************************
* AutoCompleter:
* Controller object of the auto-completion feature.
* Manages the events setting through ClickAndKeyListener object
* */
var AutoCompleter = /** @class */ (function () {
    function AutoCompleter(pInputTextElement, pKeywordsList) {
        this._keywordsList = pKeywordsList;
        this._autoCompleterManager = new AutoCompleterManager(pInputTextElement);
        this._clickAndKeyListener = new ClickAndKeyListener(this._autoCompleterManager);
        this._clickAndKeyListener.setkeyAndMouseEvents(this);
    }
    AutoCompleter.prototype.isVisible = function () {
        return this._autoCompleterManager.isVisible();
    };
    AutoCompleter.prototype.hide = function () {
        this._autoCompleterManager.hide();
        this._autoCompleterManager.setVisibility(false);
    };
    /*
    * AutoCompleter.getMatchkingKeywordsList():
    * Returns an array containing all keywords contained in the pList object,
    * but only the word or that is currently typed in the AutoCompleterManager is contained
    * in the keyword or its tags.
    * */
    AutoCompleter.prototype.getMatchkingKeywordsList = function () {
        var currentlyTypingWord = this._autoCompleterManager.getCurrentlyTypingWord().toLowerCase();
        return this._keywordsList.filter(function (el) { return ((el.keyword.toLowerCase().indexOf(currentlyTypingWord) !== -1)
            || (el.tags.toLowerCase().indexOf(currentlyTypingWord) !== -1)); });
    };
    /*
    * Controller.getKeywordsList():
    * Returns an array containing all keywords contained in the pList object,
    * but only the word or that is currently typed in the AutoCompleterManager is contained
    * in the keyword or its tags.
    * But here, "keyword" is meant the string part before the opening parenthesis.
    * To be clear:
    * - if the keyword is a function, like "solv(VAR, EXPR)", the returned keyword in in the array
    *   will be "solv()"
    * - if the keyword isn't a function, like "Infinity", the returned keyword in the array
    *   will be "Infinity"
    *
    * */
    AutoCompleter.prototype.getFormatedMatchkingKeywordsList = function () {
        var helperKeywordsList = this.getMatchkingKeywordsList();
        var retKeywords = helperKeywordsList.map(function (el) {
            var indexOfOpeningParenthesis = el.keyword.indexOf('(');
            if (indexOfOpeningParenthesis !== -1) {
                return el.keyword.substring(0, indexOfOpeningParenthesis + 1) + ')';
            }
            else {
                return el.keyword;
            }
        });
        return (retKeywords.slice(0, 11));
    };
    return AutoCompleter;
}());
//function main(): void {
var firstMathLineInput = new MathLineInput();
firstMathLineInput.appendTo($('#content'));
firstMathLineInput.focus();
// }
// main();
