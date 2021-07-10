const serveStatic = require('serve-static')
const express = require('express')
const path = require('path')

const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

app.listen(process.env.PORT || 80)
console.log('server started!')