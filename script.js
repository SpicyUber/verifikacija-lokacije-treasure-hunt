

const x = document.getElementById("error1");
const y = document.getElementById("error2");
const teamName = () => {return document.getElementById("input").value;}
const earthRadiusInMeters =6371000;
const location1 = {latitude:0,longitude:0}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function calculateDistance(){
    
    y.className = "";
    y.innerHTML = "";
 location2 = goalLocation(teamName());
 if(location1.latitude==0 && location1.longitude==0 ){x.innerHTML = "Neuspeh pri dobijanju lokacije."; return;}
 if(location2==null){x.innerHTML = "Nepoznato ime tima."; return;}
  /*  a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)

c = 2 * atan2( √a, √(1−a) )

d = R * c*/

let a = Math.pow(Math.sin(toRadians((location1.latitude-location2.latitude)/2)),2) + Math.cos(toRadians(location1.latitude))* Math.cos(toRadians(location2.latitude))* Math.pow(Math.sin(toRadians((location1.longitude-location2.longitude)/2)),2);
let c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
let d = earthRadiusInMeters*c;

revealSecret(d);
  }
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  function goalLocation(teamName){
console.log(teamName);
teamName = teamName.toLowerCase();
x.innerHTML = "Početna lokacija: ";
    switch(teamName){
        case "tim1" :
            x.innerHTML += "Fotokopirnica Wolf."
            return {latitude:44.80782068886259,  longitude:20.479617123018453} ;
        
        case "tim2" :
             x.innerHTML += "OS STARINA NOVAK."
           return{latitude:44.80961508840723 , longitude: 20.478067274595354} ;
           case "tim3" :
            x.innerHTML += "Crkva Svetog Marka."
          return{latitude:44.81045976044413, longitude: 20.468891847492763 } ;
           
            default:
                return null;
    }

  }

function getLocation() {

  

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
     
    } else {
      x.innerHTML = "Pretraživač ne podržava geolokaciju";
    }
  }
  function updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, updateError, options);
     
    }
   
  }
  function error(err){
x.innerHTML = "Greška prilikom sakupljanja podataka."
  }
  function updateError(err){
   
      }

      function revealSecret(d){

        if(d<101){
          
          y.innerHTML = "Dobrodošli! Prvi trag: ";}
          else{
          
          y.innerHTML = "Tim je predaleko. Distanca: "+ Math.floor(d) +" m." ;}
      }
  function success(pos){
    const coords = pos.coords;
    
    location1.latitude = coords.latitude;
    location1.longitude = coords.longitude;
    x.innerHTML="";
  }