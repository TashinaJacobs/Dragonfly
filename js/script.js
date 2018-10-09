var contOne = document.getElementsByClassName('containerOne');
var contTwo = document.getElementsByClassName('containerTwo');
var contThree = document.getElementsByClassName('containerThree');
var contFour = document.getElementsByClassName('containerFour');
var contFive = document.getElementsByClassName('containerFive');

$('#enterBtn').on('click', function(){
  $(contOne).hide()
  $(contTwo).show()
});
$('#dinnerBtn').on('click', function(){
  $(contTwo).hide()
  $(contThree).show()
});
$('#continueBtn').on('click', function(){
  $(contThree).hide()
  $(contFour).show()
});
$('#placeOrderBtn').on('click', function(){
  $(contFour).hide()
  $(contFive).show()
});
$('#orderCompleteBtn').on('click', function(){
  $(contFive).hide()
  $(contTwo).show()
});

console.log('working');


$('#logo').click(function(){
  console.log('click');
  //if/else statements
  if ($(contFive).css('display') == 'block') {
    $(contFive).hide()
    $(contFour).show()
  }
});

//click events working (troublshooted below - problem is with targeting the font awesome icons)

// $(contFive).click(function(){
//   console.log('click');
// })

// $('#logo').on('click', function(){
//   console.log('working');
//   //if/else statements
//   // if ($(contFive).css('display') == 'block') {
//   //   $(contFive).hide()
//   //   $(contFour).show()
//   // }
// })

//if/else if statements for the back button
//LOOK AT YOUR FOUNDATION JS PROJECT!
//if contFive is visible (!display: none or like display: !none or display:block prob - you will have to try those out and check the syntax) then the back button hides contFive and shows contFour
//once you get that one working, it's the same for each page, just with the relevant cont Variables
//then you'd have an else that hides the back button (on the first page)

//Bell styling
//This will just be a click event that maybe changes the colour
//Look at the JQuery docs - it will be something like .css
