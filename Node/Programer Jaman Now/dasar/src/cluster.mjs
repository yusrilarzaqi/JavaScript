import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  // Jalankan Worker

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", worker => {
    console.info(`Worker ${worker.id} is exited`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  const port = 8080;
  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  })

  server.listen(port);
  console.info(`Start Cluster Worker ${process.pid}`)
}


