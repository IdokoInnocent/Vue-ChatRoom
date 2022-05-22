<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login to chatroom</h2>
      <login-form @login="enterChat"></login-form>
      <p>
        No account yet?
        <span @click="showLogin = !showLogin">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up to chatroom</h2>
      <signup-form @signup="enterChat"></signup-form>
      <p>
        Already registered?
        <span @click="showLogin = !showLogin">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  name: "Welcome",
  components: { SignupForm, LoginForm },

  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "ChatRoom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  background-color: blue;
  text-align: center;
  padding: 20px 0;
  font-size: 1.7rem;
}

.welcome form {
  width: 30rem;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
  box-sizing: border-box;
}

@media only screen and (max-width: 400px) {
  .welcome input {
    width: 80%;
    /* margin: 5px auto; */
    /* width: 50%; */
  }
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>
