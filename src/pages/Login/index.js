import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import posed, { PoseGroup } from 'react-pose';
import { rgba } from 'style-value-types';
import {
  LockedScreen, Form, CircleButton, Blur,
} from './styles';
import logo from '../../assets/logo.png';
import Wallpaper from '../../components/Wallpaper';
import Clock from '../../components/Clock';

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15,
        ease: 'easeInOut',
      },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

export default class Login extends Component {
  state = {
    isLocked: true,
    userInput: '',
    passInput: '',
  };

  componentDidMount() {
    /*
    setInterval(() => {
      const { isLocked } = this.state;

      console.log('Trocou! ', !isLocked);
      this.setState({
        isLocked: !isLocked,
      });
    }, 5000);
    */
  }

  handleUnblock = (e) => {
    e.preventDefault();

    console.log('Unlocked screen!');

    this.setState({ isLocked: false });
    this.resetTimeToLockScreen();
  };

  resetTimeToLockScreen = () => {
    clearInterval(this.blockTimerId);

    this.blockTimerId = setInterval(() => this.blockUI(), 60000);
  };

  blockUI() {
    const { isLocked } = this.state;
    if (!isLocked) {
      console.log('Automatic lock screen!');
      this.setState({ isLocked: true });
      clearInterval(this.blockTimerId);
    }
  }

  renderLockScreen() {
    return (
      <Shade key="shade" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <LockedScreen key="lockedScreen">
          <Clock
            containerStyle={{
              width: '410px',
              position: 'fixed',
              bottom: 100,
              right: 20,
            }}
            clockStyle={{ alignSelf: 'flex-end', justifySelf: 'flex-end', textAlign: 'left' }}
            dateStyle={{ alignSelf: 'flex-end', justifySelf: 'flex-end', textAlign: 'center' }}
          />
          <button type="button" style={{ cursor: 'pointer' }} onClick={this.handleUnblock}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-lock"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="none" color="#FFF" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" color="#FFF" />
            </svg>
          </button>
        </LockedScreen>
      </Shade>
    );
  }

  renderUnclokedScreen() {
    const { userInput, passInput } = this.state;

    return (
      <Modal key="form">
        <Form>
          <img src={logo} alt="Logo" />
          <div>
            <label htmlFor="username">Usuário</label>
            <input
              name="username"
              type="text"
              onChange={e => this.setState({ userInput: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              name="password"
              type="password"
              onChange={e => this.setState({ passInput: e.target.value })}
            />
          </div>
          <div>
            <button type="button" onClick={() => this.setState({ isLocked: true })}>
              Acessar
            </button>
          </div>
        </Form>
      </Modal>
    );
  }

  render() {
    const { isLocked } = this.state;

    return (
      <Wallpaper style={{ overflow: 'hidden' }}>
        <PoseGroup style={{ overflow: 'hidden' }}>
          {isLocked ? this.renderLockScreen() : this.renderUnclokedScreen()}
        </PoseGroup>
      </Wallpaper>
    );
  }
}
