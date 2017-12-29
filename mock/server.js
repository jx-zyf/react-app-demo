const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')
const cors = require('koa2-cors');
const bodyParser = require('koa-body')();

const app = new Koa()
const router = new Router()

// 跨域
app.use(cors({
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// 访问静态资源
app.use(static(
    path.join(__dirname, '/public')
))

// 主页广告
router.get('/data/homead', async (ctx) => {
    ctx.body = require('./home/ad')
})

// 主页列表
const homeListData = require('./home/list')
router.get('/data/homelist/:cityname/:page', async (ctx) => {
    const pageSize = 1
    const { cityname, page } = ctx.params
    let filterData = homeListData.filter(item =>
        item.cityname === cityname
    )
    let hasMore = pageSize * page >= filterData.length ? false : true
    ctx.body = {
        result: filterData.slice(0, page * pageSize),
        hasMore: hasMore
    }
})

// 搜索页列表
const searchListData = require('./search/list')
router.get('/data/search/:cityname/:category/:keyword/:page', async (ctx) => {
    const pageSize = 1
    const { cityname, category, keyword, page } = ctx.params
    let filterData
    let filterData1 = searchListData.filter(item => 
        item.cityname === cityname
    )
    if (keyword === 'all') {
        filterData = filterData1.filter(item => 
            item.category.includes(category)
        )
    } else {
        filterData = filterData1.filter(item => 
            item.title.includes(keyword) || item.subTitle.includes(keyword)
        )
    }
    let hasMore = pageSize * page >= filterData.length ? false : true
    ctx.body = {
        result: filterData.slice(0, page * pageSize),
        hasMore: hasMore
    }
})

// 详情页 商家详情
const detailData = require('./detail/info')
router.get('/data/detail/info/:id', async (ctx) => {
    let { id } = ctx.params
    id = parseInt(id)
    const filterData = detailData.filter(item => 
        item.id === id
    )
    ctx.body = filterData
})

// 详情页 评论列表
const CommentData = require('./detail/comment')
router.get('/data/detail/comment/:id/:page', async (ctx) => {
    const pageSize = 2
    const { id, page } = ctx.params
    let filterData = CommentData
    let hasMore = pageSize * page >= filterData.length ? false : true
    ctx.body = {
        result: filterData.slice(0, page * pageSize),
        hasMore: hasMore
    }
})

// 登录
router.post('/data/login', bodyParser, async (ctx) => {
    const { username, password } = ctx.request.body
    if (username === 'linxun' && password === 'linxun') {
        ctx.body = {
            status: 1,
            msg: '登录成功'
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '用户名或密码错误'
        }
    }
})

// 收藏
router.get('/data/collect/:id', async (ctx) => {
    let { id } = ctx.params
    id = parseInt(id, 10)
    const filterData = detailData.filter(item => 
        item.id === id
    )
    ctx.body = filterData
})

// 订单
const orderListData = require('./user/orderList')
router.get('/data/orderList', async (ctx) => {
    ctx.body = orderListData
})

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(8000, () => {
    console.log('route-use-middleware is starting at port 8000')
})