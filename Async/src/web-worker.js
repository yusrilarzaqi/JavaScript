const showLog = total => {
  for (let i = 0; i < total; i++) {
    console.info(i);
  }
}

addEventListener("message", event => {
  const total = event.data;
  showLog(total);
  postMessage("Done !");
})
