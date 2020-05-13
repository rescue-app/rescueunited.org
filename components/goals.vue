<template>
    <section class="section section-l bg-light text-center">
        *****************
        <div class="section-head text-center wide-lg">
            <h5 class="subtitle">Sustainable Development Goals</h5>
            <h2 class="title">Something to aim at</h2>
        </div>
        <div id="goal-list">
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-01.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-02.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-03.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-04.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-05.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-06.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-07.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-08.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-09.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-10.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-11.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-12.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-13.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-14.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-15.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-16.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            <nuxt-link class="goalbox" to="/"><div><img src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-17.jpg" alt="Goal"><div class="goaltext">Hover text</div></div></nuxt-link>
            
        </div>
        ******************
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
    top: -125px;
}
    
img:hover + .goaltext {
    display: block;
    color: white;
    background-color: black;
    height: 100%;
    width: 100%;
}
</style>