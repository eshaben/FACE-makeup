const brandsList = ['almay', 'anna sui', 'annabelle', 'benefit', "burt's bees", 'butter london', 'cargo cosmetics', 'china glaze', 'covergirl', 'dalish', 'dior', 'dr. hauschka',
'e.l.f.', 'essie', 'iman', "l'oreal", 'marcelle', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura',
'moov', 'nyx', 'orly', 'pacifica', 'physicians formula', 'piggy paint', 'pure anada', 'revlon', 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'wet n wild', 'zorah']

$('.products').append(`
  <h1>Something goes here</h1>
  `)

$('.brand').on('click', function(){
  console.log('hdks');
  $('.products').empty()
  $('.products').append(`
    <ul class="list-inline row"></ul>
  `)

  for (var i = 0; i < brandsList.length; i++){
    $('.list-inline').append(`
      <li class="col-3 list-inline-item"> ${brandsList[i]} </li>
      `
    )
  }

})
