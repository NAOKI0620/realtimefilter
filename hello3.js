
$('#result').on("input",searchEvent);

function searchEvent(){
let searchText = [];
let hide = [];
let inputText = $(this).val();
console.log(inputText);


  if (inputText != '') {
   
     let targetText = inputText;
     console.log(targetText);
     
    if(targetText=="長野久義" || targetText=="野球選手"){
      $('.photot,.photoh,.photok').addClass('hidden');
      
    }else if(targetText=="千鳥"　|| targetText=="面白い"){
     $('.photoc,.photoh,.photok').addClass('hidden');
     
    }else if(targetText=="浜辺美波" || targetText=="かわいい"){
      $('.photoc,.photot,.photok').addClass('hidden');
    }else if(targetText=="かまいたち" || targetText=="サイコパス"){
      $('.photoc,.photot,.photoh').addClass('hidden');
    }
   
  }
};

  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

