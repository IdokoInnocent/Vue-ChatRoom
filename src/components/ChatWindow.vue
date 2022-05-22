<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="message" v-if="documents" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name.toUpperCase() }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto scroll
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 3rem 2rem;
  font-size: 1.6rem;
}

@media only screen and (max-width: 700px) {
  .chat-window {
    padding: 0.5rem 1rem;
  }
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 1.6rem;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.message {
  max-height: 400px;
  overflow: auto;
}
</style>
