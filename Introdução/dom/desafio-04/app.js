new Vue({
  el: '#app',
  data: {
    classe1: 'estilo1'
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 == 'estilo1' ? 'estilo2' : 'estilo1' 
      }, 1000 )
    },
  }
})