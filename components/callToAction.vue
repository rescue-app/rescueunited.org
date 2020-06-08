<template>
  <div class="row d-flex justify-content-around mt-5" id="callToAction">
    <div
      class="card text-center shadow animated slideInLeft"
      style="width: 18rem; opacity: .9;"
    >
      <!-- <img
        class="card-img-top"
        src="~/assets/images/poster-volunteers.png"
        alt="Card image cap"
      /> -->
      <div class="card-body mt-0 pt-0">
        <nuxt-link to="/current-projects" class="stretched-link" />
        <h5 class="card-title mt-3">Propose a project</h5>
        <p class="card-text">Propose a tech-based social project related to one or more SDGs</p>
      </div>
    </div>

    <div
      class="card text-center shadow animated slideInRight"
      style="width: 18rem; opacity: .9;"
    >
      <!-- <img
        class="card-img-top"
        src="~/assets/images/poster-volunteers.png"
        alt="Card image cap"
      /> -->
      <div class="card-body mt-0 pt-0">
        <nuxt-link to="/volunteering" class="stretched-link" />
        <h5 class="card-title mt-3">Volunteers</h5>
        <p class="card-text">
          Create your volunteer profile!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: "Home"
      }
  }
};
</script>

<style scoped>
#callToAction {
    max-width: 60em;
    margin-left: auto;
    margin-right: auto;
}

.card {
  transition: 0.3s;
}
.card-body {
  color: black;
}
.card:hover {
  opacity: 0;
  background-color: rgb(180, 213, 252);
  margin-top: -20px;
  padding-bottom: 20px;
}

hr {
  color: #82ba93;
  background-color: #82ba93;
}
</style>
