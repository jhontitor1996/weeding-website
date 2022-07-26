const playMp3 = document.getElementById("playMp3");
playMp3.src = "./bgm/1988-bgm.mp3";
let currentpos = 0,
  timer;
function initialize() {
  if (playMp3.paused) {
    playMp3.paused = false;
    playMp3.play();
  }
  timer = setInterval("scrollwindow()", 20);
}
function sc() {
  clearInterval(timer);
  console.log("stop");
}
function scrollwindow() {
  currentpos++;
  window.scroll(0, currentpos);
  if (currentpos >= document.body.scrollHeight) {
    sc();
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      currentpos = 0;
      initialize();
    }, 3000);
  }
}
document.onmousedown = sc; //停止
document.ondblclick = initialize; //开始

const tooltip = document.getElementById("tooltip");
if (window.name == "") {
  tooltip.style.opacity = 0.8;
  setTimeout(() => {
    tooltip.style.opacity = 0;
  }, 5000);
  console.log("首次被加载");

  window.name = "isReload"; // 在首次进入页面时我们可以给window.name设置一个固定值
} else if (window.name == "isReload") {
  console.log("页面被刷新");
}
