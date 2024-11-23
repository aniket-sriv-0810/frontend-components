// dom events
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
btn1.addEventListener("click" ,()=>{
    // if prop applied then remove it
    if(btn1.style.backgroundColor === "red"){
    btn1.style.backgroundColor="grey";
    btn1.style.color="black";
    btn1.style.borderRadius="0px";
    btn1.style.padding="2px";
    }
    else{
        btn1.style.backgroundColor="red";
        btn1.style.color="white";
        btn1.style.borderRadius="10px";
        btn1.style.padding="6px";
    }
} );

let key1 = document.getElementById('key1');
let key2 = document.getElementById('key2');

let elem  = document.createElement('h1');
let elem2  = document.createElement('h1');
let elem3  = document.createElement('h1');
document.body.append(elem);
document.body.append(elem2);
document.body.append(elem3);
key1.addEventListener('keyup', ()=>{
   elem.innerHTML = (key1.value);
});

// setTimer
let time1 = document.getElementById('time1');
let time2 = document.getElementById('time2');
let timer;
time1.addEventListener('click' , ()=>{
  setTimeout(()=>{
        elem2.style.display="block";
        elem2.style.color="red";
        elem2.innerHTML = "Hello World using SetTimeout";
    }, 2000)
})
time2.addEventListener('click' , ()=>{
    elem2.style.display="none";
});

// setInterval
let time3 = document.getElementById('time3');
let time4 = document.getElementById('time4');
let inter;

time3.addEventListener('click', ()=>{
    inter = setInterval(()=>{
        let newTime = new Date();
        console.log(newTime.toLocaleTimeString());
        elem3.innerHTML = newTime.toLocaleTimeString();
        elem3.style.color="red";
    }, 1000);
})
time4.addEventListener('click', ()=>{
    clearInterval(inter);
});