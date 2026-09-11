(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:.12});

  var track=document.getElementById('carTrack');
  if(track){
    var prev=document.querySelector('.car-prev'),next=document.querySelector('.car-next');
    function step(){return track.querySelector('img').offsetWidth+20;}
    prev&&prev.addEventListener('click',function(){track.scrollBy({left:-step(),behavior:'smooth'});});
    next&&next.addEventListener('click',function(){track.scrollBy({left:step(),behavior:'smooth'});});
  }

  var burger=document.getElementById('navBurger'),navMobile=document.getElementById('navMobile');
  if(burger&&navMobile){
    burger.addEventListener('click',function(){
      var open=navMobile.classList.toggle('open');
      burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
    navMobile.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        navMobile.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
      });
    });
  }

  var mktFeature=document.getElementById('mktFeature');
  if(mktFeature){
    var mktSlides=mktFeature.querySelectorAll('.mkt-slide'),mktDotsWrap=document.getElementById('mktDots'),mi=0,mktTimer;
    mktSlides.forEach(function(_,idx){
      var d=document.createElement('i');
      if(idx===0)d.classList.add('active');
      d.addEventListener('click',function(){goMkt(idx);});
      mktDotsWrap.appendChild(d);
    });
    var mktDots=mktDotsWrap.querySelectorAll('i');
    function goMkt(idx){
      mktSlides[mi].classList.remove('active');mktDots[mi].classList.remove('active');
      mi=(idx+mktSlides.length)%mktSlides.length;
      mktSlides[mi].classList.add('active');mktDots[mi].classList.add('active');
    }
    function restart(){clearInterval(mktTimer);mktTimer=setInterval(function(){goMkt(mi+1);},9000);}
    mktFeature.querySelector('.mkt-prev').addEventListener('click',function(){goMkt(mi-1);restart();});
    mktFeature.querySelector('.mkt-next').addEventListener('click',function(){goMkt(mi+1);restart();});
    restart();
  }

  var timeBg=document.getElementById('timeBg');
  if(timeBg){
    var tbImgs=timeBg.querySelectorAll('img'),tbi=0;
    setInterval(function(){
      tbImgs[tbi].classList.remove('active');
      tbi=(tbi+1)%tbImgs.length;
      tbImgs[tbi].classList.add('active');
    },4800);
  }

  var mapCta=document.getElementById('mapCta');
  if(mapCta){
    var mcImgs=mapCta.querySelectorAll('img'),mci=0;
    setInterval(function(){
      mcImgs[mci].classList.remove('active');
      mci=(mci+1)%mcImgs.length;
      mcImgs[mci].classList.add('active');
    },4200);
  }

  var fade=document.getElementById('teamFade');
  if(fade){
    var fimgs=fade.querySelectorAll('img'),fi=0;
    setInterval(function(){
      fimgs[fi].classList.remove('active');
      fi=(fi+1)%fimgs.length;
      fimgs[fi].classList.add('active');
    },3200);
  }
  els.forEach(function(e){io.observe(e)});
  setTimeout(function(){var b=document.getElementById('boot'); if(b) b.style.pointerEvents='none';},3300);
})();