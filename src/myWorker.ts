(async () => {
  console.log(`[Worker A] Running`);

  while (1) {
    console.log(`[Worker A] I'm looping!`);
    await new Promise(resolve => { setTimeout(resolve, 500); });
  }
})();

