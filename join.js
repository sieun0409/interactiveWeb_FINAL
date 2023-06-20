const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
    const heightY = window.scrollY;

    if(heightY >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled"); //헤더 길이보다 스크롤 길면 기능 추가 -> 로고 사라지고 메뉴 바 줄어들기
    }else{
        headerTag.classList.remove("scrolled"); //헤더 길이보다 스크롤 짧으면 기능 삭제
    }
})

function create(){
    var id = document.querySelector('#userId');
    var pw = document.querySelector('#userPass');
    var rpw = document.querySelector('#rePass');

    if(id.value=="" || pw.value==""||rpw.value==""){
        alert("정보를 입력해주세요!") //아이디 비번 재비번 창 모두 비면 alert 전송
    }else{
        if(pw.value!==rpw.value){
            alert("비밀번호가 일치하지 않습니다.") //비번과 재비번 정보 틀릴 시 alert 전송
        }else{
            alert("회원가입에 성공했습니다!")
            location.href="index.html"; //모든 칸 채울 시 alert 전송 후 메인 홈으로 이동
        }
    }
}