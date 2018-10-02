let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let startButton = document.getElementById('start');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors)

  if (choreDoor == 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor == 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
}

const isBot = (door) => {
  if (door.src == botDoorPath) {
    return true;
  }
  return false;
}

const isClicked = (door) => {
  if (door.src == closedDoorPath) {
    return false;
  }
  return true;
}

const playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors == 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

const gameOver = (status) => {
  if (status == "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Gave over! Play again?";
  }
}
