class SaverNOpenerStateManager {
    protected _jQEl: JQueryElement;
    protected _container: JQueryElement;
    protected _textarea: JQueryElement;
    protected _action: String;
    protected _callingMathLineInput: MathLineInput;
    protected _state: Object;

    public constructor(pContainer: JQueryElement) {
        this._jQEl = $('<div id="SaverNOpenerStateManager"><textarea autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div>');
        this._textarea = this._jQEl.find('textarea');
        this.callingMathLineInput = null;
        this._state = {};

        this._jQEl.appendTo(pContainer).hide(0)
        this.setEvents();
    }

    public get jQEl(): JQueryElement {
        return this._jQEl;
    }

    public get container(): JQueryElement {
        return this._container;
    }

    public get action(): String {
        return this._action;
    }

    public set action(pValue: String) {
        if (pValue === "SAVE" || pValue === "OPEN") {
            this._action = pValue;
        }
    }

    public set callingMathLineInput(pValue: MathLineInput) {
        this._callingMathLineInput = pValue;
    }

    public set state(pValue: Object) {
        this._state = pValue;
    }

    public show(): SaverNOpenerStateManager {
        this._textarea.val(JSON.stringify(this._state));
        // this._jQEl.text(JSON.stringify(this._state).replace(/[^ -~]+/g, ""));
        this._jQEl.fadeIn(100, () => {
            this._textarea.select();
        });

        return this;
    }

    public hide(): SaverNOpenerStateManager {
        this._jQEl.fadeOut(100, () => {
            this._textarea.val('');
            this._action = "";
            this._state = {};
            this._callingMathLineInput.focus();
        });
        return this;
    }

    public enableEditing(): SaverNOpenerStateManager {
        this._textarea.attr('readonly', false);
        return this;
    }

    public disableEditing(): SaverNOpenerStateManager {
        this._textarea.attr('readonly', true);
        return this;
    }

    protected setEvents(): void {
        this._jQEl.keydown((pEventObj) => {
            switch (pEventObj.which) {
                case KeyCodes.ESCAPE_KEY:
                    this.hide();
                    break;

                case KeyCodes.ENTER_KEY:
                    pEventObj.preventDefault();
                    if (this._action === "OPEN") {
                        const state = JSON.parse(this._textarea.val().valueOf());
                        console.log('Need to regenerate all fields with values:');
                        console.log(state);
                        /*
                            du coup il faudra aller sur le dernier mathline
                            le remove
                            aller sur son previous
                            set son next (au previous) a null
                            rebelotte tant que le previous n'est pas null

                            ==> potentiel souci: le fait que le firstMathLineInput existe et puisse etre remove mais toujours en memoire ==> leak
                            ==> comment regler ce probleme ? 
                        */
                    }
                    this.hide();
                    break;

            }
        });
    }

    public getJSONState(): String {
        const retObj = {
            MathLineInputsValues: []
        };

        let mathLineInput = this._callingMathLineInput.getFirstMathLineInput();
        do  {
            //retObj.MathLineInputsValues.push(mathLineInput.value());
            retObj.MathLineInputsValues.push(mathLineInput.value().replace(/[^ -~]+/g, ""));
            mathLineInput = mathLineInput.nextMathLineInput;
        } while (mathLineInput !== null);

           return JSON.stringify(retObj);
    }
}