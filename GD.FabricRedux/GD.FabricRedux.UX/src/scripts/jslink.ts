import {JSLink} from "gd-sprest";

/**
 * CSR Override for MyProject List View
 **/
export class CSR_MyProject {
    // Constructor
    constructor() {
        // Initialize the CSR Override
        this.init();
    }

    // Initialization
    init() {
        // Create the jslink object
        let jsLink = new JSLink();

        // Set the CSR Template overrides
        jsLink.Templates = {
            // Header
            Header: (ctx) => { return ""; },
            // Body
            Body: (ctx) => { return "<div id='myProject'></div>"; },
            // Footer
            Footer: (ctx) => { return this.renderFooter(ctx); }
        };

        // Register the template override
        jsLink.register();
    }

    // Footer
    renderFooter(ctx) {
        // Initialize my project which is globally available
        // Note - We are sending the list data from the context. This way we can use the OTB List View webpart to control the data sent to it.
        window["MyProject"].init(ctx.ListData, "myProject");

        // Display nothing
        return "";
    }
}