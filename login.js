const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
    const heightY = window.scrollY;

    if(heightY >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled"); //헤더 길이보다 스크롤 길면 기능 추가 -> 로고 사라지고 메뉴 바 줄어들기
    }else{
        headerTag.classList.remove("scrolled"); //헤더 길이보다 스크롤 짧으면 기능 삭제
    }
})

function login(){
    var id = document.querySelector('#userId');
    var pw = document.querySelector('#userPass');

    if(id.value=="" || pw.value==""){
        alert("없는 정보입니다.")
        location.href="join.html" //아이디 비번 창 비어있으면 alert 띄우고 회원가입 페이지로 이동
    }else{
        alert("로그인에 성공했습니다!")
        location.href="index.html" //정보 모두 입력 시 메인 홈으로 이동
    }
}