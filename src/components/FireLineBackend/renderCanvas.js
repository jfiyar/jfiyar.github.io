export default function renderCanvas(
  canvas = document.createElement("canvas")
) {
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  // ctx.fillStyle = "rgba(255,0,0,0.14)";
  // ctx.fillRect(0, 0, w, h);

  return function cleanCanvas() {};
}
