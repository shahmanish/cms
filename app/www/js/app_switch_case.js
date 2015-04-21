function WalkWithMyFeet() {
  this.go = function() {
    console.log("go walking");
  }
}

function DriveMyCar() {
  this.go = function() {
    console.log("go by car");
  }
}

function myFactory(methodOfTransport) {

  switch(methodOfTransport) {
    case "walk":
      return new WalkWithMyFeet();
    case "drive":
      return new DriveMyCar();
  }
}

var transport = myFactory("walk");
transport.go();
