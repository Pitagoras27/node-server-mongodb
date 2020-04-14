const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject('No hay usario o mensaje')
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid Data')
            return false
        }

        const result = await store.updateText(id, message)
        resolve(result)
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}