import { css } from 'lit';

const styles = css`
  .primary {
    font-family: 'Lucida Sans', Verdana, sans-serif;
    font-weight: 700;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 8px 16px;
    position: relative;
    background-color: #222;
    color: #fff;
    transition: .1s;
  }

  .primary:focus::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  .primary:hover {
    color: #222;
    background-color: #fff;
  }

  .primary:active {
    background-color: #777;
  }

  .primary:focus::before {
    padding: 2px;
    top: -2px;
    left:-2px;
    box-shadow: 0 0 1px 2px #222;
  }

  .primary:disabled {
    background-color: #999;
    pointer-events: none;
  }

  .secondary {
    font-family: 'Lucida Sans', Verdana, sans-serif;
    font-weight: 700;
    cursor: pointer;
    border: 2px solid #222;
    outline: none;
    padding: 8px 16px;
    position: relative;
    background-color: transparent;
    color: #222;
    transition: .1s;
  }

  .secondary:hover {
    color: #fff;
    background-color: #222;
  }

  .secondary:active {
    background-color: #777;
    border: 2px solid #777;
  }

  .secondary:focus {
    box-shadow: 0 0 1px 2px #222;
  }

  .secondary:disabled {
    border: 2px solid #999;
    color: #999;
    pointer-events: none;
  }

  .link {
    font-family: 'Lucida Sans', Verdana, sans-serif;
    font-weight: 700;
    cursor: pointer;
    border: none;
    outline: none;
    position: relative;
    background-color: transparent;
    color: #222;
    transition: .1s;
  }

  .link:hover {
    box-shadow: 0 0 0 1px #222;
  }

  .link:focus {
    text-decoration: underline;
  }

  .link:active {
    box-shadow: none;
  }

  .link:disabled {
    color: #999;
    pointer-events: none;
  }
`;

export default styles;
