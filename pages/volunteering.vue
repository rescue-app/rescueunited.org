<template>
    <div>
        <SmallHero />
        <div class="container mt-4 mb-3">
            <div class="section-content">
                <div class="row g-gs justify-content-between">
                    <div class="col">
                        <div class="text-block">
                            <h5 class="subtitle">CAN I JOIN?</h5>
                        </div>
                    </div>

                    
                </div>

                <div class="row g-gs justify-content-between">
                    <div class="col">
                        <div class="text-block">
                            <h3 class="title text-center">SEARCH FOR A PROJECT</h3>
                        </div>
                    </div>
                </div>
                <project-search />

                <div class="row g-gs justify-content-between" style="margin-top: 3em;">
                    <div class="col">
                        <div class="text-block">
                            <h3 class="title mb-0 text-center">JOIN OUR TEAM</h3>
                            <p class="lead mb-0 text-center">Complete the following form and join our remote network of volunteers!</p>
                            <p class="text-center">Tell us if you are interested in a specific project or not, and we will contact you as soon as there is match! Be ready to put your talent in action!  :)</p>
                            <Typeform class="w-100 mb-3" style="height: 500px" :hide-headers="true" :hide-footer="true" :opacity="0" :on-submit="onSubmit" url="https://info548263.typeform.com/to/ErFKVZ" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'
import ProjectSearch from '@/components/projectSearch'

export default {
    components: {
        SmallHero,
        ProjectSearch
    },
    methods: {
        onSubmit () {
            this.$ga.event({
                eventCategory: 'Forms',
                eventAction: 'Send Volunteer Form',
                eventLabel: 'volunteerSignup',
                eventValue: 1
            })
        }
    }
}
</script>
