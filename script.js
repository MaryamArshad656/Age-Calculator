let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function calculateAge() {
  let birthday = input.value;
 
if(birthday === ''){
      alert('Please enter your birthday!')
  }else{
    let age = getAge(birthday)
    result.innerText = `You are ${age} years old`;
    
  }

}
function getAge(birthday) {
 let currentDate = new Date();
 let birthdayDate = new Date(birthday);

 let currentYear = currentDate.getFullYear();
 let birthdayYear = birthdayDate.getFullYear();

 let age = currentYear - birthdayYear;

 let currentMonth = currentDate.getMonth();
 let birthdayMonth = birthdayDate.getMonth();

 let ageMonth = currentMonth - birthdayMonth;

 let currentDay = currentDate.getDate()
 let birthdayDay = birthdayDate.getDate()
 
 if(ageMonth < 0 || ageMonth === 0 && currentDay < birthdayDay){
    age--;
 }

return age;

}

btn.addEventListener('click' , calculateAge)