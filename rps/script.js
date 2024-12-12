let score={win:0, lose:0, tie:0}
let result=''

function rock(){
    const randomMove=rps_generator();
    if(randomMove==='Rock'){
        result='Tie'
    }else if(randomMove==='Paper'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove)
}

function paper(){
    const randomMove=rps_generator();
    if(randomMove==='Paper'){
        result='Tie'
    }else if(randomMove==='Scissor'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove)
}

function scissor(){
    const randomMove=rps_generator();
    if(randomMove==='Scissor'){
        result='Tie'
    }else if(randomMove==='Rock'){
        result='You lose!'
    }else{
        result='You win!'
    }
    scores(result, randomMove)
}

function rps_generator(){
    const random_Number=Math.random();
    let computerMove='';

    if (0<random_Number && random_Number<1/3){
        computerMove='Rock';
    }else if(1/3<random_Number && random_Number<2/3){
        computerMove='Paper';
    }else if(2/3<random_Number && random_Number<1){
        computerMove='Scissor';
    }
    return computerMove;
}

function scores(result, Move){
    if (result==='You win!'){
        score.win+=1
    }else if(result==='You lose!'){
        score.lose+=1
    }else{
        score.tie+=1
    }
    print_scores(Move)
}

function print_scores(random){
    alert(`You picked Scissor. Computer picked ${random}. ${result}\nWins:${score.win}, Losses:${score.lose}, Ties:${score.tie}`)
}
