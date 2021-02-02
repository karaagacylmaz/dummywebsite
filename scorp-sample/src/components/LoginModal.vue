<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">
            {{ $t("message.login") }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Input
            type="text"
            name="title"
            v-model="userInfo.title"
          />
          <Input type="text" name="name" v-model="userInfo.name" />
          <Input type="text" name="email" v-model="userInfo.email" />
          <Input type="password" name="password" v-model="userInfo.password" />
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <LanguageDropdown />
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary me-2"
              data-bs-dismiss="modal"
            >
              {{ $t("message.close") }}
            </button>
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" @click="handleSubmit">
              {{ $t("message.login") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageDropdown from "./LocalizationSelect";
import Input from "./Input";

export default {
  components: {
    LanguageDropdown,
    Input,
  },
  data() {
    return {
      userInfo: {
        title: "",
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit('setUserInfo', this.userInfo);
      console.log(this.$store.state.userInfo);
    },
  }
};
</script>
