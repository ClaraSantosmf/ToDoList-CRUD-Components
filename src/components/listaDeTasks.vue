<template>
  <div class="lista-de-tasks">
    <template v-if="tasks.length">
      <Task v-for="(task, id) in tasks" :key="task.title" @deletarTask="$emit('deletarTask', id)" @mudandoEstadoTarefa="$emit('mudandoEstadoTarefa', id)" :task="task"></Task>
    </template>
    <p v-else class="sem-tarefas">Tire uma folga! Sem tarefas</p>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {Task},
    props:{
        tasks: { type: Array, required: true }
    }
}
</script>

<style>
.lista-de-tasks{
  display: flex;
  justify-content: center;
}
</style>
