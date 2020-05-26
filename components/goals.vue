<template>
    <section class="section section-l pt-5 pb-3 bg-light text-center" id="theChallenge">
        <div class="section-head text-center wide-lg pb-0">
            <h5 class="subtitle">Sustainable Development Goals</h5>
            <h2 class="title">The challenge</h2>
            <p class="pb-4">The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future.</p>
        </div>
        <div id="goal-list">
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/sdgsfirst.png" alt="Goal"></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg" alt="Goal"><div class="goaltext" style="background: #e5233d">End poverty in all its forms everywhere</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-02.jpg" alt="Goal"><div class="goaltext" style="background: #dda73b">End hunger, achieve food security and improved nutrition and promote sustainable agriculture</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-03.jpg" alt="Goal"><div class="goaltext" style="background: #4ca146">Ensure healthy lives and promote well-being for all at all ages</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-04.jpg" alt="Goal"><div class="goaltext" style="background: #c7212f">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-05.jpg" alt="Goal"><div class="goaltext" style="background: #f0402d">Achieve gender equality and empower all women and girls</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-06.jpg" alt="Goal"><div class="goaltext" style="background: #28bfe6">Ensure availability and sustainable management of water and sanitation for all</div></div></nuxt-link>
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
        <div id="explainer" class="p-3">
            <p>At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries in a global partnership.</p>
            <h5>The SDGs will stimulate action over the next years in areas of critical importance for humanity and the planet:</h5>

            <b-card no-body>
                <b-tabs card fill>
                    <b-tab title="People" active><b-card-text>We are determined to end poverty and hunger, in all their forms and dimensions, and to ensure that all human beings can fulfil their potential in dignity and equality and in a healthy environment.</b-card-text></b-tab>
                    <b-tab title="Planet"><b-card-text>We are determined to protect the planet from degradation, including through sustainable consumption and production, sustainably managing its natural resources and taking urgent action on climate change, so that it can support the needs of the present and future generations.</b-card-text></b-tab>
                    <b-tab title="Prosperity"><b-card-text>We are determined to ensure that all human beings can enjoy prosperous and fulfilling lives and that economic, social and technological progress occurs in harmony with nature.</b-card-text></b-tab>
                    <b-tab title="Peace"><b-card-text>We are determined to foster peaceful, just and inclusive societies which are free from fear and violence. There can be no sustainable development without peace and no peace without sustainable development.</b-card-text></b-tab>
                </b-tabs>
            </b-card>
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
    overflow: hidden;
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

#explainer {
    text-align: left;
    max-width: 65em;
    font-size: .8em;
    margin-left: auto;
    margin-right: auto;
}

#explainer h4 {
    font-size: 1.4em;
}

#explainer h5 {
    font-size: 1.2em;
    color: inherit;
}
</style>