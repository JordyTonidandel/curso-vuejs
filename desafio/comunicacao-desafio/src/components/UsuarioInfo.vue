<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarNomeCallBackFilho">Reiniciar nome Call Back</button>
    </div>
</template>

<script>
import barramento from "./barramento";
export default {
  props: {
    nome: {
      type: String,
      required: false,
      default: "Anônimo",
      // default: function() {
      //   return Array(10).fill(0).join(',')
      // }
    },
    reiniciarNomeCallBackFilho: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = "Pedro";
      this.$emit("nomeMudou", {
        antigo,
        novo: this.nome,
      });
    },
  },
  created() {
    barramento.$on("idadeMudou", (_idade) => {
      this.idade = _idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
