<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="12">
          <div class="panel-body">
            <form>
              <vue-form-generator @validated="onValidated" :schema="schema" :model="model" :options="formOptions"></vue-form-generator>

              <!--<el-button type="primary" @click="validateForm">Primary</el-button>--></el-button>
            </form>
          </div>
        </el-col>
        <el-col :span="12" v-if="model.message.length > 30">
        {{ model.message }}
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import VueFormGenerator from 'vue-form-generator'
  import 'vue-form-generator/dist/vfg.css'

  Vue.use(VueFormGenerator)

  export default {
    data() {
      return {
        model: {
          message: ''
        },
        schema: {
          fields: [{
              type: 'input',
              inputType: 'text',
              label: 'First Name',
              model: 'firstname',
              placeholder: 'Your first name',
              required: true,
              validator: 'string'
            },
            {
              type: 'input',
              inputType: 'text',
              label: 'Last Name',
              model: 'lastname',
              placeholder: 'Your last name',
              required: true,
              validator: 'string'
            },
            {
              type: "radios",
              label: "Sex",
              model: "gender",
              values: [
                "Male",
                "Female"
              ],
              required: true
            },
            {
              type: "textArea",
              label: "Message",
              model: "message",
              name: "message",
              placeholder: "Your Message",
              rows: 4,
              required: true,
              validator: ['string']
            },
            {
              type: "select",
              label: "This message is confidential",
              model: "confidential",
              values: [
                "No",
                "Yes"
              ],
              default: "Please Choose",
              required: true,
              visible: (model) => {
                if(model.message.length > 30) {
                  return true;
                } return false;
              }
            },
            {
              type: 'checkbox',
              label: 'I accept the TOS',
              model: 'tos',
              default: true,
              required: true,
              visible: (model) => {
                if(model.message.length > 30) {
                  return true;
                } return false;
              }
            },
            {
            type: "submit",
            onSubmit(model) {
              let dataSubmitet = model;
              console.log("Form submitted!", dataSubmitet);
            },
            label: "",
            buttonText: "Submit",
            validateBeforeSubmit: true
            }
          ]
        },
        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
          validateAsync: true
        }
      }
    },
    methods: {
      validateForm() {
        console.log(this.model)
      },
  onValidated(isValid, errors) {
   console.log("Validation result: ", isValid, ", Errors:", errors);
  }
    },
    computed: {
      checkMessageLength() {

      }
    },
  }

</script>
