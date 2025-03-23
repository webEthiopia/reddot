let computerMove= '';
let result= '';
const score={
  wins: 0, 
  losses: 0,
  ties: 0
};
if (result === 'You win.'){
  score.wins +=1;
}else if (result === 'You lose.'){
  score.losses +=1;
} else if (result === 'tie'){
  score.ties +=1;
}