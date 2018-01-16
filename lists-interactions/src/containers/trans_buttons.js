import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onclick } from '../actions/action_transfer'


class TransButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var leftList = this.props.leftRecords;
        var rightList = this.props.rightRecords;
        var selected = this.props.selectedRecord;
        return (
            <div className="btn-group-vertical" role="group">
                <button type="button" className="btn-default" id="btn-l2r"
                        onClick={() => this.props.onclick("btn-l2r") }
                >
                    To right
                </button>
                <button type="button" className="btn-default" id="btn-r2l"
                        onClick={() => this.props.onclick("btn-r2l") }
                >
                    To left
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        leftRecords : state.leftRecords,
        rightRecords : state.rightRecords,
        selectedRecord: state.activeRecord,
        transfer: state.transferRecord
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onclick : onclick}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransButtons);