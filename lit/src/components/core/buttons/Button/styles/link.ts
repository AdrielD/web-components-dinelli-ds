import { css } from 'lit';

export default css`
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
