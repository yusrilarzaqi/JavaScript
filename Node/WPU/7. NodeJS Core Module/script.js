
main();


function main() {
  return fetch('data/contacts.json')
    .then(response => response.json())
    .then(response =>{
      let result = '';
      response.forEach(m => {
        result += showData(m);
        console.log(m);
      });
      const content = document.querySelector('.content');
      content.innerHTML = result;
    });
}

function showData(data) {
  return `<ul>
    <li>Nama  : ${data.nama}</li>
    <li>No Hp : ${data.noHp}</li>
  </ul>`;
}