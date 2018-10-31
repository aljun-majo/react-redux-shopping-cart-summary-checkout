import React, { Component } from 'react'
import { Tooltip } from 'reactstrap';

export default class PickupSaving extends Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        tooltipOpen: false
    };
    }

    toggle() {
    this.setState({
        tooltipOpen: !this.state.tooltipOpen
    });
    }

  render() {
    return (
        <div>
            <p>Pickup Discounts: 
                <a className="text-info ml-2" href="#" id="DisabledAutoHideExample">view info</a>
            </p>
            <p className="text-danger">- ${this.props.pickSavings}</p>
            <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                When you pickup your order this is the deducted amount ${this.props.pickSavings}
            </Tooltip>
      </div>
    )
  }
}
