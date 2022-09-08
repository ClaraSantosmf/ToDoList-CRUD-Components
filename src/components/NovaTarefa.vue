<template>
  <div class="nova-tarefa">
      <div class="novaTarefaForm">
    <form action="">
            <input placeholder="Title" id="title" type="text" v-model="title"/>
            <label for="title">Tarefa</label>

        <div class="selecaoDeProjeto">
            <select id="project" v-model="project">
            <option value="" disabled selected 
            >Choose your option</option>
            <option value="Estudos">Estudos</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Trabalho">Trabalho</option>
            </select>
            <br>
            <label for="project">Escolha o tipo de projeto</label>
        </div>

        <div class="selecaoDeData">
            <input v-model="dueTo" type="date" id="dueTo" data-inputmask="'alias': 'date'"/> <br>
            <label for="dueTo">Qual é a data limite?</label>
        </div>
        <button class="waves-effect waves-light btn-large" id="btnSave" @click.prevent="salvarTask">Save</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
                title: "",
                project: "",
                dueTo: "",
                isShow: false,
                pending: true,
            }
        },
    methods:{
        salvarTask() {
            this.$emit('AdicionandoTask', {title: this.title, project: this.project, dueTo: this.dueTo, isShow: this.isShow, pending: this.pending})
            this.title = ''
        },
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nova-tarefa{
    display: flex;
    justify-content: center;
    align-items: center;
}
.novaTarefaForm{
    display: flex;
}
form{
    flex-direction: column;
    align-content: center;
    margin: 20px;
    padding: 30px;
    display: flex;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    background: radial-gradient(#76b2fe, #b69efe);
    border-radius: 10px;
} 

input, select{
    font-size: 20px;
}
</style>

<!-- https://codepen.io/ericmahoney/pen/oNLMOYw -->