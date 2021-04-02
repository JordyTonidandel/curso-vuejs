new Vue ({
  el: desafio,
  data: {
    valor: ""
  },
  methods: {
    alerta() {
      alert('Este é um alerta correto!')
    },
    capturar(event) {
      this.valor = event.target.value
    }
  }
})