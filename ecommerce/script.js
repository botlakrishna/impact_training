let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let images = [
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2688/cms/5GfEJWbYnUnFPfqsT40iB1/9ed0c90e068fd99e56229784ce6cf195/24Q4_LastMinuteGift_Site_HomepageHero_TRGO_Desktop_2880x1245.jpg",
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2688/cms/4UKOsHGiVmivJ03AYqLTRB/c69d35e8c2ac02c21e5db2d51e48929e/24Q4_LastMinuteGift_Site_HomepageHero_Gifts_Desktop_2880x1245.jpg",
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

setInterval(() => {
  next();
}, 5000);


let currentIndex = 0;
const sections = document.querySelectorAll(".section6");
const totalSections = sections.length;
const carousel = document.querySelector(".carousel");

function scrollNext() {
  currentIndex = (currentIndex + 1) % totalSections;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(scrollNext, 5000);

