const MQ = MathQuill.getInterface(2);

//to translate the given textNode into proper math
MQ.StaticMath(window.document.getElementById('problem'));

let answerMathField = MQ.MathField(window.document.getElementById('content'), {
    handlers: {
        edit: function() {
            let enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
            
        },

        enter: function () {
            //answerMathField.latex() permet d'obtenir le contenu de l'input en latex ==> parfait pour poser la question
            console.log(answerMathField.latex());
        }
    }
});

let p = new PommeZManager(answerMathField, $('#content'));