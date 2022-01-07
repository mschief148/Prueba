
// TEMPLATE
let template = document.createElement('template')
template.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <div class="card">
    <div class="card-body">
      <slot name="nombre-pais" class="card-title" id="card-title"></slot>
    </div>
  </div>

  <!-- MODAL -->
  <div class="modal fade" id="paisModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="nombre-pais" class="modal-title" id="paisModalTitle"></slot>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
`

class PaisComponent extends HTMLElement {

  constructor(){
    super();

    const shadowDOM = this.attachShadow({mode: 'open'})
    shadowDOM.appendChild(document.importNode(template.content, true));

  }

  connectedCallback(){
  }

  attributeChangedCallback(atributo, oldValue, newValue) {
    
  }

  static get observedAttributes() {
    return ['pais']
  }

}

window.customElements.define('pais-component', PaisComponent);
