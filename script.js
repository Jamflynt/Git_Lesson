function randomNum(){
  let ranNum = Math.floor(Math.random() * 20);
  if (ranNum === 1){
    alert("You have rolled a 1, It's not your day is it?")
  } else {
    alert(`You rolled a ${ranNum} congrats something happened`);
  };
};
