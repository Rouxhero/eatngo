//Le Van Canh dit Ban Leo
//Grzechowiak Adrien
//groups 1

window.addEventListener('load',initForm);
function initForm(){
  
  fetchFromJson('services/getRest.php')
  .then(processAnswer)
  .then(makeOptions);
}


function processAnswer(answer){
  console.log(answer)
  if (answer.status == "ok"){
    return answer.result;
  }else
    throw new Error(answer.message);
}
//nom,adresse,position,status,afluence

function makeOptions(tab){

  console.log(tab);
}

