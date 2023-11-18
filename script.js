const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i in data){
        if(data[i].profession=="developer"){
            console.log(data[i].name);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let newName = prompt("Enter the name:");
    let numbers = prompt("Enter the age:");
    let newProfession = prompt("Enter the profession:");

    let newObj = {name : newName, age: numbers, profession: newProfession};
    data.push(newObj);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i in data){
        if(data[i].profession=="admin"){
            let indextodelete = i;
            data.splice(indextodelete,1);
        }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  function averageAge() {
    let totalage = 0;
    for(let i in data){
        totalage += data[i].age;
    }
    let avgAge = parseInt(totalage/data.length)
    console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() { for(let i in data){
    if(data[i].age > 25){
        console.log(data[i].name,data[i].age);
    }
}
}
  
  // 7. Unique Professions
  function uniqueProfessions() {
    for(let i in data){
        if(data[i].profession != "developer" && data[i].profession != "admin"){
            console.log(data[i]);
        }
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(function(a,b){
       return a.value - b.value;
    })
    for(let i in data){
        console.log(data[i]);
    }
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i in data){
        if(data[i].name == "john"){
            data[i].profession = "Manager";
        }
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devect = 0;
    let adminct = 0;
    for(let i in data){
        if(data[i].profession == "developer"){
            devect++;
        }
        if(data[i].profession == "admin"){
            adminct++;
        }
    }
    console.log("Total no. of developers: ",devect);
    console.log("Total no. of admins: ",adminct);
}