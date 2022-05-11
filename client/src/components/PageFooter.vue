<template>
    <div>
        <div class="navigation-links">
            <span class="nav-link">
            <router-link to="/">HOME</router-link>
            </span>
    <br>
            <span class="nav-link">
            <router-link to="/about">About this site</router-link>
            </span>
        <div>
            <p> Header image by <a href="https://unsplash.com/photos/L75D18aVal8">@ganapathykumar on unsplash</a>
            </p>

            <p><a target="_blank" href="https://icons8.com/icon/116828/map-grid">Map Icon</a>
            Map Icon by Icons 8<a target="_blank" href="">Icons8</a>
            </p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter', //naming page footer
}
</script>

<style scoped>

.nav-link {
    margin: 1rem;
}
</style>