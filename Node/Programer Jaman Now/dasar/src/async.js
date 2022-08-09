function samplePromise() {
  return Promise.resolve("Yusril")
}

async function main() {
  const nama = await samplePromise();
  console.info(nama)
}

main();



