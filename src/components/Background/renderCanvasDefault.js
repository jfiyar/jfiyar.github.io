export default function (canvas = document.createElement("canvas")) {
  let w, h;
  const ctx = canvas.getContext("2d");
  const gradientColor = "#96e4f1";
  const bgColor = "#5694a1";

  function pain() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);

    const x = w / 2,
      y = h / 6,
      r = w / 2;
    var gradient = ctx.createRadialGradient(x, y, r, x, y, 0);
    gradient.addColorStop(0, bgColor);
    gradient.addColorStop(1, gradientColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }
  function updateSize() {
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    w = width;
    h = height;
    pain();
  }
  updateSize();
  window.addEventListener("resize", updateSize);

  return function cleanCanvas() {
    window.removeEventListener("resize", updateSize);
  };
}
