

var myRover = {
  position: [0,0], 
  direction: 'n',
};



function goForward(rover) {

  goOutofGrid(rover)

  rover.direction.toLowerCase()

  switch(rover.direction) {
    case 'n':
      rover.position[1]++
      break;
    case 'e':
      rover.position[0]++
      break;
    case 's':
      rover.position[1]--
      break;
    case 'w':
      rover.position[0]--
      break;
  }
  
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBack (rover) {

  goOutofGrid(rover)

  rover.direction.toLowerCase()

  switch(rover.direction) {
    case 'n':
      rover.position[1]--
      break;
    case 'e':
      rover.position[0]--
      break;
    case 's':
      rover.position[1]++
      break;
    case 'w':
      rover.position[0]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function changedirection (rover, dir) {  
  dir.toLowerCase()
 
  if ( rover.direction === 'n' ) {
    switch (dir) {
      case 'l':
        rover.direction = 'w'
        break;
      case 'r':
        rover.direction = 'e'
        break;    
    }
  } 
  else if ( rover.direction === 'e') {
    switch (dir) {
      case 'l':
        rover.direction = 's'
        break;
      case 'r':
        rover.direction = 'n'
        break;
    } 
  }
  else if ( rover.direction === 's') {
    switch (dir) {
      case 'l':
        rover.direction = 'e'
        break;
      case 'r':
        rover.direction = 'w'
        break;
    }
  }
  else if ( rover.direction === 'w') {
    switch (dir) {
      case 'l':
        rover.direction = 'n'
        break;
      case 'r':
        rover.direction = 's'
        break;
    }
  }
}





function Move (rover, command) {
    
  for ( var i = 0; i < command.length ; i++) {
    
    switch (command[i]) {
      case 'l':
       changedirection(rover, command[i])
       break;
      case 'r':
       changedirection(rover, command[i])
       break;
      case 'f':
        goForward(rover)
        break;
      case 'b':
        goBack(rover)
        break;
      default:
       alert('Error, only valid commands are f, b, l, or r. The command ' + command[i] + ' wont be executed.')
    }
  }
  alert ('The ship actual position is ' + '[' + rover.position + ']' + ' and it is facing ' + rover.direction.toUpperCase() );
}


function goOutofGrid (rover) {

  if (rover.position[0] >= 10 ) {
    rover.position[0] = -1;
  }
  else if (rover.position[0] <= -10){
    rover.position[0] = 1;
  }

  if (rover.position[1] >= 10) {
    rover.position[1] = -1;
  }
  else if (rover.position[1] <= -10){
    rover.position[1] = 1;
  }

}


Move (myRover, movement = prompt('Insert command:') )


