(function(){
 const titleCuestions =[...document.querySelectorAll('.cuestions_title')];
// console.log(titleCuestions);
 titleCuestions.forEach(cuestions =>{
    cuestions.addEventListener('click', ()=>{
        let height =0;
        let answer = cuestions.nextElementSibling;
        console.log('quiero saber si ejecuta pregunta');
        let addPadding = cuestions.parentElement.parentElement;
        addPadding.classList.toggle('cuestions_padding--add');
        cuestions.children[0].classList.toggle('cuestions_arrow--rotate');

        if(answer.clientHeight === 0){
            height = answer.scrollHeight;

        }

        answer.style.height = `${height}px`;

    }) 
    //me quedé en 1:29:18 rotar la flecha

 });
})(); 
/*
(function(){
    const titleCuestions =[...document.querySelectorAll('.cuestions_title')];
   // console.log(titleCuestions);
    titleCuestions.forEach(cuestions =>{
       cuestions.addEventListener('click', ()=>{
        console.log('ahora está imprimiendo or lo menos');
   
       }) 
       //me quedé en 1:29:18 rotar la flecha
   
    });
   })();*/