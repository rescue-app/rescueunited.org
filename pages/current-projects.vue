<template>
    <div>
        <SmallHero />
        <div class="container mt-4 mb-3">
            <div class="section-content">
                <div class="row g-gs justify-content-between" style="margin-top: 3em;">
                    <div class="col">
                        <div class="text-block">
                            <h3 class="title text-center">CURRENT PROJECTS</h3>
                            <p class="lead mb-0 text-center">These are our current projects. You can <strong><nuxt-link to="/propose-a-project">propose a new one</nuxt-link></strong>, or <strong><nuxt-link to="/volunteering">sign up as a volunteer</nuxt-link></strong></p>

                            <div class="col" v-if="loading">
                                <div class="spinner-border spinner-border-sm" role="status"></div>&nbsp;
                                <span class="font-weight-bold">Loading...</span>
                            </div>

                            <div v-else>
                                <div v-for="project in projects" :key="project.id" class="search-result">
                                    <h6 class="mb-1 text-uppercase"><small><strong>{{ project.country }}</strong></small></h6>
                                    <p>
                                        <span v-for="cause in project.causes" :key="cause">
                                            <b-badge variant="info">{{ cause }}</b-badge>&nbsp;
                                        </span>
                                    </p>
                                    <h4 class="mb-0 text-dark">{{ project.title }}</h4>
                                    <p class="text-dark">{{ project.projectBrief }}</p>
                                    <p>
                                        <small>
                                            <span v-for="skill in project.skills" :key="skill">
                                                <b-badge variant="light" class="text-info m-0 p-0">{{ skill }}</b-badge>&nbsp;
                                            </span>
                                        </small>
                                    </p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'

export default {
    components: {
        SmallHero,
    },
    async fetch () {
        const requestUrl = `https://api.rescueunited.org/project?limit=50`
        try {
            this.projects = await this.$http.$get(requestUrl);
        } catch (ex) {
            this.projects = false
        } finally {
            this.loading = false
        }
    },
    data () {
        return {
            projects: [],
            loading: true,
        }
    },
    fetchOnServer: false,
}
</script>

<style scoped>
.search-result:not(:last-child) {
    border-bottom: 1px #87C4EA dotted;
    margin-bottom: 2em;
    padding-bottom: 1em;
    padding-top: 1em;
}
</style>