import{Controller}from"@hotwired/stimulus";export default class extends Controller{connect(){const e=document.querySelectorAll(".hidden");function l(l){let t=e[l].closest(".card").querySelectorAll(".placeholder");for(let e=0;e<t.length;e++)t[e].classList.remove("placeholder");e[l].classList.remove("hidden")}for(let t=0;t<e.length;t++)e[t].querySelector("img").addEventListener("load",(()=>l(t))),e[t].querySelector("img").complete&&l(t)}}