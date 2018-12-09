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