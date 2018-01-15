import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectRecord} from '../actions/index';
import {bindActionCreators} from 'redux';


class ListItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <li onClick={ () => this.props.selectRecord() }
                className={"list-group-item "+ (this.props.selected ? "active" : "inactive")}
            >

            </li>
        );
    }


}

function mapStateToProps(state) {
    return {
        selected: state.activeRecord
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectRecord: selectRecord}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);