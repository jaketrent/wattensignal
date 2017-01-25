const fs = require('fs')
const koa = require('koa')
const path = require('path')
const mount = require('koa-mount')
const route = require('koa-route')
const serve = require('koa-static')

const app = koa()

app.use(mount('/static', serve(path.resolve('static'))))

app.use(route.get('/', index))

function* index() {
  this.body = fs.readFileSync(path.resolve(path.join('static', 'index.html')), 'utf8')
}

app.listen(process.env.PORT || 3000)
