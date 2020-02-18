// const DINNER_MAP = new Map();
// DINNER_MAP.set('Monday','Eat and fish');
// DINNER_MAP.set('Tuesday','Eat and Egg');
// DINNER_MAP.set('Wednesday','Eat and Treykhor');
// DINNER_MAP.set('Thursday and Meat');
// DINNER_MAP.set('Friday','Eat and Vegetable');
// DINNER_MAP.set('Saturday','Eat and Salt');
// DINNER_MAP.set('Sunday','Eat and Chicken')
// DINNER_MAP.forEach((value,key) => {
//    var result =  document.querySelector("table");
//    result.innerHTML +=`
//      <tr>
//         <td>${key}</td>
//         <td>${value}</td>
//      </tr>
//    `;
// });

const STUDENT_MAP  = new Map();
STUDENT_MAP.set(123,{"name": "Romdul","age" : 18, "province" : "pursat"}) ;
STUDENT_MAP.set(124,{"name": "Bopha","age" : 19, "province" : "Siem Reap"}) ;
STUDENT_MAP.set(125,{"name": "SREYNET.HAK","age" : 20, "province" : "Kom pong cham"}) ;
STUDENT_MAP.set(126,{"name": "Chompa","age" : 19, "province" : "pursat"}) ;
STUDENT_MAP.set(127,{"name": "Kolab","age" : 25, "province" : "Pailin"}) ;

STUDENT_MAP.forEach((value, key) =>{
       var result = document.querySelector('table');
       result.innerHTML+=`
         <tr>
          <td>${key}</td>
          <td>${value['name']}</td>
          <td>${value['age']}</td>
          <td>${value['province']}</td>
         </tr>
       `;
});