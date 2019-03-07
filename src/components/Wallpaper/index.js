import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img from '../../assets/wallpapers/346797.jpg';

const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
`;
const Wallpaper = ({ children }) => <BackgroundImage>{children}</BackgroundImage>;

Wallpaper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Wallpaper;
