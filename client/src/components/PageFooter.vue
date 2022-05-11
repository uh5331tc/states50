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
            <p> Header image by <a href="https://unsplash.com/photos/L75D18aVal8">@ganapathykumar on unsplash</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
}
</script>

<style scoped>

.nav-link {
    margin: 1rem;
}
</style>