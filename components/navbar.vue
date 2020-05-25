<template>
    <div>
        <b-container class="pl-0 pr-0">
            <b-navbar toggleable="lg" fixed="top" class="bg-white pl-md-5 pr-md-5" v-b-scrollspy="20">
                <b-navbar-brand to="/" class="m-0">
                    <img style="width: 200px" src="~/assets/images/logo-rescueapp.png" alt="RescueUnited logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/#mainHero" @click="scrollTo('#mainHero')">Home</b-nav-item>
                        <b-nav-item to="/#theChallenge" @click="scrollTo('#theChallenge')">The challenge</b-nav-item>
                        <b-nav-item to="/#aboutUs" @click="scrollTo('#aboutUs')">About us</b-nav-item>
                        <b-nav-item to="/#values" @click="scrollTo('#values')">Values</b-nav-item>
                        <b-nav-item to="/#whoAreWe" @click="scrollTo('#whoAreWe')">¿Who are we?</b-nav-item>
                        <b-nav-item to="/#contact" @click="scrollTo('#contact')">Contact</b-nav-item>
                        <b-button squared class="d-none d-lg-block ml-lg-3" to="/volunteering" @click="removeActiveClass">Propose a project</b-button>
                        <b-button squared class="d-none d-lg-block ml-lg-3" to="/volunteering" @click="removeActiveClass">Volunteering</b-button>
                        <b-nav-item class="d-lg-none" to="/volunteering" @click="removeActiveClass">
                            <span class="font-weight-bold text-success">Participate</span>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
export default {
    mounted () {
        // From testing, without a brief timeout, it won't work.
        if (this.$route.hash) {
            setTimeout(() => this.scrollTo(this.$route.hash), 1)
        }
    },
    methods: {
        scrollTo (hashbang) {
            setTimeout(() => { location.href = hashbang }, 1)
        },
        removeActiveClass () {
            const active = document.getElementsByClassName('active')
            while (active.length) { active[0].classList.remove('active') }
        }
    }
}
</script>

<style scoped>
.btn {
    font-size: .9em;
}
</style>