import { View } from "./View.js";
export class MsgView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
