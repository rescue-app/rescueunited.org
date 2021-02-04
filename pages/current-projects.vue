<template>
    <div>
        <SmallHero />
        <div class="container mt-4 mb-3">
            <div class="section-content">
                <div class="row g-gs justify-content-between" style="margin-top: 3em;">
                    <div class="col">
                        <div class="text-block">
                            <h3 class="title text-center">CURRENT PROJECTS</h3>
                            <p class="lead mb-0 text-center">These are our current projects. You can <strong><nuxt-link to="/propose-a-project">propose a new one</nuxt-link></strong>, or <strong><nuxt-link to="/volunteering">sign up as a volunteer</nuxt-link></strong></p>

                            <div class="col pt-2 mt-5">
                                <table border="0" class="text-dark" cellspacing="10px" style="table-layout: fixed; width: 100%;" align="top" valign="top" >
                                    <tr>
                                        <td class="title-name"><b>COLIFE</b></td>
                                        <td class="title-name"><b>CHAIR THE HOPE</b></td>
                                        <td class="title-name"><b>MINDBERRY</b></td>
                                    </tr>
                                    <tr>
                                        <td class="country small"><b>United States</b></td>
                                        <td class="country small"><b>United States</b></td>
                                        <td class="country small"><b>Germany</b></td>
                                    </tr>
                                    <tr>
                                        <td><i>Good Health and Well-being, Reduced Inequality, Sustainable Cities and Communities, Partnerships to achieve the Goal</i></td>
                                        <td><i>Good Health and Well-being, Reduced Inequality, Sustainable Cities and Communities</i></td>
                                        <td><i>Good Health and Well-being</i></td>
                                    </tr>
                                    <tr>
                                        <td style="vertical-align: top;">Colife began with the idea that if there was a way that we could make it easy for people to find the right person, and trust could be established, more people would be interested in co-living for the financial and community benefits.</td>
                                        <td style="vertical-align: top">Chair The Hope is a non-profit devoted to raising funds for new wheelchairs and their delivery to millions of people in need around the world.</td>
                                        <td style="vertical-align: top">MindBerry works as a technology platform for psychotherapy, counselling and coaching.n</td>
                                    </tr>
                                    <br>
                                    <tr>
                                        <td class="title-name"><b>THE BLACK EXCELLENCE NETWORK</b></td>
                                        <td class="title-name"><b>DIGITAL HORIZON</b></td>
                                        <td class="title-name"><b>SALUD | PASO A PASO</b></td>
                                    </tr>
                                    <tr>
                                        <td class="country small"><b>United Kingdom</b></td>
                                        <td class="country small"><b>Spain</b></td>
                                        <td class="country small"><b>Spain</b></td>
                                    </tr>
                                        <td><i>Quality Education, Reduced Inequality</i></td>
                                        <td><i>Quality Education, Partnerships to achieve the Goal, Industry, Innovation and Infrastructure</i></td>
                                        <td><i>Good Health and Well-being, Sustainable Cities and Communities</i></td>
                                    <tr>
                                        <td style="vertical-align: top;">The Black Excellence Network is a mentorship program founded by four black students.</td>
                                        <td style="vertical-align: top;">Digital Horizon aims to give its audience all of the tools and knowledge to face a digital future.</td>
                                        <td style="vertical-align: top;">E-health project to combat confinement issues with physiotherapy.</td>
                                    </tr>
                                    <br>
                                    <tr>
                                        <td class="title-name"><b>HELPUP</b></td>
                                        <td class="title-name"><b>CALMTAG</b></td>
                                        <td class="title-name"><b>RESCUE APP</b></td>
                                    </tr>
                                    <tr>
                                        <td class="country small"><b>Spain</b></td>
                                        <td class="country small"><b>Spain</b></td>
                                        <td class="country small"><b>Spain</b></td>
                                    </tr>
                                        <td><i>Partnerships to achieve the Goal</i></td>
                                        <td><i>Good Health and Well-being, Industry, Innovation and Infrastructure</i></td>
                                        <td><i>No Poverty, Zero Hunger, Sustainable Cities and Communities, Partnerships to achieve the Goal</i></td>
                                    <tr>
                                        <td style="vertical-align: top;">HelpUP is a digital platform that connects social and environmental projects with users and companies to collaborate for a more just and sustainable world.</td>
                                        <td style="vertical-align: top;">Our mission is to offer security & health integrated solution, affordable for anyone with a dependent person on his/her family.</td>
                                        <td style="vertical-align: top;">Rescue app started as a response to COVID-19, due to the decentralisation of information about supply and demand of sanitary resources in Spain.</td>
                                    </tr>
                                    
                                </table>
                            </div>

                            <!-- <div v-else>
                                <div v-for="project in projects" :key="project.id" class="search-result">
                                    <h6 class="mb-1 text-uppercase"><small><strong>{{ project.country }}</strong></small></h6>
                                    <p>
                                        <span v-for="cause in project.causes" :key="cause">
                                            <b-badge variant="info">{{ cause }}</b-badge>&nbsp;
                                        </span>
                                    </p>
                                    <h4 class="mb-0 text-dark">{{ project.title }}</h4>
                                    <p class="text-dark">{{ project.projectBrief }}</p>
                                    <p>
                                        <small>
                                            <span v-for="skill in project.skills" :key="skill">
                                                <b-badge variant="light" class="text-info m-0 p-0">{{ skill }}</b-badge>&nbsp;
                                            </span>
                                        </small>
                                    </p>
                                    
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'

export default {
    components: {
        SmallHero,
    },
    // async fetch () {
    //     const requestUrl = `https://api.rescueunited.org/project?limit=50`
    //     try {
    //         this.projects = await this.$http.$get(requestUrl);
    //     } catch (ex) {
    //         this.projects = false
    //     } finally {
    //         this.loading = false
    //     }
    // },
    // data () {
    //     return {
    //         projects: [],
    //         loading: true,
    //     }
    // },
    fetchOnServer: false,
}
</script>

<style scoped>
.search-result:not(:last-child) {
    border-bottom: 1px #87C4EA dotted;
    margin-bottom: 2em;
    padding-bottom: 1em;
    padding-top: 1em;
}

td
{
    padding:0 20px;
}

.country {
    color: #87c4e9;
}
.title-name {
    padding-top:25px;
}
</style>