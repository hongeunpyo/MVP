const app = require('./index.js')
var port = process.env.PORT || 2628

app.listen(port, () => console.log(`server is listening on port ${port}`))

module.exports = app;