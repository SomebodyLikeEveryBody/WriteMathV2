interface JQueryElement {
    length: Number;

    appendTo(pElement: JQueryElement): void;
    insertAfter(pElement: JQueryElement): void;
    remove(): void;
    hide(pTime: number): void;
    fadeOut(pTime: Number, pFunc: Function): void;
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
}