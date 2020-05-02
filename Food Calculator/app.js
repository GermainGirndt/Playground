



function sanitizeInput(input){
  input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return input
}



function calc() {
 
let adultsNumber = sanitizeInput(document.getElementById("adults").value);
let adultsAperitive = sanitizeInput(document.getElementById("adultsAperitive").value);
let adultsJuice = sanitizeInput(document.getElementById("adultsJuice").value);
let adultsMainDish = sanitizeInput(document.getElementById("adultsMainDish").value);
let adultsBeverages = sanitizeInput(document.getElementById("adultsBeverages").value);
let adultsDessert = sanitizeInput(document.getElementById("adultsDessert").value);

  

let kidsNumber = sanitizeInput(document.getElementById("kids").value);
let kidsAperitive = sanitizeInput(document.getElementById("kidsAperitive").value);
let kidsJuice = sanitizeInput(document.getElementById("kidsJuice").value);
let kidsMainDish = sanitizeInput(document.getElementById("kidsMainDish").value);
let kidsBeverages = sanitizeInput(document.getElementById("kidsBeverages").value);
let kidsDessert = sanitizeInput(document.getElementById("kidsDessert").value);


let consumedAperitive = adultsNumber * adultsAperitive + kidsNumber * kidsAperitive;
let consumedJuice = adultsNumber * adultsJuice + kidsNumber * kidsJuice;
let consumedMainDish = adultsNumber * adultsMainDish + kidsNumber * kidsMainDish;
let consumedBeverages = adultsNumber * adultsBeverages + kidsNumber * kidsBeverages;
let consumedDessert = adultsNumber * adultsDessert + kidsNumber * kidsDessert;


  answer.innerHTML = `<p>Consumed Aperitive: ${consumedAperitive/1000} Kg</>`
  answer.innerHTML += `<p>Consumed Juice: ${consumedJuice/1000} L</>`
  answer.innerHTML += `<p>Consumed Main Dish: ${consumedMainDish/1000} Kg</>`
  answer.innerHTML += `<p>Consumed Beverages: ${consumedBeverages/1000} L</>`
  answer.innerHTML += `<p>Consumed Dessert: ${consumedDessert/1000} Kg</>`
}
