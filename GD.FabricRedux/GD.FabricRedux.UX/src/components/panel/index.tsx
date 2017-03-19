import * as React from "react";
import {
    Panel,
    PanelType
} from "office-ui-fabric-react";

/**
 * Demo Panel
 */
const DemoPanel = ({closePanel, visible}) => {
    // Render the panel
    return (
        !visible ? <div /> :
        <Panel
            headerText="Demo Panel"
            isOpen={visible}
            onDismiss={closePanel}
            type={PanelType.smallFixedFar}
            />
    );
}

export default DemoPanel;