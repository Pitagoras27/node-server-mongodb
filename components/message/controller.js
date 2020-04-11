function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject('No hay usario o mensaje')
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        console.log(fullMessage)
        resolve(fullMessage)
    })
}

module.exports = {
    addMessage,
}