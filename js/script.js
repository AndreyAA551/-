console.log('Hello my friend!')

$('#bf-yellow-closer').on('click', function () {
  console.log('You click on yellow block closer')
  // document.getElementById('bf-yellow-block').style['display'] = 'none'
  $('#bf-yellow-block').hide()
})
