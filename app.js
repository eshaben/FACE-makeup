const brandsList = [
{id: 1, brand: 'Almay'},
{id: 2, brand: 'Annabelle'},
{id: 3, brand: 'Benefit'},
{id: 4, brand: 'Covergirl'},
{id: 5, brand: 'Dalish'},
{id: 6, brand: 'Dior'},
{id: 7, brand: 'E.l.f.'},
{id: 8, brand: 'Essie'},
{id: 9, brand: 'Iman'},
{id: 10, brand: "L'oreal"},
{id: 11, brand: 'Marcelle'},
{id: 12, brand: 'Maybelline'},
{id: 13, brand: 'Milani'},
{id: 14, brand: 'Misa'},
{id: 15, brand: 'Mistura'},
{id: 16, brand: 'Moov'},
{id: 17, brand: 'Nyx'},
{id: 18, brand: 'Orly'},
{id: 19, brand: 'Pacifica'},
{id: 20, brand: 'Revlon'},
{id: 21, brand: 'Sante'},
{id: 22, brand: 'Smashbox'},
{id: 23, brand: 'Stila'},
{id: 24, brand: 'Suncoat'},
{id: 25, brand: 'Zorah'}];
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
    <ul class="brand-list list-inline row margin-top"></ul>
    <div class="item-list container"></div>
  `)

  for (var i = 0; i < brandsList.length; i++){
    $('.brand-list').append(`
      <li class="col-3 brand-list-item list-inline-item"><button type="button" class="btn btn-link" id="${brandsList[i].id}"> ${brandsList[i].brand} </button></li>
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
  let brandName = brand.toLowerCase();
  clearBrandList();
  $.get(`${makeupApiBaseUrl}?brand=${brandName}`, function(data){
    console.log(data);
    loadProductItemsForListView(data, brand)
  })
}

function clearBrandList(){
  $('.brand-list').empty()
}

function loadProductItemsForListView(items, brand){
  $('.item-list').append(`
    <h2 class="brand-name">Brand: ${brand}</h2>
    <div class="item-cards card-columns"></div>`);
  for(var i=0; i < items.length; i++){
    $('.item-cards').append(`
      <div class="card w-75" style="margin: 5%;">
        <img class="card-img-top" src= ${items[i].image_link} alt="Card image cap">
        <div class="card-body">
          <h4>${items[i].name}</h4>
          <p class="card-text">${items[i].price}</p>
        </div>
      </div>
    `)
  }
}

function loadProductDetailPage(){

}
