import * as React from "react";
import {
    Dialog,
    DialogType
} from "office-ui-fabric-react";

/**
 * Demo Dialog
 */
const DemoDialog = ({closeDialog, visible}) => {
    return (
        <Dialog
            isBlocking={true}
            isOpen={visible}
            onDismiss={closeDialog}
            type={DialogType.close}
            title="Demo Dialog">
            <h5>This is an example of creating a dialog.</h5>
        </Dialog>
    );
}

export default DemoDialog;