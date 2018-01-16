import React, { Component }from 'react';
import { connect } from 'react-redux';
import { selectRecord } from '../actions/action_record';
import { bindActionCreators } from 'redux';


class LeftList extends Component {
    constructor(props) {
        super(props);

    }

    renderRecords() {
        return this.props.records.map((record) => {
            return (
                <li
                    key={record.id}
                    onClick={() => this.props.selectRecord(record)}
                    className={"list-group-item " + (record.id == this.props.selected ? "active" : "inactive")}
                >
                    {record.content}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderRecords()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        records : state.leftRecords,
        selected: state.activeRecord
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectRecord : selectRecord}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftList);