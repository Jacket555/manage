module.exports = {
    //axios域代理，解决axios跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'http://118.24.25.7:5000',
                changeOrigin: true,
            
            }
        }
    }
}