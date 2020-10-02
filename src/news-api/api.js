const list = document.querySelector(".list");
const apiKey = "092c36d1adae46b1881379f7c967c2e8";
const mainUrl = "https://newsapi.org";
const backV = "v2";
const endpoint = "everything";
const endpoint1 = "top-headlines";
const endpoint2 = "sources";
const query = "bitcoin";
const query1 = "italy";
const query2 = "moon";
const options = {
  // method: "GET", //"POST", "PUT", "PATCH" "DELETE"
  headers: {
    // МЕТОДЫ __________ все ключи прописывать тут
    // "X-Api-Key": apiKey,
    Authorization: apiKey,
  },
  // body:{
  //   //ТЕЛО
  // }
};
const url = `${mainUrl}/${backV}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url1 = `${mainUrl}/${backV}/${endpoint1}?q=${query1}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url2 = `${mainUrl}/${backV}/${endpoint2}?q=${query2}&from=2020-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
const url3 = `${mainUrl}/${backV}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt`;

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// fetch(url1)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// fetch(url2)
//   .then((res) => res.json())
//   .then((data) => console.log(data));
fetch(url3, options)
  .then((res) => res.json())
  .then((data) => data.articles)
  .then((articles) => createItem(articles));

function createItem(data) {
  data.map(obj => {
    const title = document.createElement("h2");
    title.textContent = obj.title;
    const link = document.createElement("a");
    link.setAttribute("href", obj.url);
    link.append(title)

    const content = document.createElement('p');
    content.textContent = obj.content
    const author = document.createElement("p");
    author.textContent = obj.author;
    const published = document.createElement("p");
    published.textContent = obj.published;
    const source = document.createElement("p");
    source.textContent = obj.source.name;
    published.textContent = obj.published;
    const item = document.createElement("li");
    item.append(link, content, author, published, source);
    list.append(item);
  })
}

//   <li>
//     <a href="">
//       <h2></h2>
//     </a>
//     <p>content</p>
//     <p>author</p>
//     <p>publishedAt</p>
//     <p>source.name</p>
//   </li>
