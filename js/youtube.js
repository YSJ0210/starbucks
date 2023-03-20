// YOUTUBE IFRAME API 불러오기
 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    // 영상 크기
    //  height: '360',
    //  width: '640',
     videoId: 'QeZ7DBnSixg', //영상 재생할 유튜브 ID값(v= 뒤에 있는 링크)
        //playerVar : { 플레이 할 옵션}
     playerVars:{
        autoplay : true, //자동재생
        loop : true //반복재생
      //  playList : ['qNIngFRL-Z0']; //반복 재생할 유튜브 영상 목록
    },
    events:{
        //onReady : 영상을 틀었을 때
        onReady:function(event){
            event.target.mute() //음소거
        }
    }
   });
 }