import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import posed, { PoseGroup } from 'react-pose';

import 'moment/locale/pt-br';

const Shade = posed.div({
  enter: { opacity: 1, transition: { duration: 150 } },
  exit: { opacity: 0, transition: { duration: 150 } },
});

const TimeContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 72pt;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

const DateContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 22pt;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

class Clock extends Component {
  static defaultProps = {
    containerStyle: {},
    clockStyle: {},
    dateStyle: {},
  };

  state = { formatedDate: '', time: '' };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = moment();
    const time = date.format('HH:mm:ss');
    const formatedDate = date.format('DD [de] MMMM [de] YYYY ');
    this.setState({ formatedDate, time });
  }

  render() {
    const { formatedDate, time } = this.state;
    const { containerStyle, clockStyle, dateStyle } = this.props;
    return (
      <PoseGroup>
        <div style={containerStyle} key="container">
          <Shade key="time">
            <TimeContainer style={clockStyle}>{time}</TimeContainer>
          </Shade>
          <Shade key="date">
            <DateContainer style={dateStyle}>{formatedDate}</DateContainer>
          </Shade>
        </div>
      </PoseGroup>
    );
  }
}

export default Clock;
