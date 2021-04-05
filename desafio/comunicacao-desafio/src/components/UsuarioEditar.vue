<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ idadeData}}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from "./barramento";

export default {
  props: {
    idade: Number,
  },
  data() {
    return {
      idadeData: Number,
    };
  },
  mounted() {
    this.idadeData = this.idade;
  },
  methods: {
    alterarIdade() {
      this.idadeData = 30;
      barramento.$emit("idadeMudou", this.idadeData);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
