<template>
    <div id="block-header"> 
        <h1 id="title">Have you visited every state? </h1>
    </div>
</template>

<script>
export default {
    name: 'PageHeader', 
}
</script>

<style scoped>

#block-header {
    padding: 2rem 1 rem;
    margin-bottom: 2 rem;
    border-radius: .3rem;
    background-color: rgba(82, 243, 221, 0);
    background-image: url('~@/assets/photo-header.jpg');
    background-position: center;
    background-size: cover;
}

#title {
    font-weight: 800;
    color:darkgreen;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>