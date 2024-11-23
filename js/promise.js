// Promise
   function saveDataBase(data){
   return new Promise((resolve , reject) =>{
       let interSpeed = Math.floor(Math.random()*10 + 1);
       if(interSpeed >= 5)
        resolve('Success : Promise is fulfilled !');
       else
       reject('Failed : Promise is rejected !');
   })
}
saveDataBase("BGMI")
.then((res) =>{
    console.log(res , "Success 1 : Promise is fulfilled !");
    return saveDataBase("PUBG")
})
.then((res) =>{
    console.log(res , "Success 2 : Promise is fulfilled !");
    return saveDataBase("Clash of Clan");
})
.then((res) =>{
    console.log(res, "Success 3 : Promise is fulfilled !");
    return saveDataBase("WWE Mayhem");
})
.catch((err) =>{
  throw "Error Occurred !";
})
let element = document.createElement("h4");
document.body.appendChild(element);

// Axios & API Fetching
let url = 'https://catfact.ninja/fact';
async function getCatFact(){
    try{
        let res = await axios.get(url)
        element.innerHTML = (res.data.fact);
        element.style.color='#a113a1';
        element.style.fontSize='19px';
    }
    catch (err){
        console.log(err,"Error Occurred !");
    }
}
let fact = document.getElementById('getFact');
fact.addEventListener('click' , getCatFact);