const fs = require('fs').promises
function FileSystemDataSource(databasePath = '') {
    this.databasePath = databasePath

    this.readCollection = function readCollection(collectionName = '') {
        const collectionPath = `${this.databasePath}/${collectionName.toLowerCase()}.txt`

        return fs.readFile(collectionPath)
            .then(data => {
                const parsedData = JSON.parse(data) || []
                return parsedData
            })
            .catch(err => {
                console.log(err);
                return []
            })
    }

    this.updateCollection = function updateCollection(collectionName = '', newData) {
        const collectionPath = `${this.databasePath}/${collectionName.toLowerCase()}.txt`
        return fs.writeFile(collectionPath, JSON.stringify(newData)).catch(() => {
            // create database folder in case error due to database folder does not exist
            return fs.mkdir(database)
                .then(() => fs.writeFile(this.databasePath, JSON.stringify(existingItems)))
                .catch(err => {
                    console.log(err);
                })
        })
    }
}

module.exports = FileSystemDataSource