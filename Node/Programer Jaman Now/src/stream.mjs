import fs, {read} from 'fs'

const filePath = './target.log'

const writer = fs.createWriteStream(filePath)
writer.write("Yusril\n")
writer.write("Arzaqi\n")
writer.close()


const reader = fs.createReadStream(filePath)
reader.on('data', (data) => {
  console.log(data.toString())
  reader.close()
})



