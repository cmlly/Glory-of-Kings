const express = require('express')
const app = express()

app.set('secret','hdjashka8dha3hdahdk')

app.use(require('cors')())
app.use(express.json());

app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3002, () => console.log('Example app listening on port 3002!'))