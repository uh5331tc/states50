<template>
    <div class="state-info"> <!-- Getting the states information -->
        <span class="state-name">{{ state.name }}</span>

        <div><!--check box making-->
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="updateVisited"> <!-- OR "visitedChanged???" -->
        </div>

        <div> <!--/map/iowa or /map/california -->
            <router-link v-bind:to="{ name: 'StateMap', params: { state: state.name} }">
            <img class="map-icon" src="@/assets/map_icon.png"> 
            </router-link>
        </div>
    </div>
</template>

<script>
        export default {
        name: 'StateDetail',  //semds message to parent state list
        emits: ['update-visited'],
        props: {
            state: Object,  // dont modify... ADDED MISSING(?) COMMA AS SHOWN IN EXAMPLE CODE
        },
        data() {  
            return {
                visited: this.state.visited // ok to modify data
            }
        },
        methods: {
            updateVisited() {
                this.$emit('update-visited', this.state.name, this.visited)
            }
        }
    }
</script>

<style scoped> 
.state-info {
    padding: 1rem;
    height: 2rem;
    width: 4rem;
    border: 5px; 
    border-color: blueviolet;
    border-radius: .3rem;
    background-color: rgba(227, 50, 186, 0);
}

.visit-state {
    margin: 1 rem;
    text-align: center;
}

.map-icon {
    width: 2rem;
    height: 2rem;
}
</style>