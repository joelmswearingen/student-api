// this describes where to send any requests that are made by the Vue client

module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}