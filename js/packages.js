let packages = [{ 
      "type": "BASIC",
      "price" : "99",
      "services": "Editing",
      "time" : "24 Hours",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquam."
},

 { 
      "type": "STANDARD",
      "price" : "299",
      "services": "filming",
      "time" : "3-5 Days",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquam."
      
},
{ 
      "type": "PRO",
      "price" : "499",
      "services": "Editing and Filming",
      "time" : "8 Days",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquam."
}]

let type1 = packages[0].type; 
document.getElementById("type1").innerHTML = type1 
let price1 = packages[0].price;
console.log(price1)
document.getElementById("price1").innerHTML = price1






