import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    TabPane,
    Button
} from 'reactstrap';

export default class AlertItem extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { record_id, name, amount, expect_date } = this.props;

        return (
            <TabPane tabId={record_id}>
                <div className="tabContent d-flex flex-column justify-content-around">
                    <div>
                        來自:{name}
                    </div>
                    <div>
                        你還欠我: {amount} 塊
                        </div>
                    <div>
                        日期: {expect_date}
                    </div>
                </div>
            </TabPane>
        );
    }
}
