/* challenge 1
let count = 0
let inc = document.getElementById("increment-nb")
function increment(){
  count +=1
  inc.innerText =count
}
let message = document.getElementById("historique")
function save(){
  console.log(count)
  message.textContent +=  count + " - "
  count = 0
}*/
/* challenge 2
let num1 = 8
let num2 = 3
document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2
sum=document.getElementById("sum-el")
  function Add() {
  let resultat = num1+num2
  sum.textContent = "Sum: " + resultat
   
}
  function Substract() {
  let resultat = num1-num2
  sum.textContent = "Sum: " + resultat
}
  function Divide() {
  if (num2 != 0) { 
    let resultat = Math.round((num1 / num2)*100)/100
 
    sum.textContent= "Sum: " + resultat }
}
  function Multiply() {
  let resultat=num1 * num2 
  sum.textContent= "Sum: " + resultat  
}*/
/* challenge 3
let sum = 0
let card1 = false
let card2 = false
function b1 ( ){
  if( card1 == false ) {
    let firstCard = Math.floor(Math.random() * (13) + 1)
    console.log(firstCard)
    sum += firstCard
    console.log("sum=" + sum)
    card1= true
    cardEl.textContent = "Cards : " + firstCard + " + " 
  }
  else
  console.log("You've already draw the card 1")
}
function b2 ( ){
  if (card1 == true) {
    if( card2 == false ) {
      let secondCard = Math.floor(Math.random() * (13) )
      console.log(secondCard)
      sum += secondCard 
      console.log("Sum =" + sum)
      card2= true
      cardEl.textContent += secondCard
      renderGame ()
    }
    else {
      console.log("You've already draw the card 2")
    }
  }
  else
  console.log("draw the first card first")

}

let isAlive = true
let hasBlackjack = false 
let res =""
let cardEl = document.querySelector("#cards")
function newGame() {

  card1 = false
  card2 = false  
  cardEl.textContent = "Cards : "
  sum=0
  document.getElementById("somme").textContent = "Sum :" + sum
  person.message()
}

let person = {
  name: "aziz",
  credit: 100,
  modifyCredit ( operation) {
    if (operation === "+"){
      this.credit += 100
    }
    else if (operation === "-"){
      this.credit -= 50
    }
  },
  message () {
    document.getElementById("person").textContent = this.name + " : $" + this.credit ;
  }
}

 

function renderGame () {
  if (sum>21) {
    res= "You're out of the game" 
    isAlive = false
    person.modifyCredit("-")
    person.message()  
  }
  else if (sum === 21) {
    res= "yess! You've goat a blackjack"
    hasBlackjack = true 
    person.modifyCredit("+")
    person.message()  
  }
  else  {
    res= "do you want to draw a new card"
  }
  document.getElementById("somme").textContent = "Sum :" + sum
  document.getElementById("question").textContent = res

}*/


let myLeads = []
let inputEl = document.getElementById("input-el")
const btnSaveInput = document.getElementById("btn-saveInput")
const btnDelete = document.getElementById("btn-delete")
const btnSaveTab = document.getElementById("btn-saveTab")
const ulEl = document.getElementById("ul-el")
// localStorage.clear()
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("leads")) 


if ( leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)

}
btnSaveTab.addEventListener("dblclick", function f3(){
  chrome.tabs.query({ active : true , currentWindow : true }, function (tabs) {
    myLeads.push(tabs[0].url)
    console.log(tabs[0].url)
    localStorage.setItem("leads",JSON.stringify(myLeads))
    render(myLeads)
  }   
  )


})

btnDelete.addEventListener("click", function f2(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})

btnSaveInput.addEventListener("click", function f1(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("leads",JSON.stringify(myLeads))
    render(myLeads)

  })



function render(l) {
  let listItems = ""
  for (let i=0; i<myLeads.length ; i++){
    //listItems += "<li> <a href=' "+myLeads[i] +"' target='_blanck'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
    <a href='${l[i]}' target='_blanck' >
    ${l[i]}
    </a>
    </li>
    `
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    /*const elem = document.createElement("li")
    elem.textContent = myLeads[myLeads.length-1] 
    ulEl.append(elem)*/
    
  }
  ulEl.innerHTML = listItems
}


