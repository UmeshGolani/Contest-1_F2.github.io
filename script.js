/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(a =>{
    if(a.marks > 50) 
    console.log(a);
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(a =>{
    if(a.marks > 50) {
    console.log(a);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newArr = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newArr);
  console.log(arr);
}



function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(a => a.marks < 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 1, name: "UG", age: "320", marks: 51 },
    { id: 2, name: "IK", age: "500", marks: 52 },
    { id: 3, name: "DC", age: "1100", marks: 53 },
  ];
  arr = arr.concat(arr1);
  console.log(arr);

}
