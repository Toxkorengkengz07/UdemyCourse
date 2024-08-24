// if (true) {
//   let name = "Vito Korengkeng";
//   name = "Julio";
//   alert(name);
// }

// let fname = "Vito";
// let lname = "Korengkeng";
// let age = prompt("Gues Vito age..");

//old way
// let result = fname + " " + lname + "is" + age + "years old";
// alert(result);

//using template stsring
// let result = `${fname} ${lname} is ${age} years old`;
// alert(result);

// //using function
// function welcome(user, message) {
//   alert(`Hello ${user}, ${message}`);
// }
// welcome("Vito", "Welcome to my page"); //mengisi para didalama variabel parameter

// function welcome(user = "vito", message = "whatsapppmen") {
//   // langsung mengisi dalam param
//   alert(`Hello ${user}, ${message}`);
// }
// welcome();
// // let user = "Vito";
// // let message = "Welcome to my page";
// // alert(`Hello ${user}, ${message}`);

// arrow function
// function gretting(message) {
//   return alert(`${message} everyone`);
// }

// let gretting = (message) => alert(`${message} everyone`);
// gretting("Good morning");

// let createBlog = () => (title, body) => {
//   if (!title) {
//     throw new error("A title is required");
//   }
//   if (!body) {
//     throw new error("Body cant be empty");
//   }
//   return alert(`${title} - ${body}`);
// };
// createBlog()("Blog Title", "Blog Body");

//arrow funtion with this
// function sayHi() {}
// console.log(this);
// let sulawesi_utara = {
//   // add property
//   mountain: ["Klabat", "Lokon", "Soputan"],
//   // add method
//   printWithDash: function () {
//     console.log("inside printWithDash", this);
//     setTimeout(function () {
//       console.log("inside setTimeOut", this);
//       //   console.log(this.mountain.join("-"));
//     }, 3000);
//   },
// };

// // alert(sulawesi_utara.mountain);
// sulawesi_utara.printWithDash();

// destructuring object
// let thingsToDo = {
//   morning: "Exercise",
//   afternoon: "work",
//   evening: "Code",
//   night: ["Sleep", "Dream"],
// };

// let { morning, afternoon } = thingsToDo;

// morning = "Run";
// console.log(morning, "-", afternoon);

// let uniStudent = ({ name, university }) => {
//   //   let { name, university } = student;
//   console.log(`${name} from ${university}`);
// };

// uniStudent({
//   name: "Vito",
//   university: "UNKLAB of north sulawesi ",
// });

// destructuring array

// let [firstMountain] = ["Everest", "Fish Tail", "Annapurna"];
// console.log(firstMountain);
