const template = document.createElement('template');

template.innerHTML= /* html */ `
  <style>
    @import '/src/core/buttons/button/styles/primary.css';
    @import '/src/core/buttons/button/styles/secondary.css';
    @import '/src/core/buttons/button/styles/link.css';
  </style>
  <button>
    <slot></slot>
  </button>
`;

export default template;
