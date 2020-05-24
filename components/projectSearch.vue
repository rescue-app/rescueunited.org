<template>
    <div>
        <div class="row mt-4 mb-4">
            <div class="col">
                <form @submit.prevent="search">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="input-group">
                                <input v-model="userQuery" class="form-control form-control-lg" id="query" :readonly="this.loading" />
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
                    <div v-for="result in results" :key="result.id" class="search-result pb-2">
                        <h6 class="mb-1 text-uppercase"><small><strong>{{ result.cause }} in {{ result.companyName }}</strong></small></h6>
                        <h4 class="mb-0">{{ result.companyName }}</h4>
                        <p>{{ result.projectBrief }}</p>
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
            results: [],
            loading: false,
            performedSearch: false,
        }
    },
    computed: {
        shouldShowResults () {
            return this.userQuery !== '' 
        },

        hasResults () {
            if(!Array.isArray(this.results)) {
                return false;
            }

            return this.results.length > 0;
        }
    },
    methods: {
        async search () {
            const requestUrl = `https://api.rescueunited.org/project/search?query=${encodeURIComponent(this.userQuery)}`;
            this.loading = true
            this.results = [];
            this.performedSearch = false;

            try {
                this.results = await this.$http.$get(requestUrl);
                console.log(this.results);
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
}
</style>