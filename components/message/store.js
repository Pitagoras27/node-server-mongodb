const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://<user_name>:<password>@cluster0-gnypt.mongodb.net/<db_name>', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('Connected successful!')

const addMessage = (message) => {
    // list.push(message);
    const myMessage = new Model(message)
    myMessage.save()
}

const getMessages = async () => {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages,
}
