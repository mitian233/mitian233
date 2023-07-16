<template>
<div class="flex flex-col justify-center">
  <div class="flex flex-row justify-center">
    <div class="flex flex-col justify-center">
      <div class="flex flex-row justify-center">
        <div class="relative inline-block">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="animate-spin rounded-full w-48 h-48 md:w-60 md:h-60 border-t-2 border-gray-900"></div>
          </div>
          <img src="@/assets/images/avatar.jpg" alt="Avatar" class="rounded-full w-48 h-48 md:w-60 md:h-60">
        </div>
      </div>
      <p class="text-center my-5 md:text-4xl text-2xl">
        Loading...
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:"Loading",
  props:{
    count:Number,
  }
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
