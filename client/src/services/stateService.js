import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
             return response.data
        })
    },
    setVisited(stateName, visited) {
        // example URL api/states/Wisconsin
        let requestData = { visited: visited }
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data  //returning the string 'ok' 
        })

    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then(response => {
            return response.data
        })
    }
}