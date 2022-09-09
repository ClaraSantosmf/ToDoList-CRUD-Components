<template>
  <div id="app">
    <h1>To Do - Controle sua vida</h1>
    <listaDeTasks  
    :tasks="tasks"
    @deletarTask="taskDeletada" 
    @mudandoEstadoTarefa="mudadoEstado" 
    /> 
    <NovaTarefa @AdicionandoTask="taskAdicionada"></NovaTarefa>
  </div>
</template>

<script>
import listaDeTasks from './components/listaDeTasks.vue'
import NovaTarefa from './components/NovaTarefa.vue'


export default {
  components: { listaDeTasks, NovaTarefa },
  data(){
    return{
      tasks: []
    }
  },
  methods:{
    taskAdicionada(task){
      this.tasks.push({
        title: task.title,
        project: task.project,
        dueTo: task.dueTo,
        pending: task.pending || true,
        isShow: task.isShow
      })
    },
    taskDeletada(id){
      this.tasks.splice(id, 1)
    },
    mudadoEstado(id){
      this.tasks[id].pending = !this.tasks[id].pending
    }
  }
}
</script>

<style>
body{
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
