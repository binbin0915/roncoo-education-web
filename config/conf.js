if (process.env.NODE_ENV == 'development') {
  module.exports =  {
    title: '领课学院',
    baseUrl: 'http://192.168.1.185:5840/api',
  }
}else {
  module.exports =  {
    title: '领课学院',
    baseUrl: 'http://roncoo.iok.la/api',
  }
}
