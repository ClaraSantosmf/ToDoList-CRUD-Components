import axios from 'axios'

export default {
    getTasks: (callback) => {
        axios.get('http://localhost:300/tasks/').then((response) => {callback(response.data)
        })
    },
}