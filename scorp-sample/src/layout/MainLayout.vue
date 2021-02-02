<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi-alarm"></i>
          <span class="ms-3">Page Name</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-md-end"
          id="navbarText"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                {{ $t("message.homepage") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {{ $t("message.contact") }}
              </a>
            </li>
            <li class="nav-item me-2">
              <LanguageDropdown />
            </li>
            <li class="nav-item" v-if="!isUserExist">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                {{ $t("message.login") }}
              </button>
            </li>
            <li class="nav-item me-4" v-if="isUserExist">
              <user-dropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {{ $t("message.copyrights") }}
        </a>
      </div>
    </nav>
    <LoginModal />
  </main>
</template>

<script>
import LanguageDropdown from "../components/LocalizationSelect";
import LoginModal from "../components/LoginModal";
import UserDropdown from "../components/UserSelect";
export default {
  components: {
    LanguageDropdown,
    LoginModal,
    UserDropdown,
  },
  data() {
    return {};
  },
  computed: {
    isUserExist() {
      return this.$store.state.userInfo.email !== "";
    },
  },
};
</script>
