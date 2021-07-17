const MQ = MathQuill.getInterface(2);

function MathLineInput(pEl) {
    this.jQEl = pEl;
    this.mathField = MQ.MathField(this.jQEl[0], {
        handlers: {
            edit: () => {
                
            },
    
            enter: () => {
                
            }
        }
    });

    this.undoRedoManager = new UndoRedoManager(this.mathField, this.jQEl);
}

//to translate the given textNode into proper math
MQ.StaticMath(window.document.getElementById('problem'));
let mathLineInput = new MathLineInput($('#content'));