exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        message: message
    });
}

exports.error = function (req, res, error, status) {
    res.status(status || 500).send({
        error: error,
        message: ''
    })
}