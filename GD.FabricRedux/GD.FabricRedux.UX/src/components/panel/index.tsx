import * as React from "react";
import {
    Panel,
    PanelType
} from "office-ui-fabric-react";

/**
 * Properties
 */
interface Props {
    closePanel: any,
    visible: boolean
}

/**
 * Demo Panel
 */
class DemoPanel extends React.Component<Props, any> {
    // Render the panel
    render() {
        return (
            <Panel
                headerText="Demo Panel"
                isOpen={this.props.visible}
                onDismiss={this.props.closePanel}
                type={PanelType.smallFixedFar}
                />
        );
    }
}

export default DemoPanel;