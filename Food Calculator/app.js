






function calc() {
 
let adultsNumber = document.getElementById("adults").value;
let adultsAperitive = document.getElementById("adultsAperitive").value;
let adultsJuice = document.getElementById("adultsJuice").value;
let adultsMainDish = document.getElementById("adultsMainDish").value;
let adultsBeverages = document.getElementById("adultsBeverages").value ;
let adultsDessert = document.getElementById("adultsDessert").value;

  

let kidsNumber = document.getElementById("kids").value;
let kidsAperitive = document.getElementById("kidsAperitive").value;
let kidsJuice = document.getElementById("kidsJuice").value;
let kidsMainDish = document.getElementById("kidsMainDish").value;
let kidsBeverages = document.getElementById("kidsBeverages").value;
let kidsDessert = document.getElementById("kidsDessert").value;


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
