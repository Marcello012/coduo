const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .18 });
  
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
  
function animateCounter(el){
  const target = +el.dataset.target; let n = 0; const dur = 1100; const step = Math.max(1, Math.floor(target/(dur/16)));
  const t = setInterval(()=>{ n += step; if(n >= target){ n = target; clearInterval(t); } el.textContent = n + (el.dataset.suffix || ''); }, 16);
}
const io2 = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ animateCounter(e.target); io2.unobserve(e.target); } });
}, { threshold: .4 });
  
document.querySelectorAll('.count').forEach(el=> io2.observe(el));