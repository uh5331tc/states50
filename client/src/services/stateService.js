import axios from 'axios' // importing axios 

export default {
    getAllStates() { // getting all states with axios
        return axios.get('/api/states').then( response => {
             return response.data
        })
    },
    setVisited(stateName, visited) { //setting visited states
        // example URL api/states/Wisconsin
        let requestData = { visited: visited }
        return axios.patch('/api/state/' + stateName, requestData).then( response => {
            return response.data  //returning the string 'ok' 
        })

    },
    getOneState(stateName) { // getting one state
        return axios.get('/api/state/' + stateName).then(response => {
            return response.data
        })
    }
}