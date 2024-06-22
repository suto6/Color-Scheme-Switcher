const btns = document.querySelectorAll('.button');
const body = document.querySelector("body");

btns.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if(event.target.id === 'brown'){
            body.style.backgroundColor = 'brown';
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })
});