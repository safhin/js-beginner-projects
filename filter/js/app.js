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
const filterBtns = document.querySelectorAll('.filter-btn');
const allImgs = document.querySelectorAll('.store-item');
const modalMeta = document.querySelector('.modal-meta');
const modal = document.querySelector('.modal-img');
const modalCloseBtn = document.querySelector('#close');


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

allImgs.forEach(function(item){
    item.addEventListener('click', function(){
        const imgSrc = item.childNodes[1].src;
        const imgEl = document.createElement('img'); 

        //Slide right next image btn
        const rightBtn = document.querySelector('.right-btn');
        const leftBtn = document.querySelector('.left-btn');
    
        if(modalMeta.firstChild != null){
            modalMeta.removeChild(modalMeta.firstChild);
            imgEl.setAttribute("src", imgSrc);
            modalMeta.appendChild(imgEl);
            modal.style.setProperty('visibility', 'visible');
        }else{
            modalMeta.appendChild(imgEl);
            imgEl.setAttribute("src", imgSrc);
            modal.style.setProperty('visibility', 'visible');
        }

        
        rightBtn.addEventListener('click', function(e){
            if(item !== null){
                var nextImg = item.nextElementSibling;
                item = nextImg;
                if(nextImg !== null){
                    const nextImgSrc = nextImg.childNodes[1].src;
                    imgEl.setAttribute("src", nextImgSrc);
                    modalMeta.appendChild(imgEl);
                }
            }
        });

        leftBtn.addEventListener('click', function(e){
            if(item !== null){
                var nextImg = item.previousElementSibling;
                item = nextImg;
                if(nextImg !== null){
                    const nextImgSrc = nextImg.childNodes[1].src;
                    imgEl.setAttribute("src", nextImgSrc);
                    modalMeta.appendChild(imgEl);
                }
            }
        });
    });
});


modalCloseBtn.addEventListener('click', function(){
    modal.style.setProperty('visibility', 'hidden');
});


