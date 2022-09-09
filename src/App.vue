<template>
  <div id="app">
    <h1>To Do - Controle sua vida</h1>
    <barraProgresso :progresso="progresso"> </barraProgresso>
    <listaDeTasks  
    :tasks="tasks"
    @deletarTask="taskDeletada" 
    @mudandoEstadoTarefa="mudadoEstado" 
    /> 
    <NovaTarefa @AdicionandoTask="taskAdicionada"></NovaTarefa>
  </div>
</template>

<script>
import barraProgresso from './components/barraProgresso.vue'
import listaDeTasks from './components/listaDeTasks.vue'
import NovaTarefa from './components/NovaTarefa.vue'


export default {
  components: { listaDeTasks, NovaTarefa, barraProgresso, },
  data(){
    return{
      tasks: []
    }
  },
  computed:{
    progresso(){
      let total = this.tasks.length
      let feitas = this.tasks.filter(tas => !tas.pending).length
      return Math.round(feitas/total * 100) || 0
    }
  },
  watch:{
    tasks: {
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))   
      }}
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
  },
  created(){
    let json = localStorage.getItem('tasks')
    this.tasks = JSON.parse(json) || []
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
