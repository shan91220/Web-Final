import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Confirm, listArrearRecords ,noticePayBack} from 'states/arrear-actions.js';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';

class ArrearRecordItem extends React.Component {
    static propTypes = {
        record_id: PropTypes.number,
        name: PropTypes.string,
        amount: PropTypes.number,
        expect_date: PropTypes.string,
        confirm: PropTypes.bool
    };
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handlePayBack=this.handlePayBack.bind(this);
    }

    render() {
        const { name, amount, expect_date ,payback} = this.props;
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
                <div className='buttons col-sm-3 col-xs-3 align-self-center'>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className={this.props.payback ? "confirm" : "btn btn-warning"} onClick={this.handlePayBack}>已還款!<br />提醒他</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className={this.props.confirm ? "confirm" : "btn btn-success"} onClick={this.handleConfirm}>確認借款</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleConfirm() {
        this.props.dispatch(Confirm(this.props.record_id));
    }
    handlePayBack(){
        this.props.dispatch(noticePayBack(this.props.record_id,true));
    }
}

export default connect(state => ({

}))(ArrearRecordItem);
