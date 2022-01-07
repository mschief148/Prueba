const url = 'https://restcountries.com/v3.1/all';

const contentContainer = document.getElementById('content')


fetch(url).then(
  (response) => { return response.json() }
).then((paises) => {
    paises.forEach( pais => {
      console.log('parsed country', pais);
      const paisComponent = document.createElement('pais-component')
      paisComponent.innerHTML = `<h5 slot="nombre-pais" class="card-title" data-bs-toggle="modal" data-bs-target="#paisModal">${pais.name.common}</h5>`
      contentContainer.appendChild(paisComponent)
    });  
  }
)
