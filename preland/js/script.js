let counterBagsWidget=0;const attempt=5;let formTime=600;const counterElem=$(".counter_attempts");let interval={};window.bag={open:e=>{if(counterBagsWidget>=5)return;const s=$(e.currentTarget);counterBagsWidget<6&&!s.hasClass("showed-goods")&&(counterBagsWidget++,window.bag.substractConter(),window.bag.changeClass(counterBagsWidget,s)),s.addClass("showed-goods")},substractConter:()=>{let e=5-counterBagsWidget;counterElem.text(e)},changeClass:(e,s)=>{switch(e){case 1:s.addClass("sale sale-30");break;case 2:case 4:s.addClass("sale sale-100");break;case 3:s.addClass("sale sale-50");break;case 5:s.addClass("sale sale-100"),$(".card__item.sale.sale-100").addClass("glow"),window.bag.showResultWindow(),window.bag.showForm()}},showResultWindow:()=>{setTimeout((function(){$(".spin-result-wrapper").css("display","block")}),1e3)},showForm:()=>{setTimeout((function(){$(".spin-wrapper").slideUp(),$(".order_block").slideDown(),window.bag.start_timer()}),3e3)},start_timer:()=>{interval=setInterval(window.bag.tick,1e3)},tick:()=>{formTime-=1;let e=Math.floor(formTime/60),s=formTime-60*e;0==e&&0==s&&clearInterval(interval),s=s>=10?s:"0"+s,$("#min").html("0"+e),$("#sec").html(s)}},$(".card__item").click((e=>{window.bag.open(e)}));