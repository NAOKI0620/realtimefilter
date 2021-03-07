
$('#result').on("input",searchEvent);

function searchEvent(){
let searchText = [];
let hide = [];
let inputText = $(this).val();
console.log(inputText);

let chono=$('.image-element-text').text();
console.log(chono);

if (inputText.indexOf(chono) > -1) {
  $('.photot,.photoh,.photok').addClass('hidden');
}

}