<template>
  <form>
    <textarea
      placeholder="Type in message and hit enter to send..."
      v-model="message"
      @keypress.prevent.enter="handleSubmit"
    ></textarea>
    <button class="send" @click.prevent="handleSubmit">Send</button>

    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
export default {
  name: "NewChatForm",
  setup() {
    const { error, addDoc } = useCollection("messages");
    const { user } = getUser();

    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  margin-right: 20px;
}

.send {
  cursor: pointer;
  margin-right: 10px;
}
</style>
