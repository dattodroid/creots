const ui: typeof import("./mods/cui") = require("cui");

function runApp(): any {
    const session = pfcGetCurrentSession();
    session.UIShowMessageDialog("Hello from Creo.JS with TypeScript.");

    // Call a module function
    ui.ShowMessageDialog("Hello from a Creo.JS module.");

    return "Hello from Creo.JS";
}
