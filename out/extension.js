"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // let save = vscode.commands.registerCommand('vscode-touch-bar.save', () => {
    // 	vscode.commands.executeCommand('workbench.action.files.save')
    // });
    // context.subscriptions.push(save);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map