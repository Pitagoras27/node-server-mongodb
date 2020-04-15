const store = require('./store')

const addUser = () => {
    // se devuelve reject de la clase nativa de Promise para evitar 
    // implementar una nueva promesa aparte de la del store
    if (!name) return Promise.reject('Invalid Name')
    const user = {
        name,
    }

    return store.add(user)
}

module.exports = {
    addUser,
}