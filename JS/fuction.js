// function play(){
//     // hide the reasonable section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')

//     //show the desireable section
//     const playGroundSection= document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// function hideSection(elementId){
//     const hideSec = document.getElementById(elementId);
//     hideSec.classList.add('hidden');
// }

// function addSection(elementId){
//     const addSec = document.getElementById(elementId);
//     addSec.classList.remove('hidden');
// }

// function setCss(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');

// }

// function removeBgById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');

// }


// function getTextElementValueById(elementId){
//     const element =document.getElementById(elementId);
//     const elementValueText = element.innerText;
//     const value =parseInt( elementValueText);

//     return value;
// }

// function setTextElementById(elementId,value){
//     const element = document.getElementById(elementId);
//     element.innerText = value;
// }



function getSitElementById(elementId){
    const element = document.getElementById(elementId);
    return element;
}

function hide(){
    console.log('hiddeen');
    const selecthidden = document.getElementById('last');
      selecthidden.classList.remove('hidden');

      const mainSelect = document.getElementById('main');

      mainSelect.classList.add('hidden');

      const mainSelect1 = document.getElementById('header');

      mainSelect1.classList.add('hidden');

  }


