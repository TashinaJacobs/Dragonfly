var contOne = document.getElementsByClassName('containerTwo')[0]
var contTwo = document.getElementsByClassName('containerThree')[0]
var contThree = document.getElementsByClassName('containerFour')[0]
console.log(div);

$('#dinnerBtn').on('click', function(){
  $(contOne).hide()
  $(contTwo).show()
}),
$('#dinnerBtn').on('click', function(){
  $(contTwo).hide()
  $(contThree).show()
}),
$('#dinnerBtn').on('click', function(){
  $(contThree).hide()
  $(contFour).show()
}),
$('#dinnerBtn').on('click', function(){
  $(div).hide()
  $(div2).show()
})
