import{Controller}from"@hotwired/stimulus";export default class extends Controller{connect(){const e=document.querySelectorAll(".hidden");for(let l=0;l<e.length;l++)if(e[l].querySelector("img").onload=function(){let o=e[l].querySelector("img").closest(".card").querySelectorAll(".placeholder");for(let e=0;e<o.length;e++)o[e].classList.remove("placeholder");e[l].classList.remove("hidden")},e[l].querySelector("img").complete){let o=e[l].querySelector("img").closest(".card").querySelectorAll(".placeholder");for(let e=0;e<o.length;e++)o[e].classList.remove("placeholder");e[l].classList.remove("hidden")}}}