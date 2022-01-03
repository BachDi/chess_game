// const FileSystemDataSource = require("./file-system.datasource")

// const databbase = "./database"

// const DBCollection = {
//     task: "tasks",
// }

// const fileSystemDataSource = new FileSystemDataSource(databbase)

// module.exports = {DBCollection, fileSystemDataSource}

const fs = require("fs")

function getDataFromDatabase(dataBase) {
    const dataPath = `../database/${dataBase}.json`

    return JSON.parse(fs.readFile(dataPath))
}

function writeDataToDatabase(dataBase, newdata) {
    const dataPath = `../database/${dataBase}.json`
    fs.writeFileSync(dataPath, JSON.stringify(newdata))
}