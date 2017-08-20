window.onload = () => {
  // Params
  const scriptPram = document.getElementById('load_widget');
  const id = scriptPram.getAttribute('data-page');

  // iFrame
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  iframe.width = 560;
  iframe.height = 315;
  iframe.border = 0;
  iframe.src = "http://0.0.0.0:3000/embed/" + id;

}