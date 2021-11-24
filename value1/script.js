const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input',() => {

    const request = new XMLHttpRequest();

    request.open('GET','current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    inputRub.addEventListener('input', () => {
        if(inputRub.value.match(/\D/g)) {
            inputRub.style.background = 'red';
            
        } else {
            inputRub.style.background = 'none';                        
        }
    });

    inputUsd.addEventListener('input', () => {
        if(inputUsd.value.match(/\D/g)) {
            inputUsd.style.background = 'red';            
            
        } else {
            inputUsd.style.background = 'none';                        
        }
    });


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то  пошло не так";
        }
    });


});