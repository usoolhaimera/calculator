let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string =''
buttonsArray.forEach(btn => {
   btn.addEventListener('click',(e) => {
    let ch = e.target.innerHTML;
    if(ch == 'DEL')
    {
        string = string.substring(0, string.length-1);
        display.value= string; 
    }
    else if(ch == 'AC')
    {
        string='';
        display.value= string; 
    } 
    else if(ch == '=')
    {
        string = eval(string);
        display.value=string;
    }
    else
    {
    string += e.target.innerHTML;
      display.value= string;
      console.log(e.target.innerHTML);
    }
   });
});

console.log(buttons);