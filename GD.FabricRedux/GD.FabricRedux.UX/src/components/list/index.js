import React, {PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as listActions from "../../actions/listActions";
import {
    DetailsList,
    SelectionMode
} from "office-ui-fabric-react";

/**
 * Demo List
 */
const DemoList = ({items}) => {
    return (
        <DetailsList items={items} />
    );
}

/**
 * Properties
 */
DemoList.propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
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
            items: state.list.items
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: listActions
        };
    }
)(DemoList);
