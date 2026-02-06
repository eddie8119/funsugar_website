<template>
  <div class="modal fixed z-10 rounded-2xl bg-white p-4">
    <div class="flex w-full flex-col items-center">
      <label for="user_email" class="text-left text-stone-500">E-mail</label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        class="mb-6 w-full bg-stone-200 py-2 px-4 xl:w-[80%]"
      />
      <label for="user_message" class="text-left text-stone-500"
        >訊息 Message</label
      >
      <textarea
        id="user_message"
        name="user_message"
        cols="30"
        rows="10"
        class="mb-6 w-full bg-stone-200 py-2 px-4 xl:w-[80%]"
      />
      <button class="btn w-full md:w-[80%]">送出</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommissionForm",
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 40%;
  }
</style>
