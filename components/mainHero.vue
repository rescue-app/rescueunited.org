<template>
    <div class="nk-banner" id="mainHero">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <b-col md="6">
                    <div class="nk-banner-block tc-light">
                        <div class="content mt-4 mt-sm-0">
                            <h1>Rescue United</h1>
                            <h2 class="d-none d-sm-block text-nowrap">Talent in action for a purpose</h2>
                            <h2 class="d-sm-none">Talent in action for a purpose</h2>
                            <p>Skill-based community of remote volunteers, where professionals can donate their talent for a purpose</p>
                            <p>
                                <b-button class="d-block d-md-none mt-3 bg-white text-dark" squared size="lg" variant="light" to="/current-projects">Projects</b-button>
                                <b-button class="d-none d-md-inline  bg-white text-dark" squared size="lg" variant="light" to="/current-projects">Projects</b-button>
                                
                                <b-button class="d-block d-md-none mt-3 bg-white text-dark" squared size="lg" variant="light" to="/volunteering">Volunteering</b-button>
                                <b-button class="d-none d-md-inline bg-white text-dark" squared size="lg" variant="light" to="/volunteering">Volunteering</b-button>
                            </p>
                            <p class="mt-4 ds-wrapper">
                                #andyou
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col md="4" class="d-none d-md-block" style="overflow:hidden;">
                    <!-- <video class="d-none d-md-block w-100" style="margin-top:-2px;" autoplay muted loop>
                        <source src="~/assets/videos/rescueapp-header-video.mp4" type="video/mp4">
                    </video> -->
                    <div class="d-none d-md-block w-100"><img src="~/assets/videos/rescueapp-header-video.gif" alt="" /></div>
                    <div class="d-md-none d-flex justify-content-center"><img class="h-50 w-50" src="~/assets/images/tu-red-de-ayudas.jpg" alt="" /></div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ds-wrapper {
    max-height: 100px;
    overflow: hidden;
}
.data {
    width: 100%;
    height: 100%;
    max-width: 330px;
    pointer-events: none;
    overflow: scroll;
}
</style>
