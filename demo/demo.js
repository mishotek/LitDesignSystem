import {css, LitElement} from "lit-element";
import {html} from "lit-html";
import "../src/form-elements/lit-button/lit-button"

export class LitDemo extends LitElement {
    static get is() {
        return 'lit-demo';
    }

    static get styles() {
        // language=css
        return css``;
    }

    render() {
        // language=html
        return html`<lit-button>hi</lit-button>`;
    }
}

window.customElements.define(LitDemo.is, LitDemo);
