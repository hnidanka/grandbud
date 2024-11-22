(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();async function x(t){try{return await(await fetch(t)).json()}catch(e){return console.error("Error fetching data:",e.message),null}}function q(t){document.querySelectorAll(t).forEach(c=>{c.addEventListener(c.tagName==="SELECT"?"change":"click",i=>{i.preventDefault();const o=c.tagName==="SELECT"?i.target.value:c.getAttribute("data-target");M(o)})})}function M(t){if(t==="pricelist"){window.location.href="pricelist.html";return}const e=document.getElementById(t);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),W())}function W(){const t=document.querySelector("#menuBar-icon"),e=document.querySelector(".logo-container"),c=document.querySelector("nav ul"),i=document.querySelector("nav");t&&e&&i&&(t.classList.remove("full-width"),c.classList.remove("show","column"),e.classList.remove("hide"),i.classList.remove("column"))}function D(t){if(console.log(t),t){const e=document.getElementById(t);console.log(e),e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}function _(t){document.querySelectorAll(t).forEach(c=>{c.addEventListener("click",i=>{i.preventDefault(),window.location.href="/"})})}function A(t,e,c=""){e.innerHTML=`<p>${c}</p>`,c==="Ładowanie"&&(e.innerHTML=`
        <p>${c}</p>
        <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        </div>`),t.classList.remove("hide"),t.classList.add("show","fade"),setTimeout(()=>{t.classList.remove("show","fade"),t.classList.add("hide")},3e3)}function O(){const t=d=>d<=9?`0${d}`:d;function e(d,g){d.forEach(m=>m.classList.remove("active")),d[g].classList.add("active"),console.log(`World ChangeActive ${g}`)}function c(d,g,m,S,H,P){let h=1,E=0,w=0,B=window.getComputedStyle(d).width;g.style.width=`${B.slice(0,B.length-2)*m.length}px`,S.textContent=t(m.length),e(H,0),m.forEach(k=>{E=k.clientWidth}),m[0].classList.add("focused");const $=(k,N)=>{m[N-1].classList.add("focused"),P.textContent=t(N),g.style.transform=`translateX(-${k}px)`};return{nextSlide:()=>(m[h-1].classList.remove("focused"),w>=E*(m.length-1)?(w=0,h=1):(w+=E,h+=1),$(w,h),h-1),prevSlide:()=>(m[h-1].classList.remove("focused"),w===0?(w=E*(m.length-1),h=m.length):(w-=E,h-=1),$(w,h),h-1),navToSlide:k=>(m[h-1].classList.remove("focused"),h=parseInt(k),w=(h-1)*E,$(w,h),h-1)}}async function i(d,g){const S=(await x(g)).works[d-1];S?(L.classList.add("fade"),L.innerHTML=`
                <h2>${S.header}</h2>
                <p>${S.location}</p>
                <p>${S.leadTime}</p>
                <p>${S.scopeOfWork}</p>
            `):L.innerHTML="No description available."}const o=d=>{e(b,d),i(d+1,"data/works.json"),L.classList.remove("fade")},s=document.querySelector(".works-slider-actions"),v=s.querySelector(".current"),p=s.querySelector(".total"),u=document.querySelector(".next-action"),n=document.querySelector(".prev-action"),a=document.querySelector(".works-slider"),r=document.querySelector(".works-slider-inner"),l=document.querySelectorAll(".works-slide"),f=document.querySelector(".slider-nav"),b=f.querySelectorAll(".block"),L=document.querySelector(".work-slide-descr"),y=c(a,r,l,p,b,v);i(1,"data/works.json"),u.addEventListener("click",d=>{d.preventDefault(),o(y.nextSlide())}),n.addEventListener("click",d=>{o(y.prevSlide())}),b.forEach(d=>{d.addEventListener("click",g=>{const m=g.target.getAttribute("data-to-slide");o(y.navToSlide(m))})});let I=0,T=0,C=!1;a.addEventListener("touchstart",d=>{I=d.touches[0].clientX,C=!0}),a.addEventListener("touchmove",d=>{C&&(T=d.touches[0].clientX)}),a.addEventListener("touchend",()=>{if(!C)return;const d=I-T;d>50?o(y.nextSlide()):d<-50&&o(y.prevSlide()),C=!1})}function U(){const t=document.querySelector("#services-list"),e=t.querySelectorAll(".service-block");async function c(){const{services:i}=await x("data/services.json");e.forEach((o,s)=>{o.innerHTML=`
                <h3 class="service-name"> ${i[s].name} </h3>
                <img class="service-icon" src=${i[s].img} alt=${i[s].name}>
                <p class="service-description"> ${i[s].description}</p>
            `})}c()}function X(){const t={loading:"Ładowanie",success:"Skontaktujemy się z tobą jak najszybciej",failure:"Coś poszło nie tak"},e=document.querySelector(".modal"),c=e.querySelector(".modal-content");emailjs.init("1mXxwMPcfi6IffBb9");const i="service_i2jy12d",o="template_wvdsbu8";document.getElementById("contact-form").addEventListener("submit",function(s){s.preventDefault(),A(e,c,t.loading),emailjs.sendForm(i,o,this).then(()=>{A(e,c,t.success),s.target.reset()},v=>{A(e,c,t.failure)})})}function j(){const t=document.querySelector("nav"),e=document.querySelector("#menuBar-icon"),c=document.querySelector(".logo-container"),i=document.querySelector("nav ul");document.querySelector("#services .services-action button"),window.addEventListener("click",u=>{const n=u.target;window.innerWidth<=768&&(e.contains(n)?t.classList.contains("column")?s():o():i.contains(n)?n.tagName==="LI"&&s():s())});function o(){t.classList.add("column"),e.classList.add("hide"),i.classList.add("show"),c.classList.add("hide")}function s(){t.classList.remove("column"),e.classList.remove("hide"),i.classList.remove("show"),c.classList.remove("hide")}services.length>0&&services.forEach(u=>{u.addEventListener("click",n=>{n.preventDefault();const a=u.getAttribute("data-target");a&&(window.location.href=`pricelist.html?service=${encodeURIComponent(a)}`)})});const p=new URLSearchParams(window.location.search).get("section");p&&D(p)}async function R(){async function t(){const u=document.querySelector("#pricelistNav");if(u)try{const n=await fetch("data/pricelist.json");if(!n.ok)throw new Error("Error in try");const{pricelist:a}=await n.json(),r=document.createElement("ul");r.classList.add("categotyList"),a.forEach(l=>{const f=document.createElement("li");f.setAttribute("data-target",`${l.id}`),f.textContent=l.category,f.classList.add("category"),r.appendChild(f)}),u.appendChild(r),q("#pricelistNav li")}catch{console.log("Error")}}t();async function e(){const u=document.querySelector("#pricelistNav-select");if(u)try{const n=await fetch("data/pricelist.json");if(!n.ok)throw new Error("Error in try");const{pricelist:a}=await n.json(),r=document.createElement("select");r.setAttribute("name","categoryList"),r.setAttribute("id","categoryList"),a.forEach(l=>{const f=document.createElement("option");f.setAttribute("value",l.id),f.textContent=l.category,r.appendChild(f)}),u.appendChild(r),q("#pricelistNav-select select")}catch{console.log("Error")}}e();class c{constructor(n,a,r,l){this.id=n,this.name=a,this.price_net=r,this.unit=l}addItem(){const n=document.createElement("tr");return n.innerHTML=`
            <td class="column-category-lp">${this.id}</td>
            <td class="column-category-name">${this.name}</td>
            <td class="column-category-price">${this.price_net}</td>
            <td class="column-category-unit">${this.unit}</td>`,n}}class i{constructor(n,a,r){this.id=n,this.category=a,this.items=r}addCategoryHeader(){const n=document.querySelector("#pricelist"),a=document.createElement("table"),r=document.createElement("thead");r.innerHTML=`<tr>
                <th>Lp.</th>
                <th>${this.category}</th>
                <th>Cena netto (PLN)</th>
                <th>j.m.</th>
            </tr>`,a.appendChild(r),a.setAttribute("id",`${this.id}`);const l=document.createElement("tbody");this.items.forEach(({item_id:f,name:b,price_net:L,unit:y})=>{const I=new c(f,b,L,y);l.appendChild(I.addItem())}),a.appendChild(l),n.appendChild(a)}}const o=await fetch("data/pricelist.json");o.ok?(await o.json()).pricelist.forEach(({id:n,category:a,items:r})=>{new i(n,a,r).addCategoryHeader()}):console.error("Błąd w pobieraniu danych:",o.status),_("header nav ul li");const v=new URLSearchParams(window.location.search).get("service");v&&D(v);const p=document.querySelectorAll("nav ul li");p.length>0&&p.forEach(u=>{u.addEventListener("click",n=>{n.preventDefault();const a=u.getAttribute("data-target");console.log(a),a&&(window.location.href=`./?section=${encodeURIComponent(a)}`)})})}function V(){const t=document.querySelectorAll(".service-block");document.querySelector("#services-list");const e=document.querySelectorAll(".about-us-offer ul li"),c=document.querySelectorAll(".slogan"),i=document.querySelectorAll(".about-us-image-block img"),o=document.querySelector(".home-content .home-descr p"),s=document.querySelector(".home-content .home-action button"),v=r=>{const l=r.getBoundingClientRect();return l.top>=0&&l.bottom<=window.innerHeight},p=(r,l="in-view")=>{r.classList.add(l)},u=(r,l)=>{setTimeout(()=>{p(r),console.log(`Item at index ${l}: ${r.textContent||r.innerText}`)},l*100)},n=r=>{!window.innerWidth<=768?r.forEach((l,f)=>{v(l)&&!l.classList.contains("in-view")&&u(l,f)}):r.forEach(l=>{v(l)&&!l.classList.contains("in-view")&&l.classList.add("in-view")})},a=()=>{window.addEventListener("scroll",()=>{n(t),n(e),n(c),n(i)})};p(o),setTimeout(()=>{p(s)},1e3),a()}window.addEventListener("load",()=>{window.location.pathname.endsWith("/")||window.location.pathname.endsWith("index.html")?(V(),U(),O(),X(),q("nav ul li"),q(".about-us-action"),q(".home-action button"),j()):window.location.pathname.endsWith("pricelist.html")&&(R(),j())});
