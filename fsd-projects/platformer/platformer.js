$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 650, 100, 100);
    createPlatform(300, 600, 100, 100);
    createPlatform(900, 650, 100, 100);
    createPlatform(550, 650, 100, 100);
    createPlatform(500, 550, 30, 200);
    createPlatform(650, 450, 800, 50);
    createPlatform(1300, 350, 100, 100);
    createPlatform(900, 350, 150, 20);
    createPlatform(900,350,100,100);
    createPlatform(400, 330, 300, 10);
    createPlatform(600, 150, 800, 10);
    createPlatform(300, 250, 100, 100);

    // TODO 3 - Create Collectables
    createCollectable("max", 1350, 700);
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 1050,400)

    // TODO 4 - Create Cannons
    createCannon("right", 700, 2000);
    createCannon("right", 250, 2000);
    createCannon("top", 250, 1000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
