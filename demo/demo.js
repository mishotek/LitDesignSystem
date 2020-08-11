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
        return html`
            <div style="display: flex; flex-direction: column;">
                <lit-button>Regular button</lit-button>
            </div>
        `;
    }
}

window.customElements.define(LitDemo.is, LitDemo);
