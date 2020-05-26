<template>
    <div>
        <div class="row mt-4 mb-4">
            <div class="col">
                <form @submit.prevent="search">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="input-group">
                                <input v-model="userQuery" class="form-control form-control-lg" id="query" autocomplete="off" :readonly="this.loading" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary rounded-0" type="submit" :disabled="this.loading">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mb-4" v-if="shouldShowResults">
            <div class="col" v-if="loading">
                <div class="spinner-border spinner-border-sm" role="status"></div>&nbsp;
                <span class="font-weight-bold">Loading...</span>
            </div>

            <div class="col" v-if="performedSearch">
                <div v-if="!hasResults">
                    <strong>No results :(</strong>
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
</template>

<script>

export default {
    props: {
        query: {
            type: String,
            required: false,
            default: '',
        }
    },
    data () {
        return {
            userQuery: '',
            projects: [],
            loading: false,
            performedSearch: false,
        }
    },
    computed: {
        shouldShowResults () {
            return this.userQuery !== '' 
        },

        hasResults () {
            if(!Array.isArray(this.projects)) {
                return false;
            }

            return this.projects.length > 0;
        }
    },
    methods: {
        async search () {
            const requestUrl = `https://api.rescueunited.org/project/search?query=${encodeURIComponent(this.userQuery)}`;
            this.loading = true
            this.projects = [];
            this.performedSearch = false;

            try {
                this.projects = await this.$http.$get(requestUrl);
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
                this.performedSearch = true;
            }
        },
    }

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