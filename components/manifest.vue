<template>
    <section class="section section-l bg-accent-light section-treatment has-overlay mt-3" id="whoAreWe">
        <div class="overlay shape"></div><!-- Overlay Shape -->
        <div class="container">
            <div class="section-content">
                <div class="row g-gs gy-sm-m justify-content-between align-items-center">
                    <div class="col-lg-7 col-xl-6">
                        <div class="text-block">
                            <h5 class="subtitle">Team</h5>
                            <h2 class="title">#andyou</h2>
                            <p> <strong>Initiative possible thanks to all these collaborators</strong></p>
                            <PartnerLogoContainer style="background-color: #FFFFFF;" />
                            <p>We support the <a href="https://sustainabledevelopment.un.org/?menu=1300" target="_blank">Sustainable Development Goals</a></p>
                        </div><!-- .text-block -->
                    </div><!-- .col -->
                    <div class="col-lg-5">
                        <div class="box5 bg-accent-dark tc-light">
                            <h6 class="title">Manifesto</h6>
                            <ul class="list-arrow">
                                <li>We are entrepreneurs: crisis-proof survivors.</li>
                                <li>We are the engine of innovation.</li>
                                <li>Using technology to solve problems is our DNA.</li>
                                <li>We improve with data.</li>
                                <li>We've built our world by learning from each other.</li>
                                <li>The Internet is our universe and we have to make ourselves heard.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PartnerLogoContainer from '@/components/partnerLogoContainer'

export default {
    components: {
        PartnerLogoContainer
    }
}
</script>
