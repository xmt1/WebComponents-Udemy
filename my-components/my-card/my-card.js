class MyCard extends HTMLElement {
  constructor() {
    super();
    this.cardImg;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/`
      <style>
        :host {
          display: block;
        }
        .card {
          width: var(--card-width, 100%);
          height: var(--card-height, auto);
          display: flex;
          /* align-items: center; */
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        #card-left {
          width: 100%;
          margin-right: 15px;
        }

        .card-header {
          height: 100%;
        }

        img {
          /* max-width: 100%; */
        }
      </style>
      <div class="card">
        <div id="card-left">
          <div class="card-header">
            <img src="">
          </div>
        </div>
        <div>
          <div class="card-body">
            <slot name="card-headline"></slot>
            <slot name="card-text"></slot>
          </div>
          <div class="card-footer">
            <slot name="card-links"></slot>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.cardImg = this.shadowRoot.querySelector('img');
    const cardLeft = this.shadowRoot.querySelector('#card-left');

    if (this.hasAttribute('img-src')) {
      this.cardImg.src = this.getAttribute('img-src');
    } else {
      cardLeft.remove();
    }
  }

}

customElements.define('my-card', MyCard);