<template>
<div>
    <div> <!--States-->
    <state-summary v-bind:states="states">
    </state-summary>
    </div>

    <div class="state-list-container"> <!--State Container-->
     <div class="state-container" v-for="state in states" v-bind:key="state.name">
         <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited"
          ></state-detail>
     </div>    
    </div>
</div>
</template>

<script>
//imprting from components
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'

export default {
    components: { 
        StateDetail,
        StateSummary 
        }, 
    name: 'StateList',
    data() {
        return {
            states: [] //returns the array of states
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() { //getting all states
            this.$stateService.getAllStates().then(states => {
                this.states = states
            })
            .catch( err => {
                alert('Sorry can\'t fetch state list')
                console.error(err)
            })
        },
        updateVisited(stateName, visited) { // updating visited methode
            this.$stateService.setVisited(stateName, visited).then(response => {
                this.fetchAllStates() 
            })
            .catch( err => {
                alert('Sorry can\'t update state')
                console.error(err)
            })
        }
    }
}


</script>

<style scoped>
.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.state-container {
    margin: 1rem;
}
</style>
