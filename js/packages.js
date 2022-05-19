let packages = [{ 
      "type": "BASIC",
      "price" : "99USD",
      "services": "Editing",
      "time" : "24 Hours",
      "description": "We will edit the footage that you have given to us! For a small fee."
},

 { 
      "type": "STANDARD",
      "price" : "299USD",
      "services": "Filming",
      "time" : "3-5 Days",
      "description": "We will film professional grade footage for you. "
      
},
{ 
      "type": "PRO",
      "price" : "499USD",
      "services": "Editing & Filming",
      "time" : "8 Days",
      "description": "Combo of film and editing to bring you pro grade video."
}]


document.getElementById("type1").innerHTML =  packages[0].type; 
document.getElementById("price1").innerHTML = packages[0].price;
document.getElementById("service1").innerHTML = packages[0].services;
document.getElementById("time1").innerHTML = packages[0].time;
document.getElementById("description1").innerHTML = 'Description: ' + packages[0].description;


document.getElementById("type2").innerHTML =  packages[1].type; 
document.getElementById("price2").innerHTML = packages[1].price;
document.getElementById("service2").innerHTML = packages[1].services;
document.getElementById("time2").innerHTML = packages[1].time;
document.getElementById("description2").innerHTML = 'Description: ' +  packages[1].description;

document.getElementById("type3").innerHTML =  packages[2].type; 
document.getElementById("price3").innerHTML = packages[2].price;
document.getElementById("service3").innerHTML = packages[2].services;
document.getElementById("time3").innerHTML = packages[2].time;
document.getElementById("description3").innerHTML = 'Description: ' + packages[2].description;








