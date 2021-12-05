

//제목
$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
});





$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
        

// 버튼 이벤트
$('.fun-btn').on('click', function(event) {
    $(this).toggleClass('start-fun');
    var $page = $('.page');
    $page.toggleClass('color-bg-start')
      .toggleClass('bg-animate-color');
  
    //change text when when button is clicked
  
    $(this).hasClass('start-fun') ?
      $(this).text('처음부터!!!') :
      $(this).text('start the fun');
  
  });


        //출력할 것들
        var final = {
        
          1:{"img":"cat1.jpg",
            "cat":"브리티시 숏헤어",
            "explain":"늠름하지만 탐스러운 볼탱이"},
        
          2:{"img":"cat2.jpg",
            "cat":"페르시안",
            "explain":"할아버지처럼 푸근한 인상"},        

          3:{"img":"cat3.jpg",
            "cat":"샴 고양이",
            "explain":"고양이계의 여왕"},

          4:{"img":"cat4.jpg",
            "cat":"래그돌",
            "explain":"아름답기로 유명한 고양이"},  

          5:{"img":"cat5.jpg",
            "cat":"스핑크스 고양이",
            "explain":"이집트 출생? 캐나다 출신인데요"},
        
          6:{"img":"cat6.jpg",
            "cat":"벵골",
            "explain":"유전자 조합으로 탄생한 현대적인 고양이"},        

          7:{"img":"cat7.jpg",
            "cat":"이그조틱 숏헤어",
            "explain":"페르시아 고양이의 단모 변종"},

          8:{"img":"cat8.jpg",
            "cat":"러시안 블루",
            "explain":"가장 오래된 천연 고양이 품종 중 하나"},          

          9:{"img":"cat9.jpg",
            "cat":"스코티시 폴드",
            "explain":"귀엽고 작은 털뭉치"},
        
          10:{"img":"cat10.jpg",
            "cat":"노르웨이 숲 고양이",
            "explain":"작은 늑대를 떠올리게 하는 늠름함"},        

          11:{"img":"cat11.jpg",
            "cat":"시베리안 고양이",
            "explain":"추운곳이 나한테는 딱이야!"},

          12:{"img":"cat12.jpg",
            "cat":"먼치킨",
            "explain":"아장아장 걷는 똘망똘망한 고양이"},          
          
          13:{"img":"cat13.jpg",
            "cat":"셀커크 렉스",
            "explain":"나 파마 좀 잘 먹은거 같지 않아?"},
        
          14:{"img":"cat14.jpg",
            "cat":"사바나",
            "explain":"사바나의 맹수란 나를 보고 하는 말이지"},        

          15:{"img":"cat15.jpg",
            "cat":"피터볼드",
            "explain":"우아하고 견고한 자태"},

          16:{"img":"cat16.jpg",
            "cat":"맹크스",
            "explain":"토실토실한 엉덩이를 흔들며 워킹"}   
          }


        //시작버튼 누르면 초기화면 사라지고, 문제는 보이게
        function start(){
            $(".start").hide();
            $(".image-upload").show();
            $(".container2").hide();
        }


        //랜덤수 생성용 변수
        var rnd = 0;


        //로딩창으로 넘어갔다가 결과 창으로
        //랜덤수 설정
        function result(){


        //문제는 즉시 숨기고 로딩창은 즉시 보이게
        $(".image-upload").hide();
        $(".loading").show();
        $(".footer").hide();
        $(".kakao_ad").hide();

        document.body.style.background = "#e6dcdc";

        
        //로딩 후 3초 뒤에 보이게 하기 
        setTimeout(function() {

            $(".loading").hide();

            $(".result").show();

            $(".footer").show();

            $(".kakao_ad").show();

            }, 5000);

            
            //1~16 사이 랜덤수 생성
            rnd = parseInt(Math.random()*16)+1;


            //랜덤수에 따라 결과 세팅
            $("#img").attr("src",final[rnd]["img"]);
            $("#cat").html(final[rnd]["cat"]);
            $("#explain").html(final[rnd]["explain"]);
        }  


        //////////////////////
        // 이미지 업로드
        function readURL(input) {
            if (input.files && input.files[0]) {
          
              var reader = new FileReader();
          
              reader.onload = function(e) {
                $('.image-upload-wrap').hide();
          
                $('.file-upload-image').attr('src', e.target.result);
                $('.file-upload-content').show();
          
                $('.image-title').html(input.files[0].name);
              };
          
              reader.readAsDataURL(input.files[0]);
          
            } else {
              removeUpload();
            }
          }
          
          function removeUpload() {
            $('.file-upload-input').replaceWith($('.file-upload-input').clone());
            $('.file-upload-content').hide();
            $('.image-upload-wrap').show();
          }
          $('.image-upload-wrap').bind('dragover', function () {
                  $('.image-upload-wrap').addClass('image-dropping');
              });
              $('.image-upload-wrap').bind('dragleave', function () {
                  $('.image-upload-wrap').removeClass('image-dropping');
          });
          

