const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/components/fotter/fotter.css">

<fotter class="fotter">
        <div class="summury">
            <p></p>
        </div>
        <div class="links">
            <ul>
                <li><a href=""><slot name="a1"></slot></a></li>
                <li><a href=""><slot name="a2"></slot></a></li>
                <li><a href=""><slot name="a3"></slot></a></li>
            </ul>
        </div>
    </fotter>
`;
class Fotter extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".summury p").innerHTML = this.getAttribute("description");
    }

    static observedAttributes() {
        return ["description"];
    }

}

export { Fotter };