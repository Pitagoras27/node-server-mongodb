const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://db_user_learning:1Zi7dgNCHrPhJZrY@cluster0-gnypt.mongodb.net/telegrom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('Connected successful!')

const addMessage = (message) => {
    const myMessage = new Model(message)
    myMessage.save()
}

const getMessages = async (filterUser) => {
    if (filterUser !== null) {
        filterUser = { user: filterUser }
    }
    const messages = await Model.find(filterUser)
    return messages
}

const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()

    return newMessage
}

const removeMessage = id => {
    //Model.findByIdAndDelete(id);
    return Model.deleteOne({
        _id: id
    });

}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText,
    remove: removeMessage,
}
