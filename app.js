const brandsList = ['almay', 'annaSui', 'annabelle', 'benefit', "burt'sBees", 'butter london', 'cargo cosmetics', 'china glaze', 'covergirl', 'dalish', 'dior', 'dr. hauschka',
'e.l.f.', 'essie', 'iman', "l'oreal", 'marcelle', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura',
'moov', 'nyx', 'orly', 'pacifica', 'physicians formula', 'piggy paint', 'pure anada', 'revlon', 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'wet n wild', 'zorah']
const faceItems = ['blush', 'bronzer', 'foundation']


$('.products').append(`
  <h1 class="margin-top">Home Page... TBD</h1>
  `)

$('.brand').on('click', function(){
  $('.products').empty()
  $('.products').append(`
    <ul class="list-inline row margin-top"></ul>
  `)

  for (var i = 0; i < brandsList.length; i++){
    $('.list-inline').append(`
      <li class="col-3 brand-list list-inline-item"><button type="button" class="btn btn-link" id="${brandsList[i]}"> ${brandsList[i]} </button></li>
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
            <img class="card-img" src="./blush.png" alt="Card image">
          </figure>
        </div>
      </div>
      <div class="col margin-top">
        <div class="card" style="width: 20rem;">
          <figure class="">
            <img class="card-img" src="./bronzer_.png" alt="Card image">
          </figure>
        </div>
      </div>
      <div class="col margin-top">
        <div class="card" style="width: 20rem;">
          <figure class="">
            <img class="card-img" src="./foundation_.png" alt="Card image">
          </figure>
        </div>
      </div>
    </div>
    `)

})

//ran into issue with spacing, apostrophes, and periods in brand names.. Need to
//use regex to get rid of above things -- think about best way to approach and come back to it

for (var i = 0; i < brandsList.length; i++){
  $(document).on('click', '#' + `${brandsList[i]}`, function(){
    console.log(this.id);
  })
}
