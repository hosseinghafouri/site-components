const template = document.createElement('template');
template.innerHTML =`
<link rel="stylesheet" href="/components/header/header.css">

<div class="header">
    <slot name="title"></slot>
    <slot name="job"></slot>
</div>

`;
class Header extends HTMLElement {

    constructor () {
        super();
        
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export {Header};