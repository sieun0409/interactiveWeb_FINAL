const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(){
    const heightY = window.scrollY;

    if(heightY >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled"); //헤더 길이보다 스크롤 길면 기능 추가 -> 로고 사라지고 메뉴 바 줄어들기
    }else{
        headerTag.classList.remove("scrolled"); //헤더 길이보다 스크롤 짧으면 기능 삭제
    }
})

const moveTags = document.querySelectorAll(".img");
document.addEventListener("scroll", function() {
  const windowMid = window.innerHeight / 4;

  moveTags.forEach(moveTag => {
    let moveTop = moveTag.getBoundingClientRect().top;
    let moveMid = moveTop + moveTag.getBoundingClientRect().height / 4;

    if (Math.abs(windowMid - moveMid) < 200) {
      moveTag.classList.add("scrolled"); //스크롤 내릴 시 일정 높이가 되면 애니메이션 팝콘 등장
    } else {
      moveTag.classList.remove("scrolled"); //이후 일정 높이 넘어갈 시 애니메이션 팝콘 사라짐
    }
  });
});

const moveTag1 = document.querySelector(".title");
document.addEventListener("scroll", function(){
  let move1Top = moveTag1.getBoundingClientRect().top;
  let move1Mid = move1Top + moveTag1.getBoundingClientRect().height/2;
  let windowMid = window.innerHeight/2;

  if (Math.abs(windowMid - move1Mid) < 500) {
    moveTag1.classList.add("middle"); //스크롤 내릴 시 왼쪽에서 오른쪽으로 delivery 타이틀 등장
  } else {
    moveTag1.classList.remove("middle"); //이후 일정 높이 넘어갈 시 오른쪽에서 왼쪽으로 delivery 타이틀 사라짐
  }
});

const moveTag1s = document.querySelectorAll(".op1");
document.addEventListener("scroll", function() {
  const windowMid = window.innerHeight / 2;

  moveTag1s.forEach(moveTag => {
    let moveTop = moveTag.getBoundingClientRect().top;
    let moveMid = moveTop + moveTag.getBoundingClientRect().height / 2;

    if (Math.abs(windowMid - moveMid) < 200) {
      moveTag.classList.add("middle"); //스크롤 내릴 시 오른쪽에서 왼쪽으로 delivery 목록 등장
    } else {
      moveTag.classList.remove("middle"); //이후 일정 높이 넘어갈 시 왼쪽에서 오른쪽으로 delivery 목록 사라짐
    }
  });
});