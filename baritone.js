const playerX = window.stores.phaser.mainCharacter.body.x;
const playerY = window.stores.phaser.mainCharacter.body.y;
const destinationX = prompt("X DESTINATION");
const destinationY = prompt("Y DESTINATION");

function movePlayer() {
    if (playerX < destinationX) {

    };

    if (playerX > destinationX) {

    };

    if (playerY < destinationY) {

    };

    if (playerY > destinationY) {

    };
    requestAnimationFrame(movePlayer());
};

movePlayer();
