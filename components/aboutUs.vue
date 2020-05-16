<template>
    <section class="section section-l bg-light section-protect pb-0" id="aboutUs">
        <div class="section-head text-center wide-lg">
            <h5 class="subtitle">What do we do?</h5>
            <h2 class="title">About us</h2>
            <p>
                We are a non-profit organization that aims to connect professionals with charitable institutions, where their skills can positively impact the world.
            </p>
        </div>
        <InfographicSection />
        <ExamplesVideo />
    </section>
</template>

<script>
import InfographicSection from '@/components/infographicSection'
import ExamplesVideo from '@/components/examplesVideo'
export default {
    components: {
        InfographicSection,
        ExamplesVideo
    }
}
</script>
