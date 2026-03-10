import{a as f,S as m,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="18705792-aeb149c2876d2324648601ab5";async function h(a){const s={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(g,{params:s})).data}const c=document.querySelector(".gallery"),v=new m(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animationSlide:!0,fadeSpeed:250,docClose:!0,disableRightClick:!1});function b(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:u})=>`
      <a href="${i}" class="gallery-item">
        <img src="${r}" alt="${e}" loading="lazy" />
        <div class="gallery-info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${t}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${o}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${d}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${u}</span>
          </div>
        </div>
      </a>
    `).join("");c.insertAdjacentHTML("beforeend",s),v.refresh()}function L(){c.innerHTML=""}function S(){const a=document.querySelector(".loader-wrapper");a&&a.classList.add("visible")}function l(){const a=document.querySelector(".loader-wrapper");a&&a.classList.remove("visible")}const p=document.getElementById("search-form"),w=p.elements["search-text"];p.addEventListener("submit",async a=>{a.preventDefault();const s=w.value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),S();try{const r=await h(s);if(l(),r.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}catch(r){l(),console.error("Error fetching images:",r),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
