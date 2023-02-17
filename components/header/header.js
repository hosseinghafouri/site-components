const template = document.createElement('template');
template.innerHTML =`
<link rel="stylesheet" href="/components/header/header.css">

<header class="header">
        <h1 class="logo-name"><slot name="logo_name"></slot></h1>
        <div class="navbar">
            <nav>
                <ul>
                    <li><a href="#"><slot name="logo_name"></slot></a></li>
                    <li><a href="#"><slot name="logo_name"></slot></a></li>
                    <li><a href="#"><slot name="logo_name"></slot></a></li>
                </ul>
            </nav>
            <img src="img/turk.png" alt="logo img">
        </div>
        <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>

`;
class Header extends HTMLElement {

    constructor () {
        super();
        
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export {Header};