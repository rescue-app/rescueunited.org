<template>
  <div class="form-wrapper">
    <transition-group name="fade">
      <div
        v-if="step !== -1 && !displayCaptcha"
        :key="'form-wrapper'"
        :class="{'submitted': submittedField}"
      >
        <h5 class="step-title" :key="'text' + step">{{ stepProps.text }}</h5>
        <h6 class="step-subtitle" v-if="stepProps.subtitle" :key="'subtitle' + step">{{ stepProps.subtitle }}</h6>

        <div class="error" v-if="stepProps.error">{{ stepProps.error }}</div>

        <b-button
          :key="'button' + step + option.text"
          class="form-button"
          v-for="option in getInputOptions()"
          @click="storeOptionInfo(option)"
        >{{ option.text }}</b-button>

        <img class="step-image" v-if="stepProps.image" :src="stepProps.image"/>

        <b-form-select :ref="stepProps.id"
                       v-if="isOptionInput()"
                       v-model="formData[stepProps.id]"
                       :options="stepProps.options"
                       multiple
                       :select-size="4">
        </b-form-select>

        <b-input
          :key="'input' + stepProps.input + step"
          :list="stepProps.id"
          :type="stepProps.input"
          :value="formData[stepProps.id]"
          :min="stepProps.min"
          :max="stepProps.max"
          :minlength="stepProps.minlength"
          :maxlength="stepProps.maxlength"
          v-if="isNumberInput() || isEmailInput() || isTextInput() || isTelInput()"
          :ref="stepProps.id"
          :placeholder="stepProps.placeholder"
          @keyup.enter="storeStepInfo(stepProps)"
          required
        ></b-input>

        <datalist :id="stepProps.id" v-if="isTextInput()" :key="'list' + step">
          <option v-for="option in stepProps.options" :key="stepProps.id + option">{{ option }}</option>
        </datalist>

        <b-button
          class="form-button accept-button"
          v-if="shouldDisplayAcceptButton()"
          @click="storeStepInfo(stepProps)"
        >Aceptar</b-button>

        <b-button
          class="form-button accept-button"
          v-if="isNoneInput()"
          @click="goToStep(stepProps.next)"
        >Continuar</b-button>
      </div>

      <div
        v-else-if="!displayCaptcha && step === -1"
        :key="'thanks-wrapper'"
        class="step-title thanks-wrapper"
      >
        Thank you {{ formData.name }}!

        We will contact you as soon as possible to verify and validate your request.

        Share Rescue United in your social networks!

        #andyou
      </div>
    </transition-group>

    <recaptcha
      v-if="displayCaptcha"
      class="mb-3"
      @error="onError"
      @success="onSuccess"
      @expired="onExpired"
    />

    <div class="navigation-wrapper" v-if="!displayCaptcha">
      <b-button
        class="btn-navigate"
        variant="outline-primary"
        :disabled="step <= 1 || step === -1"
        @click="goToStep(step - 1)"
      >▲</b-button>
      <b-button
        class="btn-navigate"
        variant="outline-primary"
        :disabled="step >= stepsNumber || step === -1"
        @click="goToStep(step + 1)"
      >▼</b-button>
    </div>
  </div>
</template>

<script>
import formVolunteer from "@/assets/formVolunteer.json";
import formProject from "@/assets/formProject.json";

export default {
  props: ["form"],
  data: () => ({
    step: 1,
    stepsNumber: 1,
    formDefinition: [],
    stepProps: {},
    submittedField: false,
    displayCaptcha: false,
    validChallenge: false,
    challenge: undefined,
    formData: {  //TODO needs to be adjusted to new fields
      type: null,
      project_name: null,
      project_type: null,
      causes: null,
      skills: null,
      hours_week: null,
      project_details: null,
      description: null,
      contactType: null,
      company_name: null,
      contact_name: null,
      phone: null,
      email: null,
      country: null
    }
  }),
  mounted() {
    this.formDefinition =
      this.form === "volunteer" ? formVolunteer : formProject;
    this.stepsNumber = this.formDefinition.length;
    this.addstepProps();
  },
  methods: {
    isTextInput() {
      return this.stepProps.input === "text";
    },
    isNumberInput() {
      return this.stepProps.input === "number";
    },
    isEmailInput() {
      return this.stepProps.input === "email";
    },
    isTelInput() {
      return this.stepProps.input === "tel";
    },
    isNoneInput() {
      return this.stepProps.input === "none";
    },
    isOptionInput() {
      return this.stepProps.input === "option";
    },
    shouldDisplayAcceptButton() {
      return (
        this.isTextInput() ||
        this.isNumberInput() ||
        this.isEmailInput() ||
        this.isTelInput() ||
        this.isOptionInput()
      );
    },
    getInputOptions() {
      if (this.stepProps.input !== "button") {
        return [];
      }

      return this.stepProps.options;
    },
    goToStep(step) {
      this.submittedField = false;

      if (step === -1) {
        this.displayCaptcha = true;
        return;
      }

      this.step = step;
      this.addstepProps();
    },
    findStepById(stepId) {
      for (let i = 0; i < this.formDefinition.length; i++) {
        if (this.formDefinition[i].id === stepId) {
          return this.formDefinition[i];
        }
      }

      return null;
    },
    addstepProps() {
      for (let i = 0; i < this.formDefinition.length; i++) {
        if (this.formDefinition[i].step === this.step) {
          if (this.formDefinition[i].condition) {
            const condition = this.formDefinition[i].condition;
            if (
              !condition.type &&
              this.formData[condition.id] !== condition.value
            ) {
              this.goToStep(this.formDefinition[i].next);
              break;
            } else if (
              condition.type === "different" &&
              this.formData[condition.id] === condition.value
            ) {
              this.goToStep(this.formDefinition[i].next);
              break;
            }
          }
          this.stepProps = this.formDefinition[i];
        }
      }
    },
    storeOptionInfo(option) {
      this.formData[this.stepProps.id] = option.text;
      this.goToStep(option.next);
    },
    storeStepInfo() {
      this.submittedField = true;
      const isValid = this.$refs[this.stepProps.id].checkValidity();
      this.$refs[this.stepProps.id].reportValidity();

      if (isValid) {
        this.formData[this.stepProps.id] = this.$refs[
          this.stepProps.id
        ].localValue;
        this.goToStep(this.stepProps.next);
      }
    },
    submitForm() {
      const data = {
        type: this.formData.type,
        project_name: this.formData.project_name,
        project_type: this.formData.project_type,
        causes: this.formData.causes,
        skills: this.formData.skills,
        hours_week: this.formData.hours_week,
        project_details: this.formData.project_details,
        description: this.formData.description,
        contactType: this.formData.contactType,
        company_name: this.formData.company_name,
        contact_name: this.formData.contact_name,
        phone: this.formData.phone,
        email: this.formData.email,
        country: this.formData.country,
      };

      //TODO needs to be adjusted to new API
      fetch("https://api.rescueapp.es/request", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>
        response
          .json()
          .then(text => ({
            json: text,
            meta: response
          }))
          .then(({ json }) => {
            if (json && json.error) {
              const field = json.details[0].match(/"(.*?)"/);
              if (field !== "challenge") {
                this.displayCaptcha = false;
                const stepData = this.findStepById(field);
                this.goToStep(stepData.step);
                this.stepProps.error = json.error;
              } else {
                this.goToStep(-1);
              }
            } else {
              this.displayCaptcha = false;
              this.step = -1;
              this.addstepProps();
            }
          })
      );
    },
    onSuccess(token) {
      this.challenge = token;
      this.validChallenge = true;
      this.submitForm();
    },
    onExpired() {
      this.challenge = undefined;
      this.validChallenge = false;
    },
    onError(error) {
      this.challenge = undefined;
      this.validChallenge = false;
      console.log(error);
    }
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.form-wrapper {
  padding: 2rem;
}

.submitted input:invalid {
  border-color: red;
}

.step-title {
  color: rgb(79, 169, 179);
}

.thanks-wrapper {
  font-size: 1.5rem;
  font-weight: 800;
}

.option-button {
  margin: 1rem;
}

.btn-navigate,
.btn-navigate:hover,
.btn-navigate:disabled {
  position: relative;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  width: 36px;
  min-width: 36px;
  height: 32px;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: #87c4e9;
  color: rgb(1, 2, 2);
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
    border-color 0.2s ease 0s, opacity 0.2s ease 0s;
  outline: none;
  margin: 0;
  padding: 0;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: transparent;
  border-radius: 4px 0 0 4px;
}

.btn-navigate:hover,
.btn-navigate:disabled {
  background-color: #87c4e9;
}

.btn-navigate:disabled {
  background-color: rgba(105, 182, 190, 0.3);
}

.btn-navigate:last-of-type {
  border-radius: 0 4px 4px 0;
  transform: translateX(-5px);
  border-left: 1px solid grey;
}

.form-button,
.form-button:hover,
.form-button:focus {
  display: inline-block;
  margin: 1rem;
  position: relative;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 12px 0;
  min-height: 40px;
  background-color: #87c4e9;
  color: rgb(1, 2, 2);
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
    border-color 0.2s ease 0s, opacity 0.2s ease 0s;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 6px 14px;
  border-color: transparent;
  border-radius: 4px;
}

.form-button.accept-button,
.form-button.accept-button:hover,
.form-button.accept-button:focus {
  display: block;
  margin: 1rem 0;
}

.navigation-wrapper {
  text-align: right;
  padding: 1.5rem;
}

.form-control::placeholder {
  color: lightgray;
  font-style: italic;
}

.error {
  color: red;
}

.step-image {
  margin: 2rem 0;
}
</style>
