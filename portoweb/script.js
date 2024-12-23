let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let images = [
  "https://www.okler.net/previews/porto/9.9.0/img/demos/product-landing/product-carousel-1.jpg",
  "https://www.okler.net/previews/porto/9.9.0/img/demos/product-landing/product-carousel-1-2.jpg",
  "https://www.okler.net/previews/porto/9.9.0/img/demos/product-landing/product-carousel-1-3.jpg",
  "https://www.okler.net/previews/porto/9.9.0/img/demos/product-landing/product-carousel-1-4.jpg"
];

let index = 0;
let last = images.length - 1;
image.setAttribute("src", images[index]);

function next() {
  if (index == last) {
    index = 0;
  } else {
    index = index + 1;
  }
  image.setAttribute("src", images[index]);
}

function previous() {
  if (index == 0) {
    index = last;
  } else {
    index = index - 1;
  }
  image.setAttribute("src", images[index]);
}
left.addEventListener("click", previous);
right.addEventListener("click", next);

//  setInterval(() => {
//   next();
// }, 2000);
// let id = setTimeout (() => {} , 30000);
// clearInterval(id);
