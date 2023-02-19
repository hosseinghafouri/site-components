const template = document.createElement("template");
template.innerHTML = `
<button>Submit</button>
`;

class Button extends HTMLElement {

    constructor() {
        super();
        console.log(this);

        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export { Button };