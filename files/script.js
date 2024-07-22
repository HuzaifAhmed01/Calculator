let string = '';
let allbtns = document.querySelectorAll('.btns');

let history = [];




Array.from(allbtns).forEach((button) => {

    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            string = eval(string);
            history.push(string);
            // console.log(history)


            document.getElementById('NumberHead').value = string;

        }

        else if (e.target.innerHTML == 'Hist') {
            document.getElementById('NumberHead').value = history;
            console.log(history)
 }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.getElementById('NumberHead').value = string;

}
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            document.getElementById('NumberHead').value = string;

        }


        else {

            string = string + e.target.innerHTML;
            document.getElementById('NumberHead').value = string;

            console.log(e.target)

        }
    })

})