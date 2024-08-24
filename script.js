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

// var name = "everest";
// var height = 8848;
// var output = function () {
//   console.log(`Mt.${this.name} is ${this.height} meters high`);
// };
// var adventureClimbing = { name, height, output };
// adventureClimbing.output();

// var adventureClimbing = {
//   name: "everest",
//   height: 8848,
//   output() {
//     console.log(`Mt.${this.name} is ${this.height} meters high`);
//   },
// };
// adventureClimbing.output();

// spread oprator and rest operators
// var mountain = ["Everest", "Fish Tail", "Annapura"];
// var mountainFromId = ["Krakatau"];

// var allMountains = [...mountain, ...mountainFromId];
// console.log(allMountains);

// var day = {
//   break: "toast with milk",
//   lunck: "rice with chicken curry",
// };

// var night = {
//   dinner: "noodle soup",
// };

// var picnic = { ...day, ...night };
// console.log(picnic);

//rest

// var rivers = ["sunkoshi", "Tamakkho", "Saptakhoshi"];
// var [first, ...rest] = rivers;

// console.log(rivers);
