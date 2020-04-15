const store = require('./store');

const addMessage = (chat, user, message) => {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('NO hay chat de usuario o mensaje')
            reject('No hay usario o mensaje')
            return false
        }
        const fullMessage = {
            chat,
            user,
            message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
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

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('id invalido');
            returnfalse;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });

    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}