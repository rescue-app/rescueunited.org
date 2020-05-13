<template>
    <div>
        <MainHero />
        <Goals />
        <WhatWeDo />
        <ValuesContainer />
        <Facts />
        <Manifest />
        <Contact />
    </div>
</template>

<script>
import MainHero from '@/components/mainHero'
import WhatWeDo from '@/components/whatWeDo'
import ValuesContainer from '@/components/valuesContainer'
import Facts from '@/components/facts'
import Manifest from '@/components/manifest'
import Contact from '@/components/contact'
import Goals from '@/components/goals'
export default {
    components: {
        MainHero,
        WhatWeDo,
        ValuesContainer,
        Facts,
        Manifest,
        Contact,
        Goals
    }
}
</script>
