<template>
    <section class="section section-l bg-light section-protect pb-0" id="aboutUs">
        <div class="section-head text-center wide-lg">
            <h5 class="subtitle">What do we do?</h5>
            <h2 class="title">About us</h2>
            <p>
                We are a non-profit organization focused on applying technology to maximize impact solving social problems.
                <br>
                Connecting non-profit projects related to the <nuxt-link to="https://sustainabledevelopment.un.org">Sustainable Development Goals</nuxt-link> with professionals looking for a purpose and willing to donate their skills and time.
            </p>
        </div>
        <InfographicSection />
        <Principles />
        <HowItWorks />
    </section>
</template>

<script>
import InfographicSection from '@/components/infographicSection'
import Principles from '@/components/principles'
import HowItWorks from '@/components/howItWorks'

export default {
    components: {
        InfographicSection,
        Principles,
        HowItWorks
    }
}
</script>
