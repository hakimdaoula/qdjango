<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-item v-for="message in messages" :key="message.created_at">
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['{{ message.message }}']"
          stamp="7 minutes ago"
          bg-color="amber-7"
        />
      </q-item>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Message } from './models';

export default {
  setup() {
    const store = useStore();

    const messages: Array<Messages> = computed(() => store.state.messages);

    store.dispatch('bank/getTransactions');

    return {
      transactions,
    };
  },
};
</script>