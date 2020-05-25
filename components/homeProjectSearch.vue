<template>
    <div class="container">
        <div class="section-head text-center wide-lg pb-0">
            <h5 class="subtitle">Search for a project where you can help</h5>
            <h2 class="title">Join the challenge</h2>
        </div>

        <div class="section-content">
            <project-search />
        </div>
    </div>
</template>

<script>
import ProjectSearch from '@/components/projectSearch'
export default {
    components: {
        ProjectSearch
    }
}
</script>

<style scoped>
    .container {
        margin-top: 3em;
    }
</style>