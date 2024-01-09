(()=>{"use strict";const t=function(e){return new t.prototype.init(e)};t.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;const e=t;e.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},e.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},e.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},e.prototype.addClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.add(...t);return this},e.prototype.removeClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.remove(...t);return this},e.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.toggle(t);return this},e.prototype.html=function(t){for(let e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},e.prototype.eq=function(t){const e=this[t],i=Object.keys(this).length;for(let t=0;t<i;t++)delete this[t];return this[0]=e,this.length=1,this},e.prototype.index=function(){return[...this[0].parentNode.children].findIndex((t=>t==this[0]))},e.prototype.find=function(t){let e=0,i=0;const s=Object.assign({},this);for(let n=0;n<s.length;n++){const o=s[n].querySelectorAll(t);if(0!=o.length){for(let t=0;t<o.length;t++)this[i]=o[t],i++;e+=o.length}}this.length=e;const n=Object.keys(this).length;for(;e<n;e++)delete this[e];return this},e.prototype.closest=function(t){let e=0;for(let i=0;i<this.length;i++){if(this[i]=this[i].closest(t),null===this[i]||void 0===this[i])return`Element ${t} not found`;e++}const i=Object.keys(this).length;for(;e<i;e++)delete this[e];return this},e.prototype.siblings=function(){let t=0,e=0;const i=Object.assign({},this);for(let s=0;s<i.length;s++){const n=i[s].parentNode.children;for(let t=0;t<n.length;t++)i[s]!==n[t]&&(this[e]=n[t],e++);t+=n.length-1}this.length=t;const s=Object.keys(this).length;for(;t<s;t++)delete this[t];return this},e.prototype.addAttribute=function(t,e){for(let i=0;i<this.length;i++)this[i].setAttribute(t,e);return this},e.prototype.removeAttribute=function(t){for(let e=0;e<this.length;e++)this[e].removeAttribute(t);return this},e.prototype.toggleAttribute=function(t){for(let e=0;e<this.length;e++)this[e].toggleAttribute(t);return this},e.prototype.on=function(t,e){if(!t||!e)return this;for(let i=0;i<this.length;i++)this[i].addEventListener(t,e);return this},e.prototype.off=function(t,e){if(!t||!e)return this;for(let i=0;i<this.length;i++)this[i].removeEventListener(t,e);return this},e.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},e.prototype.animateOverTime=function(t,e,i){let s;return function n(o){s||(s=o);let l=o-s,r=Math.min(l/t,1);e(r),l<2e3?requestAnimationFrame(n):"function"==typeof i&&i()}},e.prototype.fade=function(t,e,i,s){for(let n=0;n<this.length;n++){let o;switch(s){case"fadeIn":this[n].style.display=e||"block";const s=t=>{this[n].style.opacity=t};o=this.animateOverTime(t,s,i),requestAnimationFrame(o);break;case"fadeOut":const l=t=>{this[n].style.opacity=1-t,1===t&&(this[n].style.display="none")};o=this.animateOverTime(t,l,i),requestAnimationFrame(o)}}},e.prototype.fadeIn=function(t,e,i){return this.fade(t,e,i,"fadeIn"),this},e.prototype.fadeOut=function(t,e,i){return this.fade(t,e,i,"fadeOut"),this},e.prototype.fadeToggle=function(t,e,i){for(let s=0;s<this.length;s++)"none"===window.getComputedStyle(this[s]).display?this.fadeIn(t,e,i):this.fadeOut(t,e,i);return this},e.prototype.gasRight=function(t,e){for(let i=0;i<this.length;i++){let s=document.getElementById("textExample"),n=s.value,o=n.length,l=0;const r=t=>{this[i].style.color="rgb(47, 131, 47)";let e=(o-l)*t+l;s.value=n.slice(0,Math.ceil(e))},a=this.animateOverTime(t,r,e);requestAnimationFrame(a)}return this},e.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const i=this[t].getAttribute("id");e(this[t]).click((()=>{e(`[data-toggle-id="${i}"]`).fadeToggle(300)}))}},e(".dropdown-toggle").dropdown();const i=window.innerWidth-document.documentElement.clientWidth;e.prototype.modal=function(t){!function(){let t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.appendChild(t);t.offsetWidth,t.clientWidth;t.remove()}();for(let s=0;s<this.length;s++){const n=this[s].getAttribute("data-target");e(this[s]).click((t=>{t.preventDefault(),e(n).fadeIn(500),document.body.style.overflow="hidden",document.body.style.marginRight=`${i}px`})),document.querySelectorAll(`${n} [data-close]`).forEach((i=>{e(i).click((()=>{e(n).fadeOut(500),setTimeout((()=>{document.body.style.overflow="",document.body.style.marginRight="0px",t&&document.querySelector(n).remove()}),500)}))})),e(n).click((i=>{i.target.classList.contains("modal")&&(e(n).fadeOut(500),setTimeout((()=>{document.body.style.overflow="",document.body.style.marginRight="0px",t&&document.querySelector(n).remove()}),500))}))}},e('[data-toggle="modal"]').modal(),e.prototype.createModal=function({text:t,btns:i}={}){for(let s=0;s<this.length;s++){let n=document.createElement("div");n.classList.add("modal"),n.setAttribute("id",this[s].getAttribute("data-target").slice(1));const o=[];for(let t=0;t<i.count;t++){let e=document.createElement("button");e.classList.add("btn",...i.settings[t][1]),e.textContent=i.settings[t][0],i.settings[t][2]&&e.setAttribute("data-close","true"),i.settings[t][3]&&"function"==typeof i.settings[t][3]&&e.addEventListener("click",i.settings[t][3]),o.push(e)}n.innerHTML=`\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="close" data-close>\n                        <span>&times;</span>\n                    </button>\n                    <div class="modal-header">\n                        <div class="modal-title">\n                            ${t.title} \n                        </div>\n                    </div>\n                    <div class="modal-body">\n                        ${t.body}\n                    </div>\n                    <div class="modal-footer">\n                        \n                    </div>\n                </div>\n            </div>\n            `,n.querySelector(".modal-footer").append(...o),document.body.appendChild(n),e(this[s]).modal(!0),e(this[s].getAttribute("data-target")).fadeIn(500)}},e.prototype.tab=function(){for(let t=0;t<this.length;t++)e(this[t]).on("click",(()=>{e(this[t]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").removeClass("tab-content--active").eq(e(this[t]).index()).addClass("tab-content--active")}))},e("[data-tabpanel] .tab-item").tab(),e.prototype.accordion=function(t="accordion-head--active",i="accordion-content--active",s=40){for(let n=0;n<this.length;n++)e(this[n]).click((()=>{e(this[n]).toggleClass(t),e(this[n].nextElementSibling).toggleClass(i),this[n].classList.contains(t)?this[n].nextElementSibling.style.maxHeight=this[n].nextElementSibling.scrollHeight+s+"px":this[n].nextElementSibling.style.maxHeight="0px"}))},e(".accordion-head").accordion(),e.prototype.carousel=function(){for(let t=0;t<this.length;t++){const i=window.getComputedStyle(this[t].querySelector(".carousel-inner")).width,s=this[t].querySelectorAll(".carousel-item"),n=this[t].querySelector(".carousel-slides"),o=this[t].querySelectorAll(".carousel-indicators li");n.style.width=100*s.length+"%",s.forEach((t=>{t.style.width=i}));let l=0,r=0;e(this[t].querySelector('[data-slide = "next"]')).click((t=>{t.preventDefault(),l==+i.replace(/\D/g,"")*(s.length-1)?l=0:l+=+i.replace(/\D/g,""),n.style.transform=`translateX(-${l}px)`,r==s.length-1?r=0:r++,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")})),e(this[t].querySelector('[data-slide = "prev"]')).click((t=>{t.preventDefault(),0==l?l=+i.replace(/\D/g,"")*(s.length-1):l-=+i.replace(/\D/g,""),n.style.transform=`translateX(-${l}px)`,0==r?r=s.length-1:r--,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")}));const a=this[t].getAttribute("id");e(`#${a} .carousel-indicators li`).click((t=>{const e=t.target.getAttribute("data-slide-to");r=e,l=+i.replace(/\D/g,"")*e,n.style.transform=`translateX(-${l}px)`,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")}))}},e(".carousel").carousel(),e.prototype.get=async function(t,e="json"){let i=await fetch(t);if(!i.ok)throw new Error(`Could not fetch ${t}, status: ${i.status}`);switch(e){case"json":return await i.json();case"text":return await i.text();case"blob":return await i.blob()}},e.prototype.post=async function(t,e,i="text"){let s=await fetch(t,{method:"POST",body:e});switch(i){case"json":return await s.json();case"text":return await s.text();case"blob":return await s.blob()}}})();