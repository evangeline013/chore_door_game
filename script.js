let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};

const randomChoreDoorGenerator = () => {
  let numClosedDoors = 3;
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

randomChoreDoorGenerator();
