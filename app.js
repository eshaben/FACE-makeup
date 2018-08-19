const brandsList = [
{id: 1, brand: 'almay'},
{id: 2, brand: 'annabelle'},
{id: 3, brand: 'benefit'},
{id: 4, brand: 'covergirl'},
{id: 5, brand: 'dalish'},
{id: 6, brand: 'dior'},
{id: 7, brand: 'e.l.f.'},
{id: 8, brand: 'essie'},
{id: 9, brand: 'iman'},
{id: 10, brand: "l'oreal"},
{id: 11, brand: 'marcelle'},
{id: 12, brand: 'maybelline'},
{id: 13, brand: 'milani'},
{id: 14, brand: 'misa'},
{id: 15, brand: 'mistura'},
{id: 16, brand: 'moov'},
{id: 17, brand: 'nyx'},
{id: 18, brand: 'orly'},
{id: 19, brand: 'pacifica'},
{id: 20, brand: 'revlon'},
{id: 21, brand: 'sante'},
{id: 22, brand: 'smashbox'},
{id: 23, brand: 'stila'},
{id: 24, brand: 'suncoat'},
{id: 25, brand: 'zorah'}];
const faceItems = ['blush', 'bronzer','foundation'];
const makeupApiBaseUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json';

$('.products').append(`
  <h1 class="margin-top">Home Page... TBD</h1>
  `)

$('.brand').on('click', function(){
  $('.products').empty()
  $('.products').append(`
    <div class="jumbotron jumbotron-fluid margin-top">
      <h1 class="display-2 face-title center">BRAND</h1>
    </div>
    <ul class="list-inline row margin-top"></ul>
  `)

  for (var i = 0; i < brandsList.length; i++){
    $('.list-inline').append(`
      <li class="col-3 brand-list list-inline-item"><button type="button" class="btn btn-link" id="${brandsList[i].id}"> ${brandsList[i].brand} </button></li>
      `
    )
  }
})

$('.face').on('click', function(){
  $('.products').empty()

  $('.products').append(`
    <div class="jumbotron jumbotron-fluid margin-top">
      <h1 class="display-2 face-title center">FACE</h1>
    </div>

    <div class="container row faceItems">
      <div class="col margin-top">
        <div class="card" style="width: 20rem;">
          <figure class="">
            <img class="card-img" src="../assets/blush.png" alt="Card image">
          </figure>
        </div>
      </div>
      <div class="col margin-top">
        <div class="card" style="width: 20rem;">
          <figure class="">
            <img class="card-img" src="../assets/bronzer_.png" alt="Card image">
          </figure>
        </div>
      </div>
      <div class="col margin-top">
        <div class="card" style="width: 20rem;">
          <figure class="">
            <img class="card-img" src="../assets/foundation_.png" alt="Card image">
          </figure>
        </div>
      </div>
    </div>
    `)

})

for (var i = 0; i < brandsList.length; i++){
  $(document).on('click', '#' + brandsList[i].id, function(){
    getDataByBrand(brandsList[this.id - 1].brand);
  })
}

function getDataByBrand(brand){
  $.get(`${makeupApiBaseUrl}?brand=${brand}`, function(data){
    console.log(data);
  })
}
