<template>
    <div>
        <MainHero />
        <Goals />
        <AboutUs />
        <ValuesContainer />
        <Facts />
        <Manifest />
        <Contact />
    </div>
</template>

<script>
import MainHero from '@/components/mainHero'
import AboutUs from '@/components/aboutUs'
import ValuesContainer from '@/components/valuesContainer'
import Facts from '@/components/facts'
import Manifest from '@/components/manifest'
import Contact from '@/components/contact'
import Goals from '@/components/goals'
export default {
    components: {
        MainHero,
        AboutUs,
        ValuesContainer,
        Facts,
        Manifest,
        Contact,
        Goals
    }
}
</script>
