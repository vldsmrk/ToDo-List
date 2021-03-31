// let input_txt = document.querySelector('#input_txt');
// let input_butt = document.querySelector('#input_butt');

// function list(text){
//     let toDo=document.createElement('div');
//     toDo.classList.add('item');
//     toDo.innerHTML = `<p>${text}</p>`;
//     return toDo;
// }

// input_butt.addEventListener('click', (Event)=> {
//     if (input_txt.value == '') {
//         alert('Nemae')
//     } else {
//     let res = list(input_txt.value);
//     let blockREs = document.querySelector('#block');
//     blockREs.append(res);        
//     }
//       Number(earn.value)-
// })

 let earn = document.querySelector('#earn');
 let gas = document.querySelector('#gas');
 let water = document.querySelector('#water');
 let electro = document.querySelector('#electro');
 let buttRes = document.querySelector('#resultat');

 const kubGas = 0.612;  
 const kubWat = 25.224;
 const kubElc = 1.68;


 
buttRes.addEventListener('click', (Event)=> {
    let resKubGas = kubGas*Number(gas.value) ;
    let resKubWat = kubWat*Number(gas.value) ;
    let resKubElc = kubElc*Number(gas.value) ;

    let totRes = resKubGas+resKubWat+resKubElc;
    let raschet = Number(earn.value)-totRes;
    
    console.log(resKubGas , resKubWat , resKubElc , totRes , raschet);
})

function list(text){
    let toDo=document.createElement('div');
    toDo.classList.add('item');
    toDo.innerHTML = `<p>${text}</p>`;
    return toDo;
}