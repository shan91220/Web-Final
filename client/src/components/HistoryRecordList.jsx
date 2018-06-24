import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import HistoryRecordItem from './HistoryRecordItem.jsx';
import './RecordList.css';

class HistoryRecordList extends React.Component {
    static propTypes = {
        historyRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { historyRecords } = this.props;

        let children = (
            <div></div>
        );

        if (historyRecords.length) {
            children = historyRecords.map(p => (
                <ListGroupItem key={p.record_id} action>
                    <HistoryRecordItem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='record-list'>
                <ListGroup>
                    {children}
                </ListGroup>
            </div>
        );
    }
}

export default connect(state => ({
    historyRecords: state.history.historyRecords
}))(HistoryRecordList);
