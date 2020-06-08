<template>
    <section class="section section-l bg-light section-steps pb-4" id="howItWorks">
        <h2 class="title text-center">How it works</h2>
        <h6 class="text-center mb-4">Are you a non-profit organization, a company or an individual?</h6>
        <CallToAction />
        <b-container>
            <div class="section-content section-content-boxed">
                <div class="row g-gs justify-content-center align-items-center">
                    <div class="d-none d-md-inline col-6">
                        <video class="d-none d-md-inline w-100 border" :poster="projectsImage" controls>
                            <source src="~/assets/videos/projects.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="d-md-none col-12">
                        <video class="w-100 border" :poster="projectsImage" controls>
                            <source src="~/assets/videos/projects-mobile.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="d-none d-md-inline col-6">
                        <video class="w-100 border" :poster="volunteersImagemage" controls>
                            <source src="~/assets/videos/volunteers.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="d-md-none col-12">
                        <video class="w-100 border" :poster="volunteersImagemage" controls>
                            <source src="~/assets/videos/volunteers-mobile.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
import volunteersImage from "~/assets/images/poster-volunteers.png"
import projectsImage from "~/assets/images/poster-projects.png"
import CallToAction from '@/components/callToAction'

export default {
    components: {
        CallToAction
    },
    data: function () {
        return {
            volunteersImagemage: volunteersImage,
            projectsImage: projectsImage
        }
    }
}
</script>
