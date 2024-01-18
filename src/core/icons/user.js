class DSIconUser extends HTMLElement {
  constructor() {
    super();

    // TODO:
    // - deal with positioning
    // - deal with pointer-events not focusing on button
    const template = document.createElement('template');
    template.innerHTML = /* html */ `
      <style>
        svg {
          width: 1em;
          height: 1em;
        }
      </style>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.button = shadow.querySelector('button');
  }
}

customElements.define('ds-i-user', DSIconUser);
