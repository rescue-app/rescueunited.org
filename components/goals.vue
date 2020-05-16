<template>
    <section class="section section-l bg-light text-center">
        <div class="section-head text-center wide-lg pb-0">
            <h5 class="subtitle">Something to aim at</h5>
            <h2 class="title">Sustainable Development Goals</h2>
        </div>
        <div id="goal-list">
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/sdgsfirst.png" alt="Goal"></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg" alt="Goal"><div class="goaltext" style="background: #e5233d">End poverty in all its forms everywhere</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-02.jpg" alt="Goal"><div class="goaltext" style="background: #dda73b">End hunger, achieve food security and improved nutrition and promote sustainable agriculture</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-03.jpg" alt="Goal"><div class="goaltext" style="background: #4ca146">Ensure healthy lives and promote well-being for all at all ages</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-04.jpg" alt="Goal"><div class="goaltext" style="background: #c7212f">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-05.jpg" alt="Goal"><div class="goaltext" style="background: #f0402d">Achieve gender equality and empower all women and girls</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-06.jpg" alt="Goal"><div class="goaltext" style="background: #f0402d">Ensure availability and sustainable management of water and sanitation for all</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-07.jpg" alt="Goal"><div class="goaltext" style="background: #fcc413">Ensure access to affordable, reliable, sustainable and modern energy for all</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-08.jpg" alt="Goal"><div class="goaltext" style="background: #a31d44">Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-09.jpg" alt="Goal"><div class="goaltext" style="background: #f26a2f">Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-10.jpg" alt="Goal"><div class="goaltext" style="background: #e01582">Reduce inequality within and among countries</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-11.jpg" alt="Goal"><div class="goaltext" style="background: #f89d29">Make cities and human settlements inclusive, safe, resilient and sustainable</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-12.jpg" alt="Goal"><div class="goaltext" style="background: #bf8d2c">Ensure sustainable consumption and production patterns</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-13.jpg" alt="Goal"><div class="goaltext" style="background: #407e46">Take urgent action to combat climate change and its impacts*</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-14.jpg" alt="Goal"><div class="goaltext" style="background: #1f97d4">Conserve and sustainably use the oceans, seas and marine resources for sustainable development</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-15.jpg" alt="Goal"><div class="goaltext" style="background: #59ba47">Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and biodiversity loss</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-16.jpg" alt="Goal"><div class="goaltext" style="background: #126a9f">Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-17.jpg" alt="Goal"><div class="goaltext" style="background: #14496a">Strengthen the means of implementation and revitalize the global partnership for sustainable development</div></div></nuxt-link>
            
        </div>
    </section>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style scoped>
#goal-list {
    max-width: 60em;
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.goalbox {
    width: 131px;
    height: 131px;
    margin: .3em;
}

.goaltext {
    display: none;
    position: relative;
    top: -131px;
    font-size: 11px;
    text-align: left;
    padding: .4em;
    line-height: 1.1em;
}
    
.goalbox:hover .goaltext {
    display: block;
    color: white;
    height: 131px;
    width: 131px;
}
</style>