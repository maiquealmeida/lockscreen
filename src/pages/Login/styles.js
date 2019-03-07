import styled from 'styled-components';

export const Blur = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const H1 = styled.form`
  font-family: 'Quicksand', sans-serif;
  font-size: 72pt;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

export const LockedScreen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex: 1;

  button {
    top: 50%;
    margin-top: -48px;
    align-self: center;
    justify-self: center;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 96px;
    height: 96px;
    margin: auto 0;
    transition: background 300ms ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      transition: background 350ms ease-in-out;
    }
  }

  svg {
    fill: #ffffff;
  }
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.7);

  width: 100%;
  max-width: 250px;
  border: 0;
  border-radius: 5px;
  margin: 100px auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 5px 0;

    label {
      flex: 1;
      margin: 0 0 5px 0;
      display: block;
    }

    input {
      flex: 1;
      border: 0;
      border-radius: 3px;
      padding: 10px;
      font-size: 14px;
      color: #333;
      box-shadow: 0px 0px 2px;
    }

    button {
      flex: 1;
      width: 100%;
      display: block;
      height: 48px;
      border: 0;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      background: #336699;
      box-shadow: 1px 1px 2px;
    }
  }
`;
