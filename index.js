import{a as b,S as L,i as p}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const w="https://pixabay.com/api/",S="18705792-aeb149c2876d2324648601ab5";async function u(t,s=1,r=40){const o={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r};return(await b.get(w,{params:o})).data}const f=document.querySelector(".gallery"),E=new L(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animationSlide:!0,fadeSpeed:250,docClose:!0,disableRightClick:!1});function m(t){const s=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:a,views:n,comments:h,downloads:v})=>`
      <a href="${o}" class="gallery-item">
        <img src="${r}" alt="${e}" loading="lazy" />
        <div class="gallery-info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${a}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${n}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${h}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${v}</span>
          </div>
        </div>
      </a>
    `).join("");f.insertAdjacentHTML("beforeend",s),E.refresh()}function P(){f.innerHTML=""}function q(){const t=document.querySelector(".loader-wrapper");t&&t.classList.add("visible")}function d(){const t=document.querySelector(".loader-wrapper");t&&t.classList.remove("visible")}const g=document.getElementById("search-form"),$=g.elements["search-text"];let c="",l=1,y=0,i=!1;g.addEventListener("submit",async t=>{t.preventDefault();const s=$.value.trim();if(!s){p.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}c=s,l=1,P(),q(),i=!0;try{const r=await u(c,l);if(d(),i=!1,y=r.totalHits,r.hits.length===0){p.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(r.hits)}catch(r){d(),i=!1,console.error("Error fetching images:",r),p.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}});window.addEventListener("scroll",async()=>{const{scrollTop:t,scrollHeight:s,clientHeight:r}=document.documentElement;if(t+r>=s-200){if(i||!c||l*40>=y)return;i=!0,l++;try{const o=await u(c,l);m(o.hits)}catch(o){console.error("Error fetching more images:",o)}finally{i=!1}}});
//# sourceMappingURL=index.js.map
