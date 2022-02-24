// const cakeBtn = document.querySelector('.btnCake');
// const cupBtn = document.querySelector('.cupBtn');
// const sweetBtn = document.querySelector('.sweetBtn');
// const donutBtn = document.querySelector('.donutBtn');
// const cakeImgs = document.querySelectorAll('.cake');
// const cupcakeImgs = document.querySelectorAll('.cupcake');
// const doughnutImgs = document.querySelectorAll('.doughnut');
// const sweetsImgs = document.querySelectorAll('.sweets');
// const wrapper = document.querySelector('#wrapper');
// const allDom = document.querySelector('.btnAll');


// allDom.addEventListener('click', function(){
//     for (let index = 0; index < cakeImgs.length; index++) {
//         cakeImgs[index].style.setProperty("display", "block");
//         cupcakeImgs[index].style.setProperty("display", "block");
//         doughnutImgs[index].style.setProperty("display", "block");
//         sweetsImgs[index].style.setProperty("display", "block");
//     }
// });

// cakeBtn.addEventListener('click', function(){
//     const cakeData = this.dataset.cake;
//     cakeImgs.forEach(function(val, index){
//         if(cakeData === val.getAttribute('id')){
//             val.style.setProperty("display", "block");
//             cupcakeImgs[index].style.setProperty("display", "none", "important");
//             doughnutImgs[index].style.setProperty("display", "none", "important");
//             sweetsImgs[index].style.setProperty("display", "none", "important");
//         }
//     });
// });

// cupBtn.addEventListener('click', function(){
//     const cupcakeData =this.dataset.cupcake;
//     cupcakeImgs.forEach(function(val , index){
//         if(cupcakeData === val.getAttribute('id')){
//             val.style.setProperty("display", "block");
//             cakeImgs[index].style.setProperty("display", "none", "important");
//             doughnutImgs[index].style.setProperty("display", "none", "important");
//             sweetsImgs[index].style.setProperty("display", "none", "important");
//         }
//     });
// });

// donutBtn.addEventListener('click', function(){
//     const doughnutData = this.dataset.doughnut;
//     doughnutImgs.forEach(function(val, index){
//         if(doughnutData === val.getAttribute('id')){
//             val.style.setProperty("display", "block");
//             cakeImgs[index].style.setProperty("display", "none", "important");
//             cupcakeImgs[index].style.setProperty("display", "none", "important");
//             sweetsImgs[index].style.setProperty("display", "none", "important");
//         }
//     });
// });

// sweetBtn.addEventListener('click', function(){
//     const sweetsData = this.dataset.sweets;
//     sweetsImgs.forEach(function(val, index){
//         if(sweetsData === val.getAttribute('id')){
//             val.style.setProperty("display", "block");
//             cakeImgs[index].style.setProperty("display", "none", "important");
//             cupcakeImgs[index].style.setProperty("display", "none", "important");
//             doughnutImgs[index].style.setProperty("display", "none", "important");
//         }
//     });
// });


//Optimised solution
const filterBtns = document.querySelectorAll('.btn');
const allImgs = document.querySelectorAll('.store-item');


filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener('click', function(e){
        const filter = this.dataset.filter;
        allImgs.forEach(function(item){
            if(filter === 'all'){
                item.style.setProperty("display", "block");
            }else{
                if (item.classList.contains(filter)) {
                    item.style.setProperty("display", "block");
                } else {
                    item.style.setProperty("display", "none", "important");
                }
            }
        });
    });
});