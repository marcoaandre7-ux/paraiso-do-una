const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
const closeMenu=()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');nav.classList.remove('open')};
toggle.addEventListener('click',()=>{const opened=toggle.getAttribute('aria-expanded')==='false';toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Fechar menu':'Abrir menu');nav.classList.toggle('open',opened)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const spaces=[
  {photo:'chale-madeira',alt:'Chalé elevado de madeira com varanda entre palmeiras',caption:'O chalé, por fora',title:'Um cantinho<br>entre as árvores.',description:'A madeira dá o tom. A vegetação completa a vista. Os chalés se integram à paisagem para deixar a natureza bem perto, da chegada ao descanso.',features:['Arquitetura em madeira','Varanda aberta para o verde','Espaços para desacelerar'],gallery:3},
  {photo:'quarto',alt:'Quarto com camas e janelas abertas para a vegetação',caption:'Acolhimento, por dentro',title:'Abra a janela.<br>Encontre o verde.',description:'Madeira, luz natural e a paisagem bem ali. Conheça os ambientes internos e converse com a equipe para encontrar o chalé que combina com a sua estadia.',features:['Interiores acolhedores','Janelas para a natureza','Consulte as configurações disponíveis'],gallery:2},
  {photo:'varanda',alt:'Redes na varanda do chalé com vista para a mata',caption:'Seu lugar para uma pausa',title:'O dia pede<br>um pouco de rede.',description:'Na varanda, a paisagem vira companhia. Um espaço para ler mais uma página, esticar a conversa ou não fazer absolutamente nada.',features:['Redes para descansar','Varanda de madeira','Vista para a vegetação'],gallery:1}
];
const tabs=[...document.querySelectorAll('[data-space]')];
let activeSpace=0;
function selectSpace(index){
 if(index===activeSpace)return;activeSpace=index;const s=spaces[index];
 tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
 const panel=document.getElementById('space-panel');panel.setAttribute('aria-labelledby',tabs[index].id);
 document.getElementById('space-title').innerHTML=s.title;document.getElementById('space-description').textContent=s.description;
 document.getElementById('space-features').replaceChildren(...s.features.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));
 const photo=document.getElementById('space-photo');photo.src=`assets/${s.photo}.jpg`;photo.alt=s.alt;
 document.getElementById('space-caption').textContent=s.caption;
 const expand=document.querySelector('.photo-expand');expand.dataset.gallery=String(s.gallery);expand.setAttribute('aria-label',`Ampliar foto: ${s.caption}`);
 if(!motion.matches){photo.animate([{opacity:.6,transform:'scale(1.015)'},{opacity:1,transform:'scale(1)'}],{duration:400,easing:'cubic-bezier(.16,1,.3,1)'});panel.animate([{opacity:.6,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:280})}
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectSpace(i));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectSpace(next);tabs[next].focus()}})});
const photos=[{src:'chale-mata',alt:'Nosso refúgio: o chalé entre as árvores'},{src:'varanda',alt:'A pausa: redes e verde na varanda'},{src:'quarto',alt:'O aconchego: o quarto e sua vista'},{src:'chale-madeira',alt:'O chalé de madeira na paisagem'},{src:'descanso',alt:'Sem pressa: espaço para descansar sob o chalé'},{src:'rio-una',alt:'A natureza: as águas do rio Una'},{src:'deck-rio',alt:'O deck de madeira à beira do rio'}];
const dialog=document.getElementById('lightbox');let currentPhoto=0;let previousFocus=null;
function renderPhoto(){const p=photos[currentPhoto];const img=document.getElementById('lightbox-image');img.src=`assets/${p.src}.jpg`;img.alt=p.alt;document.getElementById('lightbox-caption').textContent=p.alt;document.getElementById('lightbox-count').textContent=`${currentPhoto+1} / ${photos.length}`}
function stepPhoto(delta){currentPhoto=(currentPhoto+delta+photos.length)%photos.length;renderPhoto()}
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;currentPhoto=Number(button.dataset.gallery);renderPhoto();dialog.showModal();document.getElementById('lightbox-close').focus()}));
document.getElementById('lightbox-close').addEventListener('click',()=>dialog.close());
document.getElementById('lightbox-prev').addEventListener('click',()=>stepPhoto(-1));document.getElementById('lightbox-next').addEventListener('click',()=>stepPhoto(1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();stepPhoto(-1)}if(e.key==='ArrowRight'){e.preventDefault();stepPhoto(1)}});
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('close',()=>previousFocus?.focus());
let touchStart=null;dialog.addEventListener('touchstart',e=>{touchStart=e.touches[0].clientX},{passive:true});dialog.addEventListener('touchend',e=>{if(touchStart===null)return;const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>65)stepPhoto(dx<0?1:-1);touchStart=null},{passive:true});
const arrival=document.getElementById('check-in'),departure=document.getElementById('check-out'),formError=document.getElementById('date-error');
function localDate(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
function tomorrow(value){const d=new Date(value+'T12:00:00');d.setDate(d.getDate()+1);return localDate(d)}
arrival.min=localDate(new Date());departure.min=tomorrow(arrival.min);
arrival.addEventListener('change',()=>{formError.textContent='';departure.min=tomorrow(arrival.value||arrival.min);if(departure.value&&departure.value<=arrival.value)departure.value=''});
departure.addEventListener('change',()=>formError.textContent='');
document.getElementById('booking-form').addEventListener('submit',e=>{
 e.preventDefault();if(!arrival.value||!departure.value||arrival.value<localDate(new Date())||departure.value<=arrival.value){formError.textContent='Escolha uma chegada a partir de hoje e uma saída depois da chegada.';arrival.focus();return}
 const format=value=>new Intl.DateTimeFormat('pt-BR').format(new Date(value+'T12:00:00'));
 const message=`Olá! Conheci o Paraíso do Una pelo site e gostaria de consultar uma estadia de ${format(arrival.value)} a ${format(departure.value)}. Podem me informar os chalés disponíveis e os valores?`;
 window.location.assign(`https://wa.me/5598991003860?text=${encodeURIComponent(message)}`);
});
