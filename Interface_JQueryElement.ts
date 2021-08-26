interface JQueryElement {
    length: Number;

    appendTo(pElement: JQueryElement): void;
    insertAfter(pElement: JQueryElement): void;
    insertBefore(pElement: JQueryElement): void;
    remove(): void;
    hide(pTime: number): void;
    fadeOut(pTime: Number, pFunction: Function): void;
    html(pStr: String): void;
    find(pSelector: String): JQueryElement;
    css(pStyles: Object): JQueryElement;
    first(): JQueryElement;
    addClass(pClassName: String): JQueryElement;
    removeClass(pClassName: String): JQueryElement;
    append(JQueryElement): JQueryElement;
    text(): String;
    next(): JQueryElement;
    prev(): JQueryElement;
    keydown(pFunction: Function): JQueryElement;
    keyup(pFunction: Function): JQueryElement;
    focusout(pFunction: Function): JQueryElement;
    focusin(pFunction: Function): JQueryElement;
    blur(pFuction: Function): JQueryElement;
    addClass(pClassName: String): JQueryElement;
    removeClass(pClassName: String): JQueryElement;
    animate(pCssObject: Object, pTime: Number);
    offset(): Offset;
    scrollTop(pValue?: Number): Number;
    height(): Number;
    outerHeight(): Number;
}