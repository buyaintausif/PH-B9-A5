// const element = document.getElementById('A2');
// element.addEventListener('click', function(){
//     const elementS = document.getElementById('A2');
//     elementS.classList.remove('bg-slate-200');
//     elementS.classList.add('bg-[#1DD100]');

//     const seatCount = document.getElementById('sit');
//     const seatSet = seatCount.innerText;

//     if(seatSet == 40){

//         const newSit = seatSet - 1;
//     seatCount.innerText= newSit;

//     const selectSeat = document.getElementById('seat');
//     const setsit = selectSeat.innerText = 1;

//     const seatInput = document.getElementById('sit-1');
//     seatInput.innerText ='A2';

//     const seatInput2 = document.getElementById('sit-2');
//     seatInput2.classList.add('hidden')

//     }

// })

const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  console.log(event.target);
  const sitId = event.target.id;
  const htmlId = document.getElementById(sitId);

  const sitCount = document.getElementById("sit");
  const totalSit = sitCount.innerText;
  parseInt(totalSit);

  const bookedSitId = document.getElementById("seat");
  const bookedSit = bookedSitId.innerText;
  parseInt(bookedSit);

  const listContainer = document.getElementById("list-container");

  const listItem = document.createElement("li");

  listItem.innerText = sitId;
  listItem.classList.add("item");

  while (totalSit > 36) {
    const sitIdOfIt = getSitElementById(sitId);
    sitIdOfIt.classList.remove("bg-slate-200");
    sitIdOfIt.classList.add("bg-[#1DD100]");
    sitCount.innerText = totalSit - 1;

    bookedSitId.innerText = bookedSit - -1;

    listContainer.appendChild(listItem);
    

    let getTicket = document.getElementById("list-container");
    let child = getTicket.getElementsByTagName("*").length;

    let total = child * 550;

    let iniPrize = document.getElementById("initial-prize");

    iniPrize.innerText = total;

    let fPrize = document.getElementById("fixed-prize");

    fPrize.innerText = total;

    let getPhoneId = document.getElementById('phone');
    let getPhone = getPhoneId.value;

    
    if (getPhone  ) {
        const addSec = document.getElementById('submit');
        addSec.classList.remove('hidden');

        function hide(){
            console.log('hiddeen');
            const selecthidden = document.getElementById('last');
              selecthidden.classList.remove('hidden');
    
          }


  
       
      }

      
     




   
    



    totalSit = totalSit - 1;
    
  }

  // if (totalSit == 40){
  //     const sitIdOfIt = getSitElementById(sitId);
  //     sitIdOfIt.classList.remove('bg-slate-200');
  //     sitIdOfIt.classList.add('bg-[#1DD100]');

  // }else if(totalSit == 39){
  //     const sitIdOfIt = getSitElementById(sitId);
  //     sitIdOfIt.classList.remove('bg-slate-200');
  //     sitIdOfIt.classList.add('bg-[#1DD100]');

  // }

  // sitCount.innerText= totalSit-1;
});
