var resultWrapper=document.querySelector(".spin-result-wrapper"),wheel=document.querySelector(".wheel-img");let thxUrl="https://med-star-inf.art/ruletka_php/thanks/success_mtds/index.php",thxParams={};function getUrlVars(e){var t=window.location.search;return(t=t.match(new RegExp("[?&]{1}(?:"+e+"=([^&$#]+))")))?t[1]:""}function buildQueryString(e){var t,r=[];for(t in e)e.hasOwnProperty(t)&&e[t]&&r.push(t+"="+e[t]);return r.join("&")}function mapFormDataToObject(e){const t=$(e).serializeArray(),r={};return $.map(t,(function(e,t){r[e.name]=e.value})),r}function setOrderCookie(){let e=new Date;e.setMonth(e.getMonth()+1),document.cookie="ptc=strue; expires="+e.toGMTString()}function spin(){wheel.classList.contains("rotated")||(wheel.classList.add("super-rotation"),setTimeout((function(){resultWrapper.style.display="block"}),8e3),setTimeout((function(){$(".spin-wrapper").slideUp(),$("#boxes").slideUp(),$(".order_block").slideDown(),start_timer()}),1e4),wheel.classList.add("rotated"))}var closePopup=document.querySelector(".close-popup");$(".close-popup, .pop-up-button").click((function(e){e.preventDefault(),$(".spin-result-wrapper").fadeOut()}));var intr,time=600;function start_timer(){intr=setInterval(tick,1e3)}function tick(){--time;var e=Math.floor(time/60),t=time-60*e;0==e&&0==t&&clearInterval(intr),t=10<=t?t:"0"+t,$("#min").html("0"+e),$("#sec").html(t)}