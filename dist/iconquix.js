const iconQuixData = {
    'noicon-selected': '<path d="m6 4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-12a2 2 0 00-2-2zm-4-2 20 20m0-20-20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
    ...((typeof iconQuixDataBasic !== 'undefined') ? iconQuixDataBasic : {}),
    ...((typeof iconQuixDataArrows !== 'undefined') ? iconQuixDataArrows : {}),
    ...((typeof iconQuixDataBrands !== 'undefined') ? iconQuixDataBrands : {}),
    ...((typeof iconQuixDataFilesFolders !== 'undefined') ? iconQuixDataFilesFolders : {}),
    ...((typeof iconQuixDataSpinners !== 'undefined') ? iconQuixDataSpinners : {}),
    ...((typeof iconQuixDataVehicles !== 'undefined') ? iconQuixDataVehicles : {}),
    ...((typeof iconQuixDataWeather !== 'undefined') ? iconQuixDataWeather : {}),
};
class iconQuix extends HTMLElement {
    constructor() {
        super();
    }
    render() {
        const attrList =this.getAttributeNames();
        const iconParent = this.parentNode;
        const svgString = iconQuixData[this.innerHTML] ? `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">${iconQuixData[this.innerHTML]}</svg>` : `<svg class="noicon-selected" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">${iconQuixData['noicon-selected']}</svg>`;
        let svgElement = new DOMParser().parseFromString(svgString, 'image/svg+xml').querySelector('svg');
        if (attrList.length > 0) {
            attrList.forEach((attrItem) => {
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
