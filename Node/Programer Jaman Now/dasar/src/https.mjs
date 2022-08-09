import https from "https";

const url = "https://hookb.in/r130XZdBoVHqk2XXklM3";

const request = https.request(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}, response => {
  response.addListener("data", data => {
    console.info(`Recive : ${data.toString()}`);
  });
});

const body = JSON.stringify({
  firstName: "Yusril",
  lastName: "Arzaqi",
});


request.write(body);
request.end();

