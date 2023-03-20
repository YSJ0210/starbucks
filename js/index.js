//console.log("test");


//윈도우가 로딩되었을 때 버튼 숨김 기능
window.onload = function(){
    if(window.scrollY > 1000){
        gsap.to('#to-top',0.6,{
            x:0
        });
    }else{
        gsap.to('#to-top',0.6,{
            x:100
        });
    }
}


//document.querySelector()  :
//body요소에 있는 선택자 불러오기
const searchEl = document.querySelector('.search_bar');
const searchInputEl = searchEl.querySelector('input');

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click' , function(){
    //돋보기 icon을 눌러도 inputbox 활성화(focus)
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    //input box가 focus 상태일 때 'focused' 클래스 추가
    searchEl.classList.add('focused');

    //input box가 focus 상태일 때 placeholder 추가    
    searchInputEl.setAttribute('placeholder','검색어를 입력해주세요.')
});

searchInputEl.addEventListener('blur',function(){
    //input box가 blur(focus가 아닐때) 상태일 때 
    //'focused' 클래스 삭제
    searchEl.classList.remove('focused');

    //input box가 blur 상태일 때 placeholder 문구 변경(없애기)
    searchInputEl.setAttribute('placeholder','')
});


// bedges 스크롤 위치 고정 변수
const badgesEl = document.querySelector('#top_layout .badges');
// console.log(badgesEl);



//전체 화면을 스크롤 했을때 badges 위치 고정
// _.throttle( 실행 , 시간) : 시간(ms)마다 끊어줌(동작 시간에 제한을 줌)
//300ms(0.3초)마다 끊어서 실행문을 실행시킴
window.addEventListener('scroll', _.throttle(function(){ 
   // console.log(window.scrollY);
    if(window.scrollY > 1000){
        //배지 숨기기(js로 css조작)
        // badgesEl.style.display = 'none';
        //gsap.to(요소, 지속시간, 옵션); =>transition을 js에서 처리할 수 있음
        gsap.to(badgesEl,0.6,{
            opacity:0 //추가하고 싶으면 , 로 추가
        });
        gsap.to('#to-top',0.6,{
            // opacity : 1
           x : 0,
        });

    }else{
        //배지 보이기
        // badgesEl.style.display = 'block';
        gsap.to(badgesEl,0.6,{
            opacity:1 //추가하고 싶으면 , 로 추가
        });

        gsap.to('#to-top',0.6,{
            // opacity : 0
            x : 100
         });
    }
},300));




//이미지에 fade-in 효과 주기
const fadeEls = document.querySelectorAll('#body_layout .fade-in');
console.log(fadeEls);

//반복문
fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : (index+1)*0.5
    });
});

//new Swiper(선택자,옵션) 
new Swiper('.notice-line .swiper-container',{
    direction : 'vertical',
    autoplay : true, //자동으로 넘기기
    loop:true //연속재생
});

new Swiper('.promotion .swiper-container',{
        // direction을 쓰지 않으면 자동으로 default
        slidesPerView : 3, //한번에 보여 줄 슬라이드 개수
        spaceBetween : 10, //슬라이드 사이의 여백
        centeredSlides : true, //1번 슬라이드를 가운데 보여주는 옵션
        loop : true,
        pagination:{
            el: '.swiper-pagination' , //페이지 번호 요소 선택자
            clickable : true //페이지 번호 클릭 여부
        },
        navigation:{
            prevEl: '.swiper-button-prev',
            nextEl : '.swiper-button-next'
        },
        autoplay : {
            delay : 5000 //지속시간
        }
});

// AWARDS SWIPER
new Swiper('#awards .swiper-container',{
    autoplay : true,
    loop : true,
    slidesPerView : 5, //한번에 보여 줄 슬라이드 개수
    spaceBetween : 30,
    navigation:{
        prevEl: '#awards .swiper-prev',
        nextEl : '#awards .swiper-next'
    },
});

const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);
const promotionTogglebtn = document.querySelector('.toggle-promotion');
// console.log(promotionTogglebtn);

let isHidePromotion = false;
//true = 숨김, false = 보이기

promotionTogglebtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion == true){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

//범위 랜덤 함수(소수점 2자리)
function random(min, max){
    //.toFixed()를 통해 반환된 문자 데이터를
    //parseFloat()를 통해 소수점을 가지는 숫자데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector,delay,size){
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(selector,random(1.5,2.5),{
        y:size,
        repeat : -1,
        yoyo:true,
        ease : Power1.easeInOut, //천천-보통-천천
        
        // 자동으로0~입력받은 숫자까지 
        delay : random(0,delay)
    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);

// forEach()를 사용해 배열에 있는 것들을 하나씩 꺼내옴
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, //보여짐 여부를 감시할 요소
        triggerHook : .8 //다음 요소까지 시간
    })
    .setClassToggle(spyEl, 'show') //보여질 때 어떤 클래스를 추가할지
    .addTo(new ScrollMagic.Controller()); 
});

// toTopEl을 클릭했을 때 viewport가 상단으로 올라가는 기능
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click',function(){
        // window = viewport
        gsap.to(window,0.7,{
            scrollTo:0
        });

});