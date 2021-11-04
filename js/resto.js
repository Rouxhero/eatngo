//Le Van Canh dit Ban Leo
//Grzechowiak Adrien
let selectedId;
window.addEventListener('load',initForm);
function initForm(){
  selectedId = 0;//default value
  fetchFromJson('services/getRest.php')
  .then(processAnswer)
  .then(makeOptions);
}


function transphormeDate(date){
    return date.substring(0, 2)+"h"+date.substring(3, 5)
}
function checkDate(resto){
  let d = new Date();
  let hour =  d.getHours();
  let min  =  d.getMinutes();
  let minRO = parseInt(resto.ouverture.substring(3, 5));
  let minRF = parseInt(resto.fermeture.substring(3, 5));
  let hourRO = parseInt(resto.ouverture.substring(0, 2));
  let hourRF = parseInt(resto.fermeture.substring(0, 2));
  return hour>=hourRO&&hour<=hourRF&&min>=minRO&&min<=minRF
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
    let restos = document.createElement('div');
    restos.className ="resto";
    restos.id = resto.id
    // Div visible
    let option = document.createElement('div');
    option.className = "visible"
    // Nom
    let gg = document.createElement('div');
    let name = document.createElement('p');
    name.textContent = resto.nom;
    name.className = "headname"
    gg.className = "Name";
    gg.append(name)
    // Horaire
    name = document.createElement('p');
    name.textContent = transphormeDate(resto.ouverture)+'-'+transphormeDate(resto.fermeture);
    gg.append(name);
    option.append(gg);
    // Status ouverture
    gg = document.createElement('div');
    name = document.createElement('div');
    gg.className = "litlebox"
    let status = false
    if (checkDate(resto)){
      if (resto.status=="1"){
        name.className = "status open";
        status = true
      }else{
         name.className = "status close";
      }
    }else{
      name.className = "status close";
    }
    gg.append(name);

    // Affluance
    let affluance = parseInt(resto.afluence);
    let opt;
    name = document.createElement('div');
    name.className = "affl";
    let i;
    for (i=0;i<5;i++){
      opt = document.createElement('img');
      if (i< affluance&&status){
        opt.src = "./img/playerFace.png";
      }else{
        opt.src = "./img/playerFace_outline.png";
      }
      name.append(opt);
    }
    gg.append(name);
    option.append(gg);
    // ouverture deroulant
    option.addEventListener("click", function(event){
        afficheValue(resto);
    });
    restos.append(option);
    // div invisble
    option = document.createElement('div')
    option.className = "hidden"
    option.style.display="none"
    let mapdiv = document.createElement('div');
    let adresse = document.createElement('p');
    adresse.textContent = resto.adresse;
    mapdiv.append(adresse);
    option.append(mapdiv);
    restos.append(option);
    data.append(restos);
  }
}

function updateinvisble(){
  if (selectedId != 0){
    let div = document.getElementById(selectedId);
    div.children[1].style.display = 'block';
  }
}
function afficheValue(value){
    if (selectedId != 0){
      let div = document.getElementById(selectedId);
      div.children[1].style.display = 'none';
    }
    selectedId = value.id;
    updateinvisble();

}
//{"id":"1","nom":"RU Pariselle","adresse":"NN","position":"123-454-55","status":"1","afluence":"0","ouverture":"10:15:00","fermeture":"14:15:00"}