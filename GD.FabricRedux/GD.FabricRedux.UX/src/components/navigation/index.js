import React, {PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as dialogActions from "../../actions/dialogActions";
import * as panelActions from "../../actions/panelActions";
import ActionTypes from "../../actions/actionTypes";
import DemoDialog from "../dialog";
import DemoPanel from "../panel";
import {
    CommandBar
} from "office-ui-fabric-react";

/**
 * Navigation
 */
class Navigation extends React.Component {
    // Constructor
    constructor(props, context) {
        super(props, context);

        // Bind the event
        this.close = this.close.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    // Method to close the dialog or panel
    close(actionType) {
        // Execute an action, based on the type
        switch(actionType) {
            // Hide the dialog
            case ActionTypes.HideDialog:
                this.props.actions.dialog.hide();
            break;
            // Hide the panel
            case ActionTypes.HidePanel:
                this.props.actions.panel.hide();
            break;
        }
    }

    // The click event for a menu item
    onClick(event, actionType) {
        // Disable postback
        event.preventDefault();

        // Execute an action, based on the type
        switch(actionType) {
            // Show the dialog
            case ActionTypes.ShowDialog:
                this.props.actions.dialog.show();
            break;
            // Show the panel
            case ActionTypes.ShowPanel:
                this.props.actions.panel.show();
            break;
        }
    }

    // Method to render the component
    render() {
        // Get the "showDialog" state value from the properties.
        let {showDialog, showPanel} = this.props;
        return (
            <div>
                <CommandBar
                    isSearchBoxVisible={true}
                    items={[
                        {
                            key: "newRequest",
                            name: "New",
                            icon: "Add",
                            ariaLabel: 'Use left and right arrow keys to navigate',
                            onClick: event => this.onClick(event),
                            items: [
                                {
                                    key: "demo_dialog",
                                    name: "Demo Dialog",
                                    icon: "Contact",
                                    onClick: event => this.onClick(event, ActionTypes.ShowDialog)
                                },
                                {
                                    key: "demo_panel",
                                    name: "Demo Panel",
                                    icon: "People",
                                    onClick: event => this.onClick(event, ActionTypes.ShowPanel)
                                }
                            ]
                        }
                    ]}
                />
                <DemoDialog
                    visible={showDialog}
                    closeDialog={event => this.close(ActionTypes.HideDialog)}
                    />
                <DemoPanel
                    visible={showPanel}
                    closePanel={event => this.close(ActionTypes.HidePanel)}
                    />
            </div>
        );
    }
}

/**
 * Properties
 */
Navigation.propTypes = {
    actions: PropTypes.object.isRequired,
    showDialog: PropTypes.bool,
    showPanel: PropTypes.bool
};

/**
 * Connections
 */
export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        return {
            showDialog: state.dialog.showDialog,
            showPanel: state.panel.showPanel
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: {
                dialog: bindActionCreators(dialogActions, dispatch),
                panel: bindActionCreators(panelActions, dispatch)
            }
        };
    }
)(Navigation);
