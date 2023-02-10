(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"ebc0e32e409d1b98fe5d.png",n=async(e,t)=>{try{const n=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${e}/comments?item_id=${t}`),a=await n.json();return Array.isArray(a)?a:[]}catch(e){return[]}},a=e=>{const t=document.createElement("div");t.id="comments-section";const n=document.createElement("h3");t.appendChild(n);const a=document.createElement("ul");e.forEach((e=>{const t=document.createElement("li");t.textContent=`${e.creation_date} ${e.username}: ${e.comment}`,a.appendChild(t)})),t.appendChild(a);const c=(e=>e.querySelectorAll("li").length)(t);return n.textContent=`Comments (${c})`,t},c=async(e,t)=>{const c=document.createElement("section"),i=document.createElement("div");i.id="meal-popup",c.classList.add("pop-up-wrapper");const o=document.createElement("div");o.id="close-button",o.innerHTML='<i class="fa-solid fa-circle-xmark fa-2x"></i>',o.addEventListener("click",(()=>{c.remove()})),i.appendChild(o);const s=document.createElement("img");s.src=e.strMealThumb,i.appendChild(s);const r=document.createElement("h2");r.innerText=e.strMeal,i.appendChild(r);const l=document.createElement("ul");l.id="info-container",i.appendChild(l);const d=document.createElement("li");d.innerText=`Category: ${e.strCategory}`,l.appendChild(d);const p=document.createElement("li");p.innerText=`Area: ${e.strArea}`,l.appendChild(p);const m=document.createElement("li");m.innerText=`ID: ${e.idMeal}`,l.appendChild(m);const u=document.createElement("li");l.appendChild(u);const h=document.createElement("a");h.innerText="View video recipe",h.href=e.strYoutube,h.target="_blank",u.appendChild(h);const f="T2kz2KuAi806f4P5EDsm",y=await n(f,t),b=a(y);i.appendChild(b);const C=(()=>{const e=document.createElement("form"),t=document.createElement("h3");t.textContent="Add a Comment",e.appendChild(t);const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","Name"),e.appendChild(n);const a=document.createElement("textarea");a.setAttribute("placeholder","Message"),e.appendChild(a);const c=document.createElement("button");return c.textContent="Comment",e.appendChild(c),e})();C.querySelector("button").addEventListener("click",(async e=>{e.preventDefault();const c=C.querySelector("input"),i=C.querySelector("textarea");(async(e,t,n,a)=>{const c=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${e}/comments`,i={item_id:t,username:n,comment:a},o=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!o.ok)throw new Error(`Failed to submit comment, received ${o.status}`)})(f,t,c.value,i.value),setTimeout((async()=>{const e=await n(f,t);b.innerHTML="",b.appendChild(a(e))}),1e3),C.reset()})),i.appendChild(C),c.appendChild(i),document.body.appendChild(c)},i="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/",o="T2kz2KuAi806f4P5EDsm",s=(e=[],t=[])=>{const n=document.querySelector("main"),a=document.querySelector(".nav li a"),s=document.createElement("section");s.classList.add("main-section");const r=(e=>e.length)(e);a.textContent+=`(${r})`;const l=e.map((e=>{const n=t.find((t=>t.item_id===e.idMeal));return`\n        <article class="meal-card">\n          <figure>\n            <img src="${e?.strMealThumb}" alt="${e?.strMeal}" class="card-img" />\n          </figure>\n          <div class="card-meta">\n            <span class="title">${e?.strMeal}</span>\n            <div class="likes"><i class="fa-solid fa-heart" id="likes"></i><span>${n?n.likes:0} ${n?.likes>1?"Likes":"Like"}</span></div>\n          </div>\n          <button type="button" class="btn btn-comments">Comments</button>\n          <button type="button" class="btn btn-reservations">Reservations</button>\n        </article>\n      `}));s.innerHTML=l.join(" "),s.querySelectorAll(".btn-comments").forEach(((t,n)=>{t.addEventListener("click",(()=>{(async e=>{const t=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);return(await t.json()).meals[0]})(e[n].strMeal).then((e=>{c(e,e.idMeal)}))}))})),s.querySelectorAll("#likes").forEach(((t,n)=>{t.addEventListener("click",(()=>{(async e=>{const t={item_id:e},n=await fetch(`${i}${o}/likes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await n.text()})(e[n].idMeal).then((()=>{const{nextElementSibling:e}=t,n=e.textContent.split(" ")[0],a=Number(n)+1;e.textContent=`${a} Likes`}))}))})),n.appendChild(s)};document.querySelector("#logo").src=t,window.addEventListener("load",(async()=>{const e=await(async e=>{const t=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood");return(await t.json()).meals})(),t=await(async()=>{try{const e=await fetch(`${i}${o}/likes`);return await e.json()}catch(e){return[]}})();s(e,t)}))})();