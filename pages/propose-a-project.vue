<template>
  <div>
    <SmallHero />
    <div class="container mt-4 mb-3">
      <div class="section-content">
        <div class="row g-gs justify-content-between">
          <div class="col">
            <div class="text-block">
              <h1 class="subtitle">PROPOSE A PROJECT</h1>
              <p>
                We are a non-profit organization focused on applying technology to maximize impact solving social problems.
                Complete the following form with the details of your project.
              </p>
              <Typeform class="w-100 mb-3" style="height: 500px" :hide-headers="true" :hide-footer="true" :opacity="0" :on-submit="onSubmit" url="https://info548263.typeform.com/to/JkDG5C" />
              <!-- <custom-form form="project"></custom-form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallHero from "~/components/smallHero";
import Typeform from "nuxt-typeform";
import CustomForm from "~/components/customForm";
export default {
  components: {
    SmallHero,
    CustomForm
  },
  methods: {
    onSubmit() {
      this.$ga.event({
        eventCategory: "Forms",
        eventAction: "Send Project Form",
        eventLabel: "projectSignup",
        eventValue: 1
      });
    }
  }
};
</script>