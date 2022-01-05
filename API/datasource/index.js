// const FileSystemDataSource = require("./file-system.datasource")

// const databbase = "./database"

// const DBCollection = {
//     task: "tasks",
// }

// const fileSystemDataSource = new FileSystemDataSource(databbase)

// module.exports = {DBCollection, fileSystemDataSource}

const fs = require("fs")

const dataSource = {
  getDataFromDatabase,
  writeDataToDatabase,
};

const getData = dataSource.getDataFromDatabase;
// console.log(dataSource.getDataFromDatabase);
getData("tasks");

function getDataFromDatabase(dataBase) {
  const dataPath = `../database/${dataBase}.json`;
  console.log(dataPath);
  //   return JSON.stringify(fs.readFile(dataPath));
  return JSON.parse(fs.readFile(dataPath));
}

function writeDataToDatabase(dataBase, newdata) {
    const dataPath = `../database/${dataBase}.json`
    fs.writeFileSync(dataPath, JSON.stringify(newdata))
}

module.exports = dataSource;