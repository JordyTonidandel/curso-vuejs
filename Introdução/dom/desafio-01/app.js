  new Vue ({
  el: '#desafio',
  data: {
    nome: 'Jordy Tonidandel',
    idade: '27',
    linkImagemGoogle: "https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png"
  },
  methods: {
    triplicarIdade : function() {
      return  this.idade * 3
    },
    numeroRandomico1Ou2: function() {
      return Math.random()
    }
  }
})

