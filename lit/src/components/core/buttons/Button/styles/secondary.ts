import { css } from 'lit';

export default css`
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
`;
