<template>
  <div class="container">
    <nav-bar></nav-bar>
    <chat-window></chat-window>
    <new-chat-form></new-chat-form>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import NavBar from "@/components/NavBar.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "Chat Room",
  components: { NavBar, NewChatForm, ChatWindow },

  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
