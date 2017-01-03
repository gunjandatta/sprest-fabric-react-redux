import React from "react";
import {
    Panel,
    PanelType
} from "office-ui-fabric-react";

/**
 * Demo Panel
 */
const DemoPanel = ({closePanel, visible}) => {
    return (
        <Panel
            headerText="Demo Panel"
            isOpen={visible}
            onDismiss={closePanel}
            type={PanelType.smallFixedFar}
            />
    );
}

export default DemoPanel;