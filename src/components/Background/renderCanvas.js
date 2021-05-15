export default function renderCanvas(
  canvas = document.createElement("canvas")
) {
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(255,0,0,0.14)";
  ctx.fillRect(0, 0, w, h);

  var fontSize = 16;
  var columns = Math.floor(w / fontSize);
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops.push(0);
  }
  var str = "JavaScript function(){}";

  function draw() {
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, w, h);
    ctx.font = "700 " + fontSize + "px  微软雅黑";
    ctx.fillStyle = "#eee";
    for (var i = 0; i < columns; i++) {
      var index = Math.floor(Math.random() * str.length);
      var x = i * fontSize;
      var y = drops[i] * fontSize;
      ctx.fillText(str[index], x, y / 3);
      if (y >= canvas.height && Math.random() > 0.99) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  draw();
  var siv = setInterval(draw, 10);

  return function cleanCanvas() {
    clearInterval(siv);
  };
}
