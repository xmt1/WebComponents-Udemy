# Web Components & Stencil.js

Going through the [Web Components](https://www.udemy.com/web-components-stenciljs-build-custom-html-elements/) course from Udemy

## Notes & Resources

Overview of Web Components from MDN: https://developer.mozilla.org/en-US/docs/Web/Web_Components

### Section 1

Three main concepts of web components:

1. Custom elements - Register your own HTML tags
2. Shadow DOM - Manage a separate DOM node tree for custom HTML elements (scroped CSS styles)
3. Templates & Slots - Write HTML templates that you can add to your HTML elements

### Section 2

This section is just an overview of modern JavaScript

### Section 3

Browser support can be viewed at https://www.webcomponents.org/

**Start of a custom element**   
```javascript
class Tooltip extends HTMLElement {
  constructor() {
    console.log('It is working');
  }  
}

customElements.define('my-tooltip', Tooltip);
```

**Why do custom elements need a dash(-) in their name**   
https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name


**Web Component Lifecycle**  
1. Element created
    * *constructor()*
2. Element attached to the DOM
    * *connectedCallback()*
3. Element detached from the DOM
    * *disconnectedCallback()*
4. Observed attribute updated
    * attributeChangedCallback()

**Using .bind()**

Use .bind() to ensure methods fired from event listeners can't be accessed from other classes/components:

```javascript
tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
```

**Add attributes to custom components**

Example:
```html
<uc-tooltip text="Web Components is a set of standards"></uc-tooltip>
```

The above custom element has a text attribute which can be setup using *.getAttribute()* when the component is attached to the DOM:

```javascript
connectedCallback() {
    if (this.hasAttribute('text')) {
        // tooltipText is defined in the components constructor()
        this._tooltipText = this.getAttribute('text');
    }
  }
```

**Using the Shadow DOM**        

Unlock the Shadow DOM for a custom component by using *attachShadow()* in the component's constructor:

```javascript
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
```

When the Shadow DOM is set, the *shadowRoot* of the component needs to be accessed before manipulating other DOM properties:

```javascript
/*
  Light DOM
  this.appendChild(tooltipIcon);
*/

//Shadow DOM
this.shadowRoot.appendChild(tooltipIcon);
```

**Extending a build-in element**        

The code below shows how to modify the anchor (```<a href=""></a>```) element

```javascript
class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', event => {
      if (!confirm('Do you really want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });
```
