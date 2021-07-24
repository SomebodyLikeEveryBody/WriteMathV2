declare var MathQuill: any;

function main() {

    let firstMathLineInput = new MathLineInput();
        firstMathLineInput.appendTo($('#content'));
        firstMathLineInput.focus();
}

main();
