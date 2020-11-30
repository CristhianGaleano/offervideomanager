module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/apps/oferta/'
    : '/'
}

// Para solucionar error de producción hay que dominar el modo history o hash y su configuraración que involucra indicarle al servidor con parametros especiales para este dependiendo del tipo de servidor de aplicaciones:
// tutorial: https://escuelavue.es/series/curso-vue-router-espanol/vue-router-historia/