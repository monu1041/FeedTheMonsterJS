import { TimerTicking } from "../../timer-ticking";

self.onmessage = function (event) {
  console.log('EventData',event.data)
  const { mouse, message } = event.data;
  //  console.log('ValuesWWWW',TimerTicking)
  if (message == "intiParticle") {
    initParticle(mouse);
  }

  if (message == "handleParticlesUpdate") {
 //  new TimerTicking()
    handleParticlesUpdate();
  }
};

function initParticle(mouse) {
  console.log("*********");
}

function handleParticlesUpdate() {
  console.log("111$$$$$$$$$$$$$");
}
