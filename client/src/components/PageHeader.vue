<template>
    <div id="block-header"> 
        <h1 id="title">Have you visited every state? </h1>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',  // naming page header
}
</script>

<style scoped>

#block-header {
    padding: 2rem 1 rem;
    height: 15rem; /*border image height*/
    margin-bottom: 2 rem;
    border-radius: .3rem;
    background-color: rgba(82, 243, 221, 0);
    background-image: url('~@/assets/photo-header.jpeg');
    background-position: center;
    background-size: cover;
}

#title {
    font-weight: 900;
    color:rgb(234, 250, 234);
    font-family:'Times New Roman', Times, serif
    }
</style>