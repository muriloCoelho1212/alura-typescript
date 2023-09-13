import { View } from "./View.js";
export class MsgView extends View {
    template(model) {
        return `
            <p class="alert alert-success">${model}</p>
        `;
    }
}
//# sourceMappingURL=Msg-view.js.map