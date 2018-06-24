import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button
} from 'reactstrap';

import { createAlert } from 'states/main-actions.js';
import { complete, deletes, listBorrowRecords } from 'states/borrow-actions.js';
import { noticePayBack} from 'states/arrear-actions.js';
import './RecordItem.css';

class BorrowRecordItem extends React.Component {
    static propTypes = {
        record_id: PropTypes.number,
        name: PropTypes.string,
        amount: PropTypes.number,
        expect_date: PropTypes.string,
        confirm: PropTypes.bool,
        dispatch: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.handleRemind = this.handleRemind.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const { name, amount, expect_date, read ,payback} = this.props;


        return (
            <div className='record-item row container'>
                <div className='person-info col-sm-9 col-xl-9 row'>
                    <div className='picture col-sm-2 col-xl-2 align-self-center'>
                        <img className="rounded-circle" src="../../image/icon.png" width="50" height="50" />
                    </div>
                    <div className='name col-sm-3 col-xl-3 align-self-center'>
                        {name}
                    </div>
                    <div className='money col-sm-3 col-xl-3 align-self-center'>
                        ${amount}
                    </div>
                    <div className='date col-sm-4 col-xl-4 align-self-center'>
                        {expect_date}
                    </div>
                </div>
                <div className='buttons col-sm-2 col-xl-3 align-self-center'>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className={(!this.props.confirm) ? "confirm" : "btn btn-success"} onClick={this.handleComplete}>已還款</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className="btn btn-danger" onClick={this.handleDelete}>刪除</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className={(this.props.read || !this.props.confirm) ? "confirm" : "btn btn-warning"} onClick={this.handleRemind}>提醒他</Button>
                        </div>
                    </div>
                </div>
                <div className='buttons col-sm-1 col-xl-3 align-self-center'>
                    <div className={this.props.payback ? "" : "confirm"}>
                        <img src="../../image/paid.png" className="paid"/>
                        
                    </div>
                </div>
            </div>
        );
    }
    handleComplete() {
        this.props.dispatch(complete(this.props.record_id));
        //  this.props.dispatch(listBorrowRecords());
    }
    handleRemind() {
        this.props.dispatch(createAlert(this.props.record_id));
        this.props.dispatch(noticePayBack(this.props.record_id,false));
    }
    handleDelete() {
        this.props.dispatch(deletes(this.props.record_id));
        //  this.props.dispatch(listBorrowRecords());
    }

}
export default connect(state => ({
    alerts: state.main.alerts
}))(BorrowRecordItem);
