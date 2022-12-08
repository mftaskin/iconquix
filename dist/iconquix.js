class iconQuix extends HTMLElement {
    constructor() {
        super();
    }
    render() {
        const attrList =this.getAttributeNames();
        const iconParent = this.parentNode;
        const svgString = iconQuixData[this.getAttribute('icon')] ? `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">${iconQuixData[this.getAttribute('icon')]}</svg>` : `<svg class="noicon-selected" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">${iconQuixData['noicon-selected']}</svg>`;
        let svgElement = new DOMParser().parseFromString(svgString, 'image/svg+xml').querySelector('svg');
        if (attrList.length > 0) {
            attrList.forEach((attrItem) => {
                if (attrItem !== 'icon')
                    svgElement.setAttribute(attrItem, this.getAttribute(attrItem));
            });
        }
        iconParent.replaceChild(svgElement, this);
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('icon-quix', iconQuix);
