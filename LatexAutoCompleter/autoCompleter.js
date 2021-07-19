
/******************************************************************************************
* AutoCompleterManager:
* Wrapper object that wrap the textarea where the auto-completion takes place.
* It reimplements the functions of the textarea jQuery element
* and implements new ones.
* */
function AutoCompleterManager(pInputTextElement) {
    this.inputTextElement = pInputTextElement;
    this.autoCompletionWidget = new AutoCompletionWidget(this);

    /*
    * AutoCompleterManager.keydown():
    * Shortcut to use this.jqEl.keydown
    * */
    this.keyDown = (pFunction) => this.inputTextElement.keyDown(pFunction);

    /*
    * AutoCompleterManager.keyup():
    * Shortcut to use this.jqEl.keyup
    * */
    this.keyUp = (pFunction) => this.inputTextElement.keyUp(pFunction);

    /*
    * AutoCompleterManager.focus():
    * Put the focus on the AutoCompleterManager
    * */
    this.focus = () => this.inputTextElement.focus();

    /*
    * AutoCompleterManager.getCursorLinePosition():
    * Returns the line number position of the cursor in the AutoCompleterManager
    * Not used in the code for now but one day how knows...
    * */
    //this.getCursorLinePosition = () => (this.getInputStr().substr(0, this.getSelectionStart()).split('\n').length);

    /*
    * AutoCompleterManager.getSelectionStart():
    * Returns the selectionStart value of the <textatrea#input> element.
    * This will be rewrote in a near future to be up to date ==> <REWRITE>
    * */
    // this.getSelectionStart = () => (this.inputTextElement.get(0).selectionStart);

    /*
    * AutoCompleterManager.getInputStr():
    * Gives the content of the AutoCompleterManager in raw str
    * */
    this.getInputStr = () => this.inputTextElement.getLatexValue();

    /*
    * AutoCompleterManager.getCurrentlyTypingWord():
    * Returns the word being typed by the user.
    * This function is used to filter the keywordsList in order to
    * display the suggested keywords according to what the user is currently typing.
    * */
    this.getCurrentlyTypingWord = () => {
        //pistes
        // on aura forcement besoin d'avoir la position du curseur
        //si on n'arrive pas a avoir la position du curseur, on sera obligé de pas utiliser le parsing du latex et de stoquer les input lorsqu'on les tape ==> un peu relou
        // prendre le latex de start à la position du curseur et le split('\\ ') et ne garder que la derniere chaine
        // prendre cette chaine et 
        // le split

        //en vrai je pense qu'on va faire comme ca
        //quand on keyup ca push le caractere qui a ete tapé dans un array
        //au fur et a mesure que je tape, ca stocke les caractere pour obtenir le mot qu'on est en train de taper et voila
        //si on a aucune ctrlkeydown (genre ctrl, shift, alt) et qu'on tape espace ou _ ou ^ ou ( ou ) ou . ou d'autres a rajouter, ca reset l'array et voila
        //==> implementation ce soir
         //let inputTextFromStartToCursorPosition = this.getInputStr().substring(0, this.getSelectionStart());
        // let lastWordOfcursorLine = inputTextFromStartToCursorPosition.split('\n').pop().split(' ').pop();

        // return lastWordOfcursorLine;
        return 'cos';
    };

    /*
     * AutoCompleterManager.getCaretCoordinates():
     * Returns the Top and Left coordinates of the caret in the AutoCompleterManager.
     * Uses getCaretCoordinates() function defined in  ./textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    this.getCaretCoordinates = () => this.inputTextElement.getCursorOffset();

    /*
     * AutoCompleterManager.setContent(pValue):
     * Erase all the content of the AutoCompleterManager and set its content to pValue
     * */
    this.setContent = (pValue) => this.inputTextElement.setLatexValue(pValue);
    this.addContent = (pValue) => this.inputTextElement.mathField.typedText(pValue);
}

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
function AutoCompletionWidget(pAutoCompleterManager) {
    this.jqEl = $('<ul id="auto_completer"></ul>');
    this.jqEl.hide(0);
    this.jqEl.appendTo($('body'));

    this.currentKeywordSelectedIndex = -1;
    this.nbKeywords = 0;
    this.isVisible = false;
    this.AutoCompleterManager = pAutoCompleterManager;

    /*
    * AutoCompletionWidget.show():
    * Displays the auto-completion widget in the AutoCompleterManager
    * */
    this.show = function () {
        this.jqEl.fadeIn(100);
    };

    /*
    * AutoCompletionWidget.hide():
    * Hides the auto-completion widget
    * */
    this.hide = function () {
        let that = this;
        this.jqEl.fadeOut(100, function () {
            that.emptyContent();
        })
    };

    /*
    * AutoCompletionWidget.emptyContent():
    * Empty the content of the widget
    * */
    this.emptyContent = function () {
        this.jqEl.html('');
        this.nbKeywords = 0;
        this.currentKeywordSelectedIndex = -1;
    };

    /*
    * AutoCompletionWidget.getLiElements():
    * Returns all Li elements contained in the widget
    * */
    this.getLiElements = function () {
        return this.jqEl.find('li');
    }

    /*
    * AutoCompletionWidget.positionWidgetUnderCaret():
    * Positions the widget under the caret of the textarea
    * For now, it shifts the coordinates to 30px down and 5px right
    * but in the near future we will shift with relative values
    * to give more flexibility and adapt font-sizes that have not
    * default values.
    * */
    this.positionWidgetUnderCaret = function () {
        let caretCoords = this.AutoCompleterManager.getCaretCoordinates();
        this.jqEl.css({
            "top":  '' + (caretCoords.top + 30) +'px',
            "left": '' + (caretCoords.left + 5) + 'px'
        });
    }

    /*
    * AutoCompletionWidget.getFirstLiElement():
    * Returns the first Li elements contained in the widget
    * */
    this.getFirstLiElement = function () {
        return this.getLiElements().first();
    }

    /*
    * AutoCompletionWidget.setLiElementSelected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to selected
    * */    
    this.setLiElementSelected = function (pLiElement) {
        pLiElement.addClass('selected_keyword');
    }

    /*
    * AutoCompletionWidget.setLiElementUnselected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to NOT selected
    * */
    this.setLiElementUnselected = function (pLiElement) {
        pLiElement.removeClass('selected_keyword');
    }

    /*
    * AutoCompletionWidget.updateContentAndShow(pKwList):
    * Updates the content of the widget by clearing its content
    * and filling it with the keyword list given in argument (pKwList).
    * Then it displays it if there is at leat one keyword, or hide it if not.
    * */
    this.updateContentAndShow = function (pKwList) {
        this.emptyContent();
        this.nbKeywords = pKwList.length;
        
        if (pKwList.length !== 0) {
            this.positionWidgetUnderCaret();
            for (keyword of pKwList) {
                this.jqEl.append($('<li>' + keyword + '</li>'));
            }

            if (this.currentKeywordSelectedIndex === -1) {
                this.setLiElementSelected(this.getFirstLiElement());
                this.currentKeywordSelectedIndex = 0;
            }

            this.show();

        } else {
            this.hide();
        }
    };

    /*
    * AutoCompletionWidget.getSelectedLiEl():
    * Returns the selected Li element in the widget
    * */
    this.getSelectedLiEl = function () {
        return $(this.getLiElements()[this.currentKeywordSelectedIndex]);
        
    }

    /*
    * AutoCompletionWidget.getSelectedKeyword():
    * Returns the selected keyword in the widget
    * */
    this.getSelectedKeyword = function () {
        return this.getSelectedLiEl().text();
    };

    /*
    * AutoCompletionWidget.selectNextKeyword():
    * Set to selected the Li element in the widget that is next to the currently
    * selected Li element, and unselect this one
    * */
    this.selectNextKeyword = function () {
        let selectedLiEl = this.getSelectedLiEl();
        let nextLiEl = selectedLiEl.next();

        if (nextLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            nextLiEl.addClass('selected_keyword')
            this.currentKeywordSelectedIndex += 1;
        }
    };

    /*
    * AutoCompletionWidget.selectNextKeyword():
    * Set to selected the Li element in the widget that is before the currently
    * selected Li element, and unselect this one
    * */
    this.selectPreviousKeyword = function () {
        let selectedLiEl = this.getSelectedLiEl();
        let previousLiEl = selectedLiEl.prev();

        if (previousLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            previousLiEl.addClass('selected_keyword');
            this.currentKeywordSelectedIndex -= 1;
        }
    }
}

/*******************************************************************************************
* ClickAndKeyListener:
* Object that Manages the events definition
* */
function ClickAndKeyListener(pAutoCompleterManager) {
    this.ENTER_KEY = 13;
    this.CTRL_KEY = 17;
    this.UP_KEY = 38;
    this.DOWN_KEY = 40;
    this.ESCAPE_KEY = 27;
    this.BACKSPACE_KEY = 8;
    this.END_KEY = 35;
    this.SPACE_KEY = 32;
    this.UP_KEY = 38;
    this.DOWN_KEY = 40;

    this.IsCtrlKeyIsDown = false;
    this.AutoCompleterManager = pAutoCompleterManager;

    /*
    * ClickAndKeyListener.setKeydownEventsToAutoCompleterManager(pController):
    * Definition of what to do when we press keys in the AutoCompleterManager.
    *  .  CTRL + SPACE ==> display / hide the auto-completer widget
    *  .  UP / DOWN / ENTER / BACKSPACE ==> navigation into the auto-completer widget
    *  .  ESCAPE ==> hide auto-completer widget
    * */
    this.setKeyDownEventsToAutoCompleterManager = (pController) => {
        this.AutoCompleterManager.keyDown((e) => {
            if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = true;
            }

            /*
             * Ctrl key down + SPACE
             * */
            if (this.IsCtrlKeyIsDown) {
            
                if (e.which === this.SPACE_KEY) {
                    if (this.AutoCompleterManager.autoCompletionWidget.isVisible === true) {
                        this.AutoCompleterManager.autoCompletionWidget.hide();
                        this.AutoCompleterManager.autoCompletionWidget.isVisible = false;

                    } else {
                        let keywordsList = pController.getFormatedMatchkingKeywordsList();
                        this.AutoCompleterManager.autoCompletionWidget.show(keywordsList);
                        this.AutoCompleterManager.autoCompletionWidget.isVisible = true;
                    }
                }

            /*
             * Ctrl key is up and auto-completer widget is visible
             * */
            } else if (this.AutoCompleterManager.autoCompletionWidget.isVisible) {
                if (e.which === this.ESCAPE_KEY) {
                    this.AutoCompleterManager.autoCompletionWidget.hide();
                    this.AutoCompleterManager.autoCompletionWidget.isVisible = false;

                } else if (e.which === this.ENTER_KEY) {
                    let selectedKeyword = this.AutoCompleterManager.autoCompletionWidget.getSelectedKeyword();
                    let currentlyTypingWord = this.AutoCompleterManager.getCurrentlyTypingWord();
                    let inputStr = this.AutoCompleterManager.getInputStr();
                    //let startText = inputStr.substring(0, this.AutoCompleterManager.getSelectionStart() - currentlyTypingWord.length);
                    //let endText = inputStr.substring(this.AutoCompleterManager.getSelectionStart(), inputStr.length);
                    
                    if (selectedKeyword !== '') {
                        this.AutoCompleterManager.addContent(selectedKeyword);
                    
                        //need to explain that
                        // if (selectedKeyword.slice(-1) === ")") {
                        //     this.AutoCompleterManager.putCursorAt(startText.length + selectedKeyword.length - 1);
                        // } else {
                        //     this.AutoCompleterManager.putCursorAt(startText.length + selectedKeyword.length);
                        // }
                        
                        this.AutoCompleterManager.autoCompletionWidget.hide();
                        e.preventDefault();
                    }

                } else if (e.which === this.DOWN_KEY) {
                    this.AutoCompleterManager.autoCompletionWidget.selectNextKeyword();
                    e.preventDefault();

                } else if (e.which === this.UP_KEY) {
                    this.AutoCompleterManager.autoCompletionWidget.selectPreviousKeyword();
                    e.preventDefault();
                }
            }
        });
    };

    /*
    * ClickAndKeyListener.setKeyupEventsToAutoCompleterManager():
    * Definition of what to do when we release keys in the AutoCompleterManager.
    * Very usefull to manage the navigation into the auto-completionWidget
    * */
    this.setKeyUpEventsToAutoCompleterManager = function (pController) {
        this.AutoCompleterManager.keyUp((e) => {

            // console.log(this.AutoCompleterManager.inputTextElement.getLatexValue());
            //console.log(this.AutoCompleterManager.inputTextElement.getLatexValue());
            if (this.AutoCompleterManager.autoCompletionWidget.isVisible === true && e.which !== this.UP_KEY && e.which !== this.DOWN_KEY) {
                this.AutoCompleterManager.autoCompletionWidget.updateContentAndShow(pController.getFormatedMatchkingKeywordsList());
            }

            if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = false;
            }
        });
    };

    /*
    * ClickAndKeyListener.setkeyAndMouseEvents():
    * Set all events definitions of the ClickAndKeyListener object
    * */
    this.setkeyAndMouseEvents = function (pController, pSolver) {
        this.setKeyDownEventsToAutoCompleterManager(pController);
        this.setKeyUpEventsToAutoCompleterManager(pController);
    };
}

/*******************************************************************************************
* AutoCompleter:
* Controller object of the auto-completion feature.
* Manages the events setting through ClickAndKeyListener object
* */
function AutoCompleter(pTextareaEl, pList) {

    this.keywordsList = pList;
    this.AutoCompleterManager = new AutoCompleterManager(pTextareaEl);
    this.clickAndKeyListener = new ClickAndKeyListener(this.AutoCompleterManager);

    this.clickAndKeyListener.setkeyAndMouseEvents(this)
    
    /*
    * AutoCompleter.getMatchkingKeywordsList():
    * Returns an array containing all keywords contained in the pList object,
    * but only the word or that is currently typed in the AutoCompleterManager is contained
    * in the keyword or its tags.
    * */
    this.getMatchkingKeywordsList = function () {
        let currentlyTypingWord = this.AutoCompleterManager.getCurrentlyTypingWord().toLowerCase();
        return this.keywordsList.filter(el => ((el.keyword.toLowerCase().includes(currentlyTypingWord))
                                            || (el.tags.toLowerCase().includes(currentlyTypingWord))));
    }

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
    this.getFormatedMatchkingKeywordsList = function () {
        let helperKeywordsList = this.getMatchkingKeywordsList();
        let retKeywords = helperKeywordsList.map((el) => {
            let indexOfOpeningParenthesis = el.keyword.indexOf('(');

            if (indexOfOpeningParenthesis !== -1) {
                return el.keyword.substring(0, indexOfOpeningParenthesis + 1) + ')';
            } else {
                return el.keyword + ' ';
            }
        });

        return (retKeywords.slice(0, 11));
    }
}