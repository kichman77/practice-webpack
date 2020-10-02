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
//   age: "39",
// };

// function setRequest(method, reqUrl, headers = null, body = null) {
//   const options = {
//     method: method,
//     headers: headers,
//     body: body,
//   };
//   return fetch(reqUrl, options);
// }

// //setRequest("GET");
// setRequest("POST", url, myComment)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch(err=>console.log(err))

// setRequest("POST", url, user)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))
