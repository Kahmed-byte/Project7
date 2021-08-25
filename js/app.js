const dropD = document.querySelector('.logo');
const dd    = document.querySelector('.dropdown-content');
let bjelle = document.querySelector('.logo');
const ex = document.querySelector('.ex');
let dot = document.querySelector('.dot');
let alert = document.querySelector('.alert');
let swtch = document.querySelector('.switch-input');
let timezone = document.querySelector('#timezone');
let save = document.querySelector('#save');
let cancel = document.querySelector('#cancel');



dropD.addEventListener('click',  function() {
        dd.style.display='block';
        bjelle.style.display='none';
});

window.addEventListener('mouseup', function(e){
    let dn = document.querySelector('.dropdown-content'); 
    
    if (e.target != dn && dn.style.display=='block') {
        dn.style.display='none';
        bjelle.style.display='block';
        dot.style.display="none";
        alert.style.display="none";
    }
});

ex.addEventListener('click', (e)=> {
    let xbutton = e.target;
    alert.style.display="none";
    dot.style.display="none";
})

  const user = document.getElementById("userField");
  const message = document.getElementById("messageField");
  const send = document.getElementById("send");
  
  send.addEventListener('click', () => {
  
  if (user.value === "" && message.value === "") {
    window.alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        window.alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        window.alert("Please fill out message field before sending");
    } else {
        window.alert(`Message successfully sent to: ${user.value}`);
    }
    });

    save.addEventListener('click', function() {
        localStorage.setItem('savedToggle', JSON.stringify(swtch));
        localStorage.setItem('savedTimezone', JSON.stringify(timezone));
    })

    cancel.addEventListener('click', function() {
        window.localStorage.clear();
    })