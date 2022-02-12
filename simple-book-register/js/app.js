//Select html elements 

const form = document.querySelector('#bookRegForm');
const bookName = document.querySelector('#book_name');
const authorName = document.querySelector('#author');
const bookPrice = document.querySelector('#price');
const bookDom = document.getElementById('bookLists');
const addBtn = document.getElementById('bookSubmit');



//Field required function
const isRequired = (value) => value === '' ? false : true;

//Min and max input size
const inputSize = (length, min, max) => length < min || length > max ? false : true;

//Number input check
const isNumber = (value) => isNaN(value) === true ? false : true;

//Show error message
const showError = (input, message) => {
    //Get input parent element 
    const fieldParent = input.parentElement;

    //Add error class
    input.classList.remove('border-green-700');
    input.classList.add('border-red-700');

    //show the error message
    const error = fieldParent.querySelector('span');
    error.textContent = message;
}

//Show error message
const showSuccess = (input) => {
    //Get input parent element 
    const fieldParent = input.parentElement;

    //Add error class
    input.classList.remove('border-red-700');
    input.classList.add('border-green-700');

    //show the error message
    const error = fieldParent.querySelector('span');
    error.textContent = '';
}

//Check book name 
const checkBookName = () => {

    let valid = false;
    const max = 50, min = 2;
    const book = bookName.value.trim();

    if(!isRequired(book)){
        showError(bookName,'Book name is required');
    }else if(!inputSize(book.length, min, max)){
        showError(book,`Bookname must be between ${min} and ${max} characters.`);
    }else{
        showSuccess(bookName);
        valid = true;
    }

    return valid;
}


//Check author name 
const checkAuthorName = () => {

    let valid = false;
    const max = 20, min = 2;
    const author = authorName.value.trim();

    if(!isRequired(author)){
        showError(authorName,'Author name is required');
    }else if(!inputSize(author.length, min, max)){
        showError(authorName,`Bookname must be between ${min} and ${max} characters.`);
    }else{
        showSuccess(authorName);
        valid = true;
    }

    return valid;
}

//Check price 
const checkPrice = () => {

    let valid = false;
    const price = bookPrice.value;

    if(!isRequired(price)){
        showError(bookPrice,'Price is required');
    }else if(!isNumber(price)){
        showError(bookPrice,'Input must be a number');
    }else{
        showSuccess(bookPrice);
        valid = true;
    }

    return valid;
}


form.addEventListener('submit', function(e){

    e.preventDefault();

    //Validate form 
    let isBookNameValid = checkBookName(),
    isAuthorNameValid = checkAuthorName(),
    isPriceValid = checkPrice();
    
    let isFormValid = isBookNameValid && isAuthorNameValid && isPriceValid;
    
    if(isFormValid){
        let book = bookName.value;
        let author = authorName.value;
        let price = bookPrice.value;

        let newBookNameTr = document.createElement('tr');

        let newBookNameTd = document.createElement('td');
        let newBookNameDiv = document.createElement('div');
        newBookNameDiv.setAttribute("class", "font-medium text-gray-800");
        newBookNameTd.setAttribute("class", "p-2 whitespace-nowrap");
        newBookNameDiv.innerHTML = book;
        newBookNameTr.appendChild(newBookNameTd);
        newBookNameTd.appendChild(newBookNameDiv);


        let newAuthorNameTd = document.createElement('td');
        let newAuthorNameDiv = document.createElement('div');
        newAuthorNameDiv.setAttribute("class", "font-medium text-gray-800");
        newAuthorNameDiv.innerHTML = author;
        newBookNameTr.appendChild(newAuthorNameTd);
        newAuthorNameTd.appendChild(newAuthorNameDiv);


        let newPriceNameTd = document.createElement('td');
        let newPriceNameDiv = document.createElement('div');
        newPriceNameDiv.setAttribute("class", "font-medium text-gray-800");
        newPriceNameTd.setAttribute("class", "p-2 whitespace-nowrap");
        newPriceNameDiv.innerHTML = price;
        newBookNameTr.appendChild(newPriceNameTd);
        newPriceNameTd.appendChild(newPriceNameDiv);


        let newActionBtnTd = document.createElement('td');
        let newActionBtnDiv = document.createElement('div');
        let actionBtn = document.createElement('button');
        newActionBtnDiv.setAttribute('class', 'p-2');
        actionBtn.setAttribute("class", "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900");
        actionBtn.setAttribute("id", "removeBtn");
        actionBtn.innerHTML = 'Delete';
        newBookNameTr.appendChild(newActionBtnTd);
        newActionBtnTd.appendChild(newActionBtnDiv);
        newActionBtnDiv.appendChild(actionBtn);


        bookDom.appendChild(newBookNameTr);

        bookName.value = '';
        authorName.value = '';
        bookPrice.value = '';


        const removeBtn = document.getElementById('removeBtn');
    }
});

form.addEventListener('click', function(e){

    switch(e.target.id){
        case 'book_name':
            checkBookName();
            break;
        case 'author':
            checkAuthorName();
            break;
        case 'price':
            checkPrice();
            break;
    }
});
console.log(removeBtn);
// removeBtn.addEventListener('click', function(e){
//     console.log('Removed');
// });