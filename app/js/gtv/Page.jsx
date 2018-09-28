import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TorqueSlides from 'torque-react';
import { getEvents } from 'events/actions';
import ColorView from 'gtv/components/ColorView';
import EventPanels from 'gtv/containers/EventPanels';
import EventHighlight from 'gtv/containers/EventHighlight';
import ThreeWeek from 'gtv/containers/ThreeWeek';
import { getThreeWeekEvents } from 'gtv/actions';

import 'scss/gtv.scss';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
    getThreeWeekEvents: () => dispatch(getThreeWeekEvents()),
  };
}

class GTV extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getThreeWeekEvents: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvents();
    this.props.getThreeWeekEvents();
    this.intervals = [];
  }

  componentDidMount() {
    this.setInterval(() => this.props.getEvents(), 30000);
    this.setInterval(() => this.props.getThreeWeekEvents(), 30000);
  }

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }

  setInterval(...args) {
    this.intervals.push(setInterval(...args));
  }

  render() {
    return (
    <TorqueSlides duration={2} keyboardInteractive={true} >
        <p>Wow!</p>
        <EventPanels />
        <ColorView color="white" />
        <EventHighlight />
        <ThreeWeek />
        <ColorView color="black" />
        <p>My Cool</p>
        <p>Unstyled</p>
        <p>Torque slides!</p>
    </TorqueSlides>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GTV);
