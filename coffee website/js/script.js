// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//   searchForm.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// let searchForm = document.querySelector(".search-form");

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
//   navbar.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// let cartItem = document.querySelector(".cart-items-container");

// document.querySelector("#cart-btn").onclick = () => {
//   cartItem.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// console.log("im here");
// fetch("https://api.jsonbin.io/v3/b/6309cb14e13e6063dc8e079d")
//   .then((res) => res.json())
//   .then((data) => console.log(data.record.coffee));

// console.log("end");

// const api_url = "https://api.jsonbin.io/v3/b/6309cb14e13e6063dc8e079d";

// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   console.log(data);
//   if (response) {
//     hideloader();
//   }

//   show(data.record.coffee);
// }

// getapi(api_url);

// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }

// function show(data) {
//   // Loop to access all rows
//   for (let r of data) {
// <div class="box">
//   <img src={r.data.img} alt="" />
//   <h3>{r.data.name}</h3>
//   <div class="price">{r.data.price}</div>
//   <a href="#" class="btn">
//     add to cart
//   </a>
// </div>;
//   }
//   // Setting innerHTML as tab variable
//   document.getElementById("coffeeMenu").innerHTML = tab;
// }
// // Calling that async function
// console.log(api_url)

export function getPosts(url, callMeBack) {

  fetch(url)
    .then((response) => response.json())
    .then((data) =>
    {
      let posts = [];
      data.record.coffe.forEach((post) => {
        posts.push(new Post(post.name, post.price, post.img));
      });
      callMeBack(posts);
    })
    .catch("error");

}

export class Post {
  constructor(_name, _price, _img) {
    this.name = _name;
    this.price = _price;
    this.img = _img;
  }
  Create() {
    return `
    <div class="box">
    <img src=${this.img} alt="" />
    <h3>${this.name}</h3>
    <div class="price">${this.price}</div>
    <a href="#" class="btn">
      add to cart
    </a>
  </div>`;
  }
}
