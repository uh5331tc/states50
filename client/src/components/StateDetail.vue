<template>

<div class="state-info">
    <span class="state-name">{{ state.name }}</span>

    <div>
        <input class="visit-state" type="checkbox">
    </div>


</div>

</template>


<script>
        export default {
        name: 'StateDetail',
        props: {
            state: Object
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
</style>