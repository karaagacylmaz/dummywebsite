<template>
      <div class="btn-group dropstart">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ loggedInUser.name }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li>
        <a class="dropdown-item">{{ loggedInUser.email }}</a>
      </li>
      <li @click="logout">
        <a class="dropdown-item">Logout</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    computed: {
        loggedInUser() {
            return {
                name: this.$store.state.userInfo.name,
                email: this.$store.state.userInfo.email
            }
        },
    },
    methods: {
      logout() {
        this.$store.commit('removeUserInfo');
      }
    }
}
</script>