
$('#result').on("input",searchEvent);

function searchEvent(){
let searchText = [];
let hide = [];
let inputText = $(this).val();
console.log(inputText);

let chono=$('.image-element-text').text();
let tidori=$('.image-element-text2').text();
let hamabe=$('.image-element-text3').text();
let kamaitati=$('.image-element-text4').text();


if (chono.indexOf(inputText) > -1) {
  $('.photot,.photoh,.photok').addClass('hidden');
  
}
if(tidori.indexOf(inputText) > -1) {
  $('.photoc,.photoh,.photok').addClass('hidden');
}
if(hamabe.indexOf(inputText) > -1){
  $('.photoc,.photot,.photok').addClass('hidden');
}

if(kamaitati.indexOf(inputText) > -1){
  $('.photoc,.photot,.photoh').addClass('hidden');

}

}






