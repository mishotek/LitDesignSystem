import {css, LitElement} from "lit-element";
import {html} from "lit-html";

export class LitButton extends LitElement {
    static get is() {
        return 'lit-button';
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: inline-block;
                --button-bg: var(--background-color, var(--pink-30));
                --button-color: var(--color, var(--grey-0));
            }
            
            .lit-button {
                cursor: pointer;
                border: none;
                background-color: var(--button-bg);
                color: var(--button-color);
            }
        `;
    }

    render() {
        // language=html
        return html`<button class="lit-button"><slot></slot></button>`;
    }
}

window.customElements.define(LitButton.is, LitButton);
