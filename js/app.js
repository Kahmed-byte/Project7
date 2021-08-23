const dropD = document.querySelector('.logo');
const dd    = document.querySelector('.dropdown-content');
let bjelle = document.querySelector('.logo');
const ex = document.querySelector('.ex');

dropD.addEventListener('click',  function() {

        dd.style.display='block';
        bjelle.style.display='none';
});

window.addEventListener('mouseup', function(e){
    let dn = document.querySelector('.dropdown-content'); 
    let dot = document.querySelector('.dot');
    
    if (e.target != dn) {
        dn.style.display='none';
        bjelle.style.display='block';
        dot.style.display="none";

    }
});

ex.addEventListener('click', (e)=> {
    let alert = document.querySelector('.alert');
    let xbutton = e.target;
    alert.style.display="none";
})

  const user = document.getElementById("userField");
  const message = document.getElementById("messageField");
  const send = document.getElementById("send");
  
  send.addEventListener('click', () => {
  
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

    