<template>
    <div>
        <h2>Page not found</h2>
    <div id="go-home-link"> <!-- Navigation link with the route name-->

    <!--Would you like to <router-link v-bind:to="{ name: 'StateList' }">go to the home page?</router-link> -->

    <!-- Would you like to <router-link to="/">go to the home page?</router-link> -->

    </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}

</script>

<style scoped>
#go-home-link {
    margin: 2rem;
}
</style>