

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


        
        //현재 몇번 문제에 있는지 변수로 설정
        var num = 1;

        //문제 정보 KEY-VALUE 형태로 저장
        //문제이름 + 타입정보 + 각 선택지 영향 타입요소
        var q= {
            1:{"title1":"Q1",
                "title2":"오랜만에 휴일. 나는",
                "type":"EI",
                "A":"집 안은 답답해! 밖에 나가서 논다.",
                "B":"나가기 귀찮아... 당당히 집콕한다."},

            2:{"title1":"Q2",
                "title2":"조별과제를 위해 만들어진 단톡방. 나는",
                "type":"EI",
                "A":"먼저 카톡을 보낸다.",
                "B":"우선 조용히 상황을 살핀다."},
                
            3:{"title1":"Q3",
                "title2":"화려한 도시와 고요한 숲. 나는",
                "type":"EI",
                "A":"화려한 도시",
                "B":"고요한 숲"},

            4:{"title1":"Q4",
                "title2":"공부하기 싫을 때 나는",
                "type":"SN", 
                "A":"범위가 줄었으면 좋겠다.", 
                "B":"...시험을 대체 왜 봐야 하는 거지?"},

            5:{"title1":"Q5",
                "title2":"내 상사를 직접 고를 수 있다면 나는",
                "type":"SN",
                "A":"할 일을 구체적으로 지시해주는 상사",
                "B":"방향만 제시만 하는 자율적인 상사"},

            6:{"title1":"Q6",
                "title2":"어딘가 목적지로 향할 때 나는", 
                "type":"SN", 
                "A":"늘 가던 길로 빠르게 간다", 
                "B":"가끔씩은 새로운 길로 들어선다"},

            7:{"title1":"Q7",
                "title2":"벚꽃이 지는걸 보며 나는", 
                "type":"TF", 
                "A":"곧 다가올 여름을 생각한다.", 
                "B":"감상에 젖어 사색한다."},

            8:{"title1":"Q8",
                'title2':'"한번 생각해볼게"라는 말의 뜻은', 
                "type":"TF", 
                "A":"말그대로 한번 생각해본다는 뜻이다.", 
                "B":"대충 돌려서 거절하는 뜻이다."},

            9:{"title1":"Q9",
                "title2":"너 힘들어 보여서 아이스크림 사왔어", 
                "type":"TF", 
                "A":"내가 힘들어 보였다고???", 
                "B":"(격하게 감동하며) 너무 고마워!!!"},

            10:{"title1":"Q10",
                "title2":"만약 여행을 떠난다면 나는", 
                "type":"JP", 
                "A":"미리 최대한 계획을 세워놓는다.", 
                "B":"즉흥적으로 내키는 곳으로 향한다."},

            11:{"title1":"Q11",
                "title2":"청소를 할 때 추억의 물견을 발견한다면?", 
                "type":"JP", 
                "A":"뭐가 됐든 일단 청소부터 끝낸다.", 
                "B":"손을 멈추고 추억에 푹 잠긴다."},

            12:{"title1":"Q12",
                "title2":"과제를 할때 나는", 
                "type":"JP", 
                "A":"계획을 세워 완성일을 잡아둔다", 
                "B":"최대한 미루다 마감에 맞춰 완성시킨다"},
        }


        //MBTI 결과를 키로 하는 정보 저장
        var result = {
            //속성을 추가하고 싶으면 더 추가해도 됨
            "ISTJ": {"mbti":"ISTJ",
                    "character":"소금형",
                    "mask": "가면라이더 가면",
                    "explain1": "🤖불의를 참지 못하는 정의의 사도🤖",
                    "explain2": "책임감이 강하고 현실적인 당신! \r매사에 철저하지만 어딘가 보수적일수도? \n당신의 가면라이더 같은 정의감은 단순한 감정보다 철저한 계산으로부터 나온다는 점!",
                    "good": "ENFP",
                    "bad": "ENFJ",
                    "img": "result1.png"},


            "ISFJ": {"mbti":"ISFJ",
                    "character":"권력형",
                    "mask": "무도회 가면",
                    "explain1": "🤴천상천하 유아독존🤴",
                    "explain2": "차분하고 헌신적인 당신! \r인내심이 강하며, 늘 타인의 감정변화에 예민하다! 코시국 혹시나 헛기침을 하면 눈동자를 굴려 주위를 두리번거릴지도? \n당신이 발붙이는 모든 곳이 무도회처럼 느껴진다는 점!",
                    "good": "ENTP",
                    "bad": "ENTJ",
                    "img": "result2.png"},


            "INFJ": {"mbti":"INFJ",
                    "character":"예언자형",
                    "mask": "립뷰 마스크",
                    "explain1": "🤓뛰어난 통찰력을 가진 당신🤓",
                    "explain2": "높은 통찰력으로 사람들에게 영감을 주는 당신! \r나 자신보다는 공동체에 피해를 끼치지 않기 위해 어느샌가 당신의 몸은 너덜너덜... \n그러나 다른 사람들은 늘 당신의 통찰을 듣기위해 늘 입을 보고 있다는 점!",
                    "good": "ESTP",
                    "bad": "ESTJ",
                    "img": "result3.jpg"},

            "INTJ": {"mbti":"INTJ",
                    "character":"과학자형",
                    "mask": "역병의사 가면",
                    "explain1": "🦹‍♂️전체에 비전을 제시하는 당신🦹‍♂️",
                    "explain2": "의지가 강하고 독립적인 당신! \r분석력이 뛰어나 늘 센스 있다는 말을 챙겨듣지만 그 말조차도 분석해버리는 당신이 있을지도? \n늘 위험한 상황에는 의사처럼 등장하는 당신이 있다는 점!",
                    "good": "ESFP",
                    "bad": "ESFJ",
                    "img": "result4.jpg"},

            "ISTP": {"mbti":"ISTP",
                    "character":"백과사전형",
                    "mask": "부엉이 가면",
                    "explain1": "👀논리적이고 뛰어난 상황 적응력👀",
                    "explain2": "과목하고 분석적인 당신! \r당신이 입을 꾹 닫고 있는 동안, 뇌속에서는 상황에 적응하기 위해 온갖 가능성을 염두에 두고 있을지도? \n어두운 밤에 적응해버린 부엉이는 꽤 당신을 닮았다는 점!",
                    "good": "ENFJ",
                    "bad": "ENFP",
                    "img": "result5.jpg"},

            "ISFP": {"mbti":"ISFP",
                    "character":"성인군자형",
                    "mask": "콧수염 가면",
                    "explain1": "😊따뜻한 감성을 가진 겸손한 사람😊",
                    "explain2": "온화하고 겸손한 당신! \r다른 건 몰라도 삶의 여유만큼은 늘 챙기고 싶지만 어김없이 야근, 과제, 철야에 부딪힐때마다 크게 좌절할지도? \n늘 여유를 중시하는 당신의 모습은 마치 신사와 같다는 점!",
                    "good": "ENTJ",
                    "bad": "ENTP",
                    "img": "result6.png"},

            "INFP": {"mbti":"INFP",
                    "character":"잔다르크형",
                    "mask": "베트맨 마스크",
                    "explain1": "😎이상적인 세상을 만들어가는 사람😎",
                    "explain2": "성실하고 이해심 많은 당신! \r개방적이라 주변에 생각이 없다는 진중함이 없다는 오해를 많이 받지만 사실 표현만 잘 안할뿐 내적 신념이 굉장히 강할지도? \n그 모습은 아무도 모르는 배트맨과 같다는 점!",
                    "good": "ESTJ",
                    "bad": "ESTP",
                    "img": "result7.png"},

            "INTP": {"mbti":"INTP",
                    "character":"아이디어형",
                    "mask": "아이언맨 마스크",
                    "explain1": "🎒비관적 관점의 뛰어난 전략가🎒",
                    "explain2": "지적 호기심이 높은 당신! \r사물뿐만이 아니라 사람까지! 타인의 잠재력과 가능성을 무엇보다 가장 높게 평가할지도? \n새로운 가능성을 열고자하는 당신의 모습은 마치 아이언맨과 같다는 점!",
                    "good": "ESFJ",
                    "bad": "ESFP",
                    "img": "result8.png"},
            
            "ESTP": {"mbti":"ESTP",
                    "character":"활동가형",
                    "mask": "동물 가면",
                    "explain1": "😺다양함을 선호하는 사람😺",
                    "explain2": "느긋하고 관용적인 당신! \r타협을 잘하는 건 당신이 현실적인 문제 해결에 능숙하기 때문일지도? \n현실감각이 뛰어난 당신은 귀여운 동물가면이 잘 어울린다는 점!",
                    "good": "INFJ",
                    "bad": "INFP",
                    "img": "result9.jpg"},
            
            "ESFP": {"mbti":"ESFP",
                    "character":"사교형",
                    "mask": "하회탈",
                    "explain1": "💪분위기를 고조시키는 엔터테이너💪",
                    "explain2": "호기심이 많은 당신! \r개방적이지만 늘 추상적인 것보다 구체적인 사실을 중요시할지도? \n주위 사람들에게 웃음을 주는 당신은 민족의 얼 하회탈을 닮았다는 점!",
                    "good": "INTJ",
                    "bad": "INTP",
                    "img": "result10.jpg"},

            "ENFP": {"mbti":"ENFP",
                    "character":"스파크형",
                    "mask": "인형탈",
                    "explain1": "👻열정적으로 새 관계를 만드는 사람👻",
                    "explain2": "상상력이 풍부한 당신! \r순발력이 뛰어나 일상적인 활동에 지루함을 느낄지도? \n늘 새로운 모습을 추구하는 당신은 마치 늘 새로운 인형탈과 같다는 점!",
                    "good": "ISTJ",
                    "bad": "ISTP",
                    "img": "result11.png"},

            "ENTP": {"mbti":"ENTP",
                    "character":"발명가형",
                    "mask": "우주복",
                    "explain1": "👨‍🚀풍부한 상상력으로 새로운 것에 도전👨‍🚀",
                    "explain2": "박학다식한 당신! \r그러나 틀에 박히지 않고 독창적이며 끊없이 새로운 시도를 위해 노력할지도? \n새로운 미지의 지평을 여는 당신은 우주로 떠나는 우주비행사를 닮았다는 점!",
                    "good": "ISFJ",
                    "bad": "ISFP",
                    "img": "result12.png"},

            "ESTJ": {"mbti":"ESTJ",
                    "character":"사업가형",
                    "mask": "헬멧",
                    "explain1": "🙌사무적, 실용적, 현실적인 스타일🙌",
                    "explain2": "체계적으로 일하는 당신! \r규칙을 준수하며 사실적 목표 설정에 능할지도? \n모든 것을 계획하는 당신은 이익을 따라가는 안전제일 헬멧을 연상케한다는 점!",
                    "good": "INFP",
                    "bad": "INFJ",
                    "img": "result13.png"},

            "ESFJ": {"mbti":"ESFJ",
                    "character":"친선도모형",
                    "mask": "붕대",
                    "explain1": "🥰친절을 바탕으로 타인에게 봉사🥰",
                    "explain2": "사람에 대해 관심이 많은 당신! \r친절하다, 착하다라는 말을 귀에 딱지가 앉을 정도로 듣고 다닐지도? \n늘 타인의 상처를 어루만지는 당신은 붕대와 비슷한 사람이라는 점!",
                    "good": "INTP",
                    "bad": "INTJ",
                    "img": "result14.png"},
                    
            "ENFJ": {"mbti":"ENFJ",
                    "character":"언변능숙형",
                    "mask": "방독면",
                    "explain1": "😤타인과 도모하고 협동하는 사람😤",
                    "explain2": "사교적이고 타인의 의견을 존중하는 당신! \r그러나 비판을 받으면 가끔씩 예민하게 반응할지도? \n늘 타인의 비판과 시선에 적색경보를 울리는 당신은 방독면 같다는 것!",
                    "good": "ISTP",
                    "bad": "ISTJ",
                    "img": "result15.png"},
                    
            "ENTJ": {"mbti":"ENTJ",
                    "character":"지도자형",
                    "mask": "V For Vendetta",
                    "explain1": "🎩비전을 갖고 활력적으로 인도🎩",
                    "explain2": "철저한 준비를 하는 당신! \r그 계획적인 성격이 당신의 활동적인 측면에 도움이 될지도? \n통솔력이 있고 단호한 당신은 혁명의 역사를 쓴 브이 포 벤데타와 유사하다는 점!",
                    "good": "ISFP",
                    "bad": "ISFJ",
                    "img": "result16.png"}
        }


        //시작버튼 누르면 초기화면 사라지고, 문제는 보이게
        function start(){
            $(".start").hide();
            $(".question").show();
            $(".container2").hide();

            //시작버튼 누를 경우, 시작화면 숨기고 문제화면 보여주며 첫번째 문제
            next();
        }


        //각 버튼 클릭시 점수상승 함수 - id가 A인 버튼 클릭시
        $("#A").click(function(){
            var type = $("#type").val();

            //해당 타입 아이디에 해당하는 값을 가져옴
            var preValue = $("#"+type).val();

            //형변환 후 이전 값에서 1 값 추가
            $("#"+type).val(parseInt(preValue)+1);

            //다음으로 넘어감
            next();
        });

        //B버튼은 점수 증가할 필요가 없음
        $("#B").click(function(){
            
            //다음으로 넘어감
            next();
        });



        //다음 문제로 넘어가는 함수 설정
        function next(){

            //만약 문제가 끝번호 이후로 넘어가면 - 마지막 문제 이후
            if(num==13){

                //문제는 즉시 숨기고 로딩창은 즉시 보이게
                $(".question").hide();
                $(".loading").show();
                $(".footer").hide();
                $(".kakao_ad").hide();

                
                //로딩 후 3초 뒤에 보이게 하기 
                setTimeout(function() {

                    $(".loading").hide();

                    $(".result").show();

                    $(".footer").show();

                    $(".kakao_ad").show();
    
                    //MBTI를 구하는 최종 로직
                    var mbti = "";
                    
                    //삼항연산자
                    ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
                    ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
                    ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
                    ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
                    
                    //alert(mbti);
    
                    //
                    $("#img").attr("src",result[mbti]["img"]);
                    $("#mbti").html(result[mbti]["mbti"]);
                    $("#character").html(result[mbti]["character"]);
                    $("#mask").html(result[mbti]["mask"]);
                    $("#explain1").html(result[mbti]["explain1"]);
                    $("#explain2").html(result[mbti]["explain2"]);
                    $("#good").html(result[mbti]["good"]);
                    $("#bad").html(result[mbti]["bad"]);

                    }, 3000);


            }  else{ //마지막 문제가 아닐 경우

                //문제 번호에 따라 프로그래스 바 증가   
                //$(".progress").attr('style','width: calc(100/12*'+num+'%)');

                $(".progress").animate({width: (100/12*+num+'%')},400);

                //$(".progress").animate({width:"+=28px"},800);


                //문제에 해당하는 id - html 안에 있는 - q 안의 num 번째 "title"로 대체
                $("#title1").html(q[num]["title1"]);
                $("#title2").html(q[num]["title2"]);
                $("#type").val(q[num]["type"]);
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);

                num++;
            }
        }

