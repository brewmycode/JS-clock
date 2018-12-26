const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secDeg = (seconds / 60) * 360;
  const minDeg = (mins / 60) * 360;
  const hourDeg = (hours / 12) * 360;

  secondHand.style.transform = `rotate(${secDeg + 90}deg)`;
  minuteHand.style.transform = `rotate(${minDeg + 90}deg)`;
  hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;

  if (seconds === 0) {
    secondHand.style.transitionDuration = "0s";
    minuteHand.style.transitionDuration = "0s";
    hourHand.style.transitionDuration = "0s";
  } else {
    secondHand.style.transitionDuration = "0.05s";
    minuteHand.style.transitionDuration = "0.05s";
    hourHand.style.transitionDuration = "0.05s";
  }
}

setInterval(setTime, 1000);
