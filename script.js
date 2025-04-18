let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/'];
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            string = (parseFloat(string) / 100).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == '.') {
            let lastnumber = string.split(/[\+\-\*\/]/).pop();
            if (!lastnumber.includes('.')) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else if (operators.includes(e.target.innerHTML)) {
            if (string != "" && !operators.includes(string.slice(-1))) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else {
            const value = e.target.innerHTML;
            if (!isNaN(value)) {
                const lastNumber = string.split(/[\+\-\*\/]/).pop();
                if (lastNumber === '0') {
                    string = string.slice(0, -1);
                }
            }
            string += value;
            input.value = string;
        }
    })
})