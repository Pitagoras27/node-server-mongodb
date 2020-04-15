const Model = require('./model')

console.log('Connected successful!')

const addMessage = (message) => {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            });
    })
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
