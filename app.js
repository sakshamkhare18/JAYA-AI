// elements

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
const time = document.querySelector("#time");

// friday setup
 let fridayComs =[]
 fridayComs.push("hi jaya");
 fridayComs.push("what are your commands");
 fridayComs.push("close this-to close opend popups");
 fridayComs.push("change my information-information regarding your accounts and you");
 fridayComs.push("whats the weather or temperature");
 fridayComs.push("show the full weather report");
 fridayComs.push("are you there -to check jaya presence");
 fridayComs.push("shut down -stop voice recognition");
 fridayComs.push("open google");
 fridayComs.push("serch for");
 fridayComs.push("open whatsapp");
 fridayComs.push("open youtube");
 fridayComs.push("play-to search youtube");
 fridayComs.push("close the youtube tab");
 fridayComs.push("open firebase");
 fridayComs.push("open netlify");
 fridayComs.push("open twitter");
 fridayComs.push("open my twitter profile");
 fridayComs.push("open instagram");
 fridayComs.push("open my instagram profile");
 fridayComs.push("open github");
 fridayComs.push("open my github");
// weather setup


function weather(location) {
const Weathercont=document.querySelector(".temp").querySelectorAll("*");

  let loc = location;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=48ddfe8c9cf29f95b7d0e54d6e171008`;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function () {
      if (this.status === 200) {
          let data = JSON.parse(this.responseText);

           Weathercont[0].textContent = `Location : ${data.name}`;
          Weathercont[1].textContent = `Country : ${data.sys.country}`;
          Weathercont[2].textContent = `Timezone : ${data.timezone}`;
         Weathercont[3].textContent = `Weather type : ${data.weather[0].main}`;
          Weathercont[4].textContent = `Weather description : ${data.weather[0].description}`;
           Weathercont.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          Weathercont[5].textContent = `Original Temperature : ${ktc(data.main.temp)}`;
          Weathercont[6].textContent = `But it feels like ${ktc(data.main.feels_like)}`;
          Weathercont[7].textContent = `Min temperature ${ktc(data.main.temp_min)}`;
          Weathercont[8].textContent = `Max temperature ${ktc(data.main.temp_max)}`;
          weatherStatemnt= `sir weather is in ${data.name} is ${
            data.weather[0].description}
            and the temperature feels like ${ktc(data.main.feels_like)}`;}

          
    


          else {
          Weathercont[0].textContent="weather info not found";
      }
  }

  xhr.send();
}


function ktc(k) {
  k = (k - 273.15);
  return k.toFixed(2);

}
// time setup

let date = new Date()
  let hrs = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()
  time.textContent=`${hrs}: ${mins}: ${secs}`


// on startup

// onlode windows
window.onload =()=>{
 
setInterval(()=>{
  let date = new Date()
  let hrs = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()
 time.textContent=`${hrs}: ${mins}: ${secs}`
  
 
},1000);
}

// jarvis setup
if (localStorage.getItem("jarvis_setup") !== null ) {
  // weather()
  
}

//jarvis information setup 

const setup= document.querySelector(".jarvis_setup")
setup.style.display= "none"

 if(localStorage.getItem("jarvis_setup") === null){
  // setup.style.display = "flex"
  setup.style.display = "block"
  setup.querySelector("button").addEventListener("click",userinfo)

 }

//  user info func
function userinfo(){
  let setupinfo={
    name : setup.querySelectorAll("input")[0].value,
    bio : setup.querySelectorAll("input")[1].value,
    location : setup.querySelectorAll("input")[2].value,
    instagram : setup.querySelectorAll("input")[3].value,
     github: setup.querySelectorAll("input")[4].value,
   twitter : setup.querySelectorAll("input")[5].value,
  }
  let testArr=[]

setup.querySelectorAll("input").forEach((e)=>{
testArr.push(e.value)

})
if(testArr.includes("")){
  readout("sir enter your complete information")
}else{
  localStorage.clear()
  localStorage.setItem("jarvis_setup",JSON.stringify(setupinfo))
  setup.style.display ="none"
  weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
}

}

// Speech Recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const Recognition = new SpeechRecognition();

// sr start
Recognition.onstart = function(){
     
    console.log("vr active");
    readout("jaya was lisning");
}
// sr resultsif
Recognition.onresult = function(event){

   let current = event.resultIndex;
   let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    let userdata =localStorage.getItem("jarvis_setup")
    console.log(`my words: ${transcript}`);


if(transcript.includes ("are you understand hindi")){
  readout(" no thats time i am not understand hindi !sorry! .");
}
if(transcript.includes ("male or female ")){
  readout("no i am an ai robot who maks by saksham khare ");
}
if(transcript.includes ("jaya")){
  readout("hello sir what i can halp you.");
}
if(transcript.includes ("jarvis")){
  readout("noooo! i am not jarvis . i am JAYA . please do not take name of jarvis . i hate him .");
}

if(transcript.includes ("your name")){
  readout("my name is jaya , i am an ai robote , thank you");
}
if(transcript.includes ("okay")){
  readout("thank you");
}


if(transcript.includes ("open youtube")){
  readout("opening youtube ");
  window.open("https://www.youtube.com/");
}

if(transcript.includes ("close youtube")){
  readout("closing  youtube ");
  window.open("http://127.0.0.1:5500/index.html");
}

if(transcript.includes (" google")){
  readout("opening google ");
  window.open("https://www.google.com/");
}
if(transcript.includes ("open e")){
  readout("opening elernify ");
  window.open("https://e-lernify.xyz/");
}
if(transcript.includes ("who make")){
  readout(" mister saksham khare build me ");
  
}

if(transcript.includes ("open github")){
  readout("opening github");
  window.open("https://github.com/");
  
}
if(transcript.includes ("open my get hub ")){
  readout("opening  your github profile ");
  window.open(`https://github.com/${JSON.parse(userdata).github}`);
  
}

if(transcript.includes (" open instagram ")){
  readout("opening instagram");
  window.open("https://instagram.com/");
  
}
if(transcript.includes ("open my instagram")){
  readout("opening  your instagram profile ");
  window.open(`https://instagram.com/${JSON.parse(userdata).instagram}`);
  
}
if(transcript.includes ("are you listening me")){
  readout("yaa ! sure");
}

if(transcript.includes ("thank")){
  readout("welcome");
}
if(transcript.includes ("bye")){
  readout("   bye ! bye ! please shutdown me");
}
// open google search
if(transcript.includes ("search ")){
  readout(" here's your results ");
  let input = transcript.split("");
  input.splice(0,6);
  input.pop();
  input = input.join("").split(" ").join("+");
  window.open(`https://www.google.com/search?q=${input}`);
  
  console.log(input);
  
}if(transcript.includes ("down")){
  readout("okk as your wish . jaya was shut down");
    console.log("vr deactive");
  Recognition.stop() ;
}
};

// sr stop
 Recognition.onend = function(){
    // console.log("vr deactive");
  }
 

// continuous
Recognition.continuous = true;

 startBtn.addEventListener ( "click",()=>{

   Recognition.start() ;
 });
 stopBtn.addEventListener ( "click",()=>{

    Recognition.stop() ;
  });
//   JAYA speech
 
function readout(message){
    const speech = new SpeechSynthesisUtterance()
    // different voice
    const allvoices = speechSynthesis.getVoices()
    speech.text = message;
    speech.volume = 1 ;
    speech.voice =allvoices [2]
    window.speechSynthesis.speak(speech)
    console.log('speaking out');
}
// example

  window.onload =function(){
    readout("   ");
  }