{
  // JSON
  const person = {
    firstName: "Yusril",
    lastName: "Arzaqi",
    address: {
      contry: "Indonesia",
      city: "Semarang",
    },
  }

  const json = JSON.stringify(person)
  const personAgain = JSON.parse(json)

  console.info(json)
  console.info(personAgain)
}
