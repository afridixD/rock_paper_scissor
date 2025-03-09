let score = JSON.parse(localStorage.getItem('score')) || {win:0, lose:0, tie:0}
let result=''



function rock(){
    let playerMove='rock'
    const randomMove=rps_generator();
    if(randomMove===playerMove){
        result='Tie'
    }else if(randomMove==='paper'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove, playerMove)
}

function paper(){
    let playerMove='paper'
    const randomMove=rps_generator();
    if(randomMove===playerMove){
        result='Tie'
    }else if(randomMove==='scissor'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove, playerMove)
}

function scissor(){
    let playerMove='scissor'
    const randomMove=rps_generator();
    if(randomMove===playerMove){
        result='Tie'
    }else if(randomMove==='rock'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove, playerMove)
}

function rps_generator(){
    const random_Number=Math.random();
    let computerMove='';

    if (0<random_Number && random_Number<1/3){
        computerMove='rock';
    }else if(1/3<random_Number && random_Number<2/3){
        computerMove='paper';
    }else if(2/3<random_Number && random_Number<1){
        computerMove='scissor';
    }
    return computerMove;
}

function reset(){
    score.win=0
    score.lose=0
    score.tie=0
    localStorage.removeItem('score')
    updateScore()
}

let isAutoplay = false
let intervalID

function autoplay(){
    if (!isAutoplay) {
    intervalID = setInterval(function(){
        const player_Move=rps_generator()

        if (player_Move==='rock') {
            rock()
        }
        else if (player_Move==='scissor'){
            scissor()
        }
        else if (player_Move==='paper'){
            paper()
        }
    }, 2000)
    isAutoplay = true
    }
    else{
        clearInterval(intervalID);
        isAutoplay=false;
    }
}

function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins : ${score.win}, Losses : ${score.lose}, Ties : ${score.tie}`
}

function scores(result, computerMove, playerMove){
    if (result==='You win!'){
        score.win+=1
    }else if(result==='You lose!'){
        score.lose+=1
    }else{
        score.tie+=1
    }
    localStorage.setItem('score', JSON.stringify(score))
    updateScore()
    print_scores(result, computerMove, playerMove)
}

updateScore()

function print_scores(results, computerMove, playerMove){
    document.querySelector('.js_result').innerHTML=results
    document.querySelector('.js_moves').innerHTML=`You <img src="images/${playerMove}.png" alt="${playerMove}" class="move_result_icon"> - <img src="images/${computerMove}.png" alt="${computerMove}" class="move_result_icon"> Computer`
}
