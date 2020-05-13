<template>
    <div class="nk-banner" id="mainHero">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <b-col md="6">
                    <div class="nk-banner-block tc-light">
                        <div class="content mt-4 mt-sm-0">
                            <h1>Rescue United</h1>
                            <h2>Talent in action for a purpose</h2>
                            <p>Non-profit incubator and accelerator, where professionals can donate their talent remotely</p>
                            <p>
                                <b-button class="d-md-none" block squared to="/participar">Participar</b-button>
                                <b-button class="d-none d-md-inline" squared size="lg" to="/participar">Participar</b-button>
                            </p>
                            <p class="mt-4 ds-wrapper">
                                #andyou
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col md="4" class="d-none d-md-block" style="overflow:hidden;">
                    <video class="d-none d-md-block w-100" style="margin-top:-2px;" autoplay muted loop>
                        <source src="~/assets/videos/rescueapp-header-video.mp4" type="video/mp4">
                    </video>
                    <!-- <div class="d-none d-md-block w-100"><img src="~/assets/videos/rescue-app-header-animation.gif" alt="" /></div> -->
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
