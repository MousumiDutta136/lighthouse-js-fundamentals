// to track the coordinates of the floats to help capture the best angles.
// Consider to go one space north means [x+0, y+1]
//to go one space south means [x+0, y-1]
//to go one space south means [x+1, y+0]
//to go one space south means [x-1, y+0]

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves){
  const parade = [0,0];
  
  for(let i = 0; i < moves.length; i++){
    if (moves[i] === "north"){
      parade[0] = parade[0] + 0;
      parade[1] = parade[1] + 1;      
    }else if(moves[i] === "south"){
      parade[0] = parade[0] + 0;
      parade[1] = parade[1] - 1; 
    }else if(moves[i] === "east"){
      parade[0] = parade[0] + 1;
      parade[1] = parade[1] + 0;
    }else if(moves[i] === "west"){
      parade[0] = parade[0] - 1;
      parade[1] = parade[1] + 0;
    }     
  }
  return parade;
}
console.log(finalPosition(moves));