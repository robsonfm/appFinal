const _ = require('lodash')
const nodeRestful = require('node-restful')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        const errors = parseErros(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

const parseErros = (nodeRestfulErros) => {
    const errors = []
    _.forIn(nodeRestfulErros, error => errors.push(error.message))
    return errors
}