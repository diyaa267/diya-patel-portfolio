const cursor=document.querySelector('.cursor-glow');document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const sections=[...document.querySelectorAll('main section[id]')];const nav=[...document.querySelectorAll('.navbar nav a')];window.addEventListener('scroll',()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});
const menuToggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.navbar nav');
if(menuToggle&&mobileNav){
  menuToggle.addEventListener('click',()=>{
    const open=mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.textContent=open?'×':'☰';
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobileNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.textContent='☰';
  }));
}
