declare var MathQuill: any;
declare var $: any;

function main() {

    let firstMathLineInput = new MathLineInput();
        firstMathLineInput.appendTo($('#content'));
        firstMathLineInput.focus();
}

main();
