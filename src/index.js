import css from "./css/style.css";
import fetch from "./fetch.js"
import api from "./news-api/api.js"

// GET/ POST/PUT/PACH/DELETE - методы запроса!!!!
// =====================================================

//posts comments album photoes todous users
// const name = "users";
// const url = `https://jsonplaceholder.typicode.com/${name}`;
// const myComment = {
//   body: "Lorem ipsum dolor amet...",
//   email: "kichuk.igor.228@gmail.com",
//   name: "Igor",
//   post: "501",
// };
// const user = {
//   name: "Igor",
//   age: "39"
// }

// function setRequest(method, reqUrl, body = null) {
//   return new Promise((res, rej) => {
//     const xmlRec = new XMLHttpRequest();
//     console.log(xmlRec);
//     xmlRec.open(method, reqUrl);

//     xmlRec.responseType = "json";

//     xmlRec.onload = () => {
//       // console.log(JSON.parse(xmlRec.response));
//       if (xmlRec.status >= 400) {
//         rej(xmlRec.response);
//       } else {
//         res(xmlRec.response);
//       }
//     };
//     xmlRec.onerror = () => {
//       rej(xmlRec.response);
//     };

//     xmlRec.send(JSON.stringify(body));
//   });
// }

//  setRequest("GET")
// setRequest("POST", url, myComment);
// setRequest("POST", url, user);


