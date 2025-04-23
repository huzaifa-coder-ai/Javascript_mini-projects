let input = document.getElementById('input-box');
    let buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerHTML;

            if (value === '=') {
                string = eval(string);
                input.value = string;
            }
            else if (value === 'AC') {
                string = "";
                input.value = string;
            }
            
            else {
                string += value;
                input.value = string;
            }
        });
    });