<template>
    <div>
        <MainHero />
        <HomeProjectSearch />
        <Goals />
        <AboutUs />
        <Facts />
        <ValuesContainer />
        <Manifest />
        <Contact />
    </div>
</template>

<script>
import MainHero from '@/components/mainHero'
import HomeProjectSearch from '@/components/homeProjectSearch'
import AboutUs from '@/components/aboutUs'
import ValuesContainer from '@/components/valuesContainer'
import Facts from '@/components/facts'
import Manifest from '@/components/manifest'
import Contact from '@/components/contact'
import Goals from '@/components/goals'
export default {
    components: {
        MainHero,
        HomeProjectSearch,
        AboutUs,
        ValuesContainer,
        Facts,
        Manifest,
        Contact,
        Goals
    }
}
</script>
