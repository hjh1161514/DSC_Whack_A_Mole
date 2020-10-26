const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole; // 이전 홀과 같은 경우 새로운 홀을 뽑기 위해 존재
let timeUp = false; 
let score = 0;
// 두더지가 몇초동안 올라갈지 랜덤으로
function randTime(min, max) { //매개변수: 최소시간 최대시간
    return Math.round(Math.random() * (max-min) + min) 
}
// 두더지가 몇번째 홀에 나타날 것인지 랜덤으로
function randHole(holes) {
    const randIndex = Math.floor(Math.random() * holes.length)
    const hole = holes[randIndex]
    if(hole == lastHole) { //이전 홀과 같은 경우
        return randomHole(holes)
    }

    lastHole = hole;
    return hole;
}
// 두더지가 튀어나오는 것
function peep() {
    const time = randTime(1000, 2000)
    const hole = randHole(holes) //holes 중에 randomhole을 뽑도록
    hole.classList.add('up') //랜덤으로 뽑을 hole의 두더지가 위로 올라가는 효과

    setTimeout(()=>{ //time시간 동안
        hole.classList.remove('up') //시간이 지나면 두더지가 없어지도록
        if(!timeUp){ //게임이 끝나지 않았다면
            peep()
        }
    },time)
}
// 시작버튼
function startGame() {
    scoreBoard.textContent = 0 //scoreBoard html의 score
    score = 0 //js의 score
    timeUp=false //게임이 아직 끝나지 않음
    peep() //두더지가 튀어나와야 함

    setTimeout(() => timeUp = true, 10000) //10초가 흐르면 timeUp이 true로 바뀌고 게임이 끝남 -> 두더지 게임 진행시간

}
// 두더지를 클릭했을 때 작동되는 것
function bonk(e) {
    if(!e.isTrusted) return

    this.classList.remove('up') 
    score++
    scoreBoard.textContent = score //html파일의 scoreBoard가 현재 score로 update
}
// 두더지에 클릭리스너를 달아주는 for문
moles.forEach(mole => mole.addEventListener('click', bonk)); 