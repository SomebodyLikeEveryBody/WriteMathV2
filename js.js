/*
todo:

- faire une autocompletion avec un dico latex pour faciliter le typing
- rajouter le fait de pouvoir mettre des barres au dessus de chiffres / caracteres quand un pattern se reproduit, genre 10/3 = 3.33 barres
- 

*/

const MQ = MathQuill.getInterface(2);

//to translate the given textNode into proper math
//MQ.StaticMath(window.document.getElementById('problem'));

mathLineInputArray = [];
for (let i = 0; i < 5; i++) {
    mathLineInputArray[i] = new MathLineInput();
    mathLineInputArray[i].appendTo($('#content'));

    if (i !== 0) {
        mathLineInputArray[i - 1].nextMathLineInput = mathLineInputArray[i];
        mathLineInputArray[i].previousMathLineInput = mathLineInputArray[i - 1];
    }
}

mathLineInputArray[0].focus();