// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// 設定 template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 路由設定
app.get('/', (req, res) => {
  res.render('index')
})

// 頁面路由設定
app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// 啟動並監聽 Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})