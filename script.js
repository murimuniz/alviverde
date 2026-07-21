  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el=>io.observe(el));

  // faq accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q').addEventListener('click', ()=>{
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  // mobile burger toggle
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('ul.links');
  burger.addEventListener('click', ()=>{
    const isOpen = navLinks.classList.toggle('show');
    burger.textContent = isOpen ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      navLinks.classList.remove('show');
      burger.textContent = '☰';
    });
  });
