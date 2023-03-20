// 검색창 제어
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


