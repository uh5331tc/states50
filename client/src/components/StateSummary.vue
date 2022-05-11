<template>
    <div> 
        <p>There are a total of {{ states.length }} states and the District of Columbia</p>
        <p>You have visited {{ totalVisited }} states! </p>

        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the DoC!</p>
    </div>
</template>

<script>
export default {
    name: 'StateSummary', //exporting state summary
    props: {
        states: Array,  //added a COMMA exapmle code had one
    },
    computed: {
        totalVisited() { //getting the count for states visited
            let visitedCount = 0
        this.states.forEach( state => {
            if (state.visited) {
                visitedCount++
            }
        })
        return visitedCount
    },
    units() { // displaying correct wording
        if (this.totalVisited === 1 ) {
            return 'state'
        } else {
            return 'states'
        }
    },
    areAllVisited() { //checkign to see if all states were visited
        return this.totalVisited === this.states.length
    }
}
}
</script>

<style>
.all-visited-message {
    color:blueviolet;
    font-weight: 600;
}
</style>