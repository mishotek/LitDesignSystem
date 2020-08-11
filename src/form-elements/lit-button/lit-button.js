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
                --button-bg: var(--background-color, var(--pink-2));
                --button-bg-hover: var(--background-hover-color, var(--pink-3));
                --button-bg-active: var(--background-active-color, var(--pink-2));
                --button-color: var(--color, var(--grey-0));
            }
            
            .lit-button {
                cursor: pointer;
                border: none;
                background-color: var(--button-bg);
                color: var(--button-color);
                border-radius: var(--border-2);
                box-shadow: var(--elevation-2);
                will-change: box-shadow, background-color;
                transition: box-shadow 0.1s, background-color 0.1s;
                height: 32px;
                padding: 0 var(--space-small);
                outline: none;
            }

            .lit-button:hover {
                background-color: var(--button-bg-hover);
            }

            .lit-button:active {
                background-color: var(--button-bg-active);
                box-shadow: var(--elevation-1);
            }
        `;
    }

    render() {
        // language=html
        return html`<button class="lit-button"><slot></slot></button>`;
    }
}

window.customElements.define(LitButton.is, LitButton);
