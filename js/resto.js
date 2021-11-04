//Le Van Canh dit Ban Leo
//Grzechowiak Adrien

window.addEventListener('load',initForm);
function initForm(){
  
  fetchFromJson('services/getRest.php')
  .then(processAnswer)
  .then(makeOptions);
}


function transphormeDate(date){
    return date.substring(0, 2)+"h"+date.substring(3, 5)
}

function processAnswer(answer){
  if (answer.status == "ok"){
    return answer.result;
  }else
    throw new Error(answer.message);
}
//nom,adresse,position,status,afluence

function makeOptions(tab){
  let data = document.getElementById('choix');
  for (let resto of tab){  
    let option = document.createElement('div');
    option.className ="resto";
    let gg = document.createElement('div');
    let name = document.createElement('p');
    name.textContent = resto.nom;
    name.className = "headname"
    gg.className = "Name";
    gg.append(name)
    name = document.createElement('p');
    name.textContent = transphormeDate(resto.ouverture)+'-'+transphormeDate(resto.fermeture);
    gg.append(name);
    option.append(gg);
    name = document.createElement('div');
    gg = document.createElement('div');
    gg.className = "litlebox"
    if (resto.status=="1"){
      name.className = "status open";
    }else{
       name.className = "status close";

    }
    gg.append(name);
    option.append(gg);
    let affluance = parseInt(resto.afluence);
    let opt;
    name = document.createElement('div');
    name.className = "affl";
    let i;
    for (i=0;i<5;i++){
      opt = document.createElement('div');
      if (i< affluance){
        opt.className = "yes";
      }else{
        opt.className = "no";
      }
      name.append(opt);
    }
    option.append(name)
    data.append(option);
  }
}

//{"id":"1","nom":"RU Pariselle","adresse":"NN","position":"123-454-55","status":"1","afluence":"0","ouverture":"10:15:00","fermeture":"14:15:00"}