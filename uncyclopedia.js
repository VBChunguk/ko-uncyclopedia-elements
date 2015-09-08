if (!uncyclo_loaded) {
var uncyclo_loaded = true;

var uncyclo_talk_first = [
'10원짜리 팬티를 입고 20원짜리 칼을 차고 노래를 합', '108번뇌를 합', '124MHz로 말합', 'dksemfhapekdj를 합',
'TV편성표를 나열합', '@#$^%^&#$합', '감탄합', '강의합',
'강조합', '개념을 옥션에 팔아넘깁', '개풀 뜯어먹는 소리를 합', '거짓말합',
'경고합', '경제만 살리면 그만이라고 합', '고민합', '고백합',
'고자송을 부릅', '고주파를 쏩', '고함을 칩', '공기를 진동시킵',
'공식 발표를 합', '광고합', '괴성을 지릅', '교란을 일으킵',
'구구단을 욉', '궁시렁댑', '귀를 고문합', '귀신 씨나락 까먹는 소리를 합',
'기자 회견을 합', '기차 화통을 삶아먹습', '까붑', '꽥꽥거립',
'꿀꿀거립', '나댑', '나지막이 읊습', '내뱉습',
'내숭떱', '넋두리를 합', '넋이 나간 상태로 말합', '노래합',
'논의합', '논쟁을 벌입', '느끼하게 말합', '늑대처럼 웁',
'답합', '당신을 고문하며 말합', '대답합', '대듭',
'대사를 욉', '대화를 합', '데스노트에 이렇게 적었습', '독일어를 합',
'땡볕을 합', '똥을 쌉', '똥을 벽에 칠합', '들이댑',
'땡전 뉴스를 내보냅', '떠듭', 'ㄹ어를 합', '랩을 합',
'러시아식 유머를 구사합', '로꾸거를 부릅', '말씀하십', '말을 더듬습',
'말을 돌립', '말합', '메아리를 만듭', '명심보감을 욉',
'모기만한 목소리를 냅', '묻습', '미쳤습', '미쳤나 봅',
'미친 웃음을 흘립', '반란을 일으킵', '반박합', '반발합',
'발광합', '발표합', '백괴사전을 읽습', '변명합',
'복화술을 씁', '볼멘소리로 말합', '부탁합', '불만을 토로합',
'불평합', '비꼽', '비난합', '비명을 지릅',
'비정상적인 대화를 합', '빚 독촉을 합', '빵상어를 합', '사랑스럽게 말합',
'새 정책을 발표합', '서술형 및 논술형 문제 모범답안을 부릅', '선언합', '성대모사를 합',
'설교합', '설득합', '설명합', '소개합',
'소곤거립', '소리칩', '소음을 만듭', '속삭입',
'수군거립', '수다를 떱', '슬퍼합', '시끄럽게 합',
'신성모독을 합', '신음합', '실성했습', '실토합',
'씨부렁댑', '악플을 남깁', '안내방송을 합', '안드로메다로 개념을 전송합',
'암호문을 줄줄이 꿰어놓습', '언어를 구사합', '언어 활동을 합', '언짢은 듯 비꼽',
'얼버무립', '역설합', '연설합', '열변을 토합',
'영어를 합', '와인잔 깨는 소리를 합', '왜말을 합', '외계인과의 교신을 시도합',
'외칩', '욕합', '울부짖습', '웃습',
'웅변합', '원망합', '위협합', '유언을 남깁',
'유혹합', '윤희코드를 나열합', '으름장을 놓습', '읊조립',
'음성 정보를 전달합', '인터뷰를 합', '일본을 공격합', '의논합',
'의사소통을 합', '이번주 로또 당첨번호를 부릅', '이야기합', '이쥐박을 부릅',
'일러바칩', '입으로 정보를 전달합', '입을 놀립', '입을 움직입',
'자다가 봉창 두드리는 소리를 합', '자백합', '잠꼬대를 합', '저주를 겁',
'전화를 겁', '절망에 찬 괴성을 지릅', '정신 나간 상태로 말합', '제안합',
'조언합', '주장합', '주둥아리를 놀립', '주둥이를 놀립',
'주문을 욉', '주의를 줍', '중얼거립', '쥐새끼어를 합',
'지껄입', '지랄합', '지저귑', '질문합',
'짖습', '차바퀴를 합', '천자문을 욉', '초음파를 쏩',
'충고합', '침을 튀깁', '캑캑거립', '코를 곱',
'타박합', '탄식합', '탈레반과 협상을 합', '텔레파시를 씁',
'토론합', '토의합', '통곡합', '툴툴댑',
'핍박합', '프로포즈를 합', '해명합', '헛소리합',
'혀를 놀립', '협박합', '협의합', '호통칩',
'혼냅', '혼란을 유발합', '혼자 질답합', '혼잣말을 합',
'화학어를 합', '화성어를 합', '확성기를 씁', '희롱합'
];
var uncyclo_talk_middle = [ '니다', '···' ];
var uncyclo_talk_last = [ '!', '?!', '(응?)', '(퍽)', '(탕)', '← 틀려' ];

var uncycloListRandom = function(list) {
    return list[Math.floor(Math.random() * list.length)];
}

var uncycloGenerateTalk = function(speaker, content, suffix) {
    var ret = speaker;
    var code = speaker.charCodeAt(speaker.length - 1);
    if (suffix !== undefined) ret += suffix;
    else {
        if (code >= 0xac00 && code < 0xac00 + 11172) {
            code -= 0xac00;
            if (code % 28 === 0) ret += '가';
            else ret += '이';
        } else ret += '이(가)';
    }
    ret += ' ';
    ret += uncycloListRandom(uncyclo_talk_first);
    ret += uncycloListRandom(uncyclo_talk_middle);
    ret += uncycloListRandom(uncyclo_talk_last);
    ret += ' <b>“';
    ret += content;
    ret += '”</b>';
    
    return ret;
}

var uncycloProcess = function() {
    var detailchanged = false;
    
    var nodelist, i;
    nodelist = document.querySelectorAll('uncyclo-china.uncyclopedia-js:not(.uncyclopedia-js-done)');
    for (i = 0; i < nodelist.length; i++) {
        detailchanged = true;
        var text = document.createElement('uncyclo-china-text');
        text.textContent = "Made in China";
        nodelist[i].appendChild(text);
        nodelist[i].classList.add('uncyclopedia-js-done');
    }
    
    nodelist = document.querySelectorAll('uncyclo-censored.uncyclopedia-js:not(.uncyclopedia-js-done)');
    for (i = 0; i < nodelist.length; i++) {
        detailchanged = true;
        var title = nodelist[i].textContent;
        nodelist[i].title = title;
        nodelist[i].textContent = "삐";
        if (title.length >= 4) nodelist[i].textContent += "-";
        nodelist[i].classList.add('uncyclopedia-js-done');
    }
    
    nodelist = document.querySelectorAll('uncyclo-talk.uncyclopedia-js:not(.uncyclopedia-js-done)');
    for (i = 0; i < nodelist.length; i++) {
        detailchanged = true;
        var content = nodelist[i].innerHTML;
        nodelist[i].innerHTML = "";
        
        var wrapper = document.createElement('uncyclo-talk-content');
        var talkimg = document.createElement('img');
        talkimg.src = "assets/talk.svg";
        wrapper.appendChild(talkimg);
        var talkcontent = document.createElement('span');
        talkcontent.innerHTML = uncycloGenerateTalk(nodelist[i].dataset.speaker, content, nodelist[i].dataset.forceSuffix);
        wrapper.appendChild(talkcontent);
        nodelist[i].appendChild(wrapper);
        nodelist[i].classList.add('uncyclopedia-js-done');
    }
    if (detailchanged) uncycloProcess();
}

window.onload = uncycloProcess;
}