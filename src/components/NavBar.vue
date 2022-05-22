<template>
  <nav v-if="user">
    <div>
      <p>Hey there... {{ user.displayName }}</p>
      <p class="email">Currently logged in as... {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLoggout from "@/composables/useLoggout";
import getUser from "@/composables/getUser";
export default {
  name: "NavBar",
  setup() {
    const { error, logout } = useLoggout();

    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        // console.log("User logged out");
      }
    };
    return { handleLogout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 20px auto;
  font-size: 1.6rem;
  color: #444;
}

nav p .email {
  font-size: 14px;
  color: #999;
}
</style>
