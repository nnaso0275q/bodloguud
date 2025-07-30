// Bodlogo #1
// nasand hursen suragchiig filterlej oloh function bich

let data = [
  {
    name: "zulaa",
    age: 18,
    grade: 11,
    gender: "female",
    balance: 10,
  },

  {
    name: "bilguunee",
    age: 19,
    grade: 11,
    gender: "male",
    balance: 20,
  },

  {
    name: "haliunaa",
    age: 14,
    grade: 11,
    gender: "female",
    balance: 30,
  },

  {
    name: "nandia",
    age: 17,
    grade: 11,
    gender: "male",
    balance: 40,
  },

  {
    name: "deegii",
    age: 16,
    grade: 11,
    gender: "female",
    balance: 50,
  },
];
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age > 17;
  });
  return filtered;
}

let result = findAdultStudents(data);
console.log("bodlogo1 = ", result);

// Bodlogo #2
// gender ogonguut tuhain gendereer filterlej ogoh function bich
// eg: filterByGender(students,"male") => zovhon erchuudiig yalgaj ogno

function filterByGender(students) {
  let filtered = students.filter((student) => {
    return student.gender === "male";
  });
  return filtered;
}
let eregtei = filterByGender(data);
console.log("bodlogo2 = ", eregtei);

// Bodlogo #3
// nasaar n sortloh function bich
function findBySort(students) {
  let filtered = students.sort((a, b) => {
    return a.age - b.age;
  });
  return filtered;
}
let erembelelt = findBySort(data);
console.log("bodlogo3 = ", erembelelt);

// Bodlogo #4
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich

function findByBalance(students) {
  let filtered = students.filter((student, balan) => {
    return student.balance > balan;
  });
  return filtered;
}
let bln = findByBalance(data, 40);
console.log("bodlogo4 = ", bln);

// bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
// bodlogo #6
// removeGenders from student array function bich

// git add .
// git commit -m"nerle"
// git push
//
