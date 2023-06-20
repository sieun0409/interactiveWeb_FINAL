const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
    const heightY = window.scrollY;

    if(heightY >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled"); //헤더 길이보다 스크롤 길면 기능 추가 -> 로고 사라지고 메뉴 바 줄어들기
    }else{
        headerTag.classList.remove("scrolled"); //헤더 길이보다 스크롤 짧으면 기능 삭제
    }
})