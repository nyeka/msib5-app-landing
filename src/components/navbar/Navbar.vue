<script setup lang="ts">
import { useScrollPosition } from '../../hook/useScrollPosition'
import { RouterLink } from 'vue-router'
const { scrollPosition } = useScrollPosition()
</script>
<template>
  <div
    :class="
      scrollPosition > 0
        ? 'bg-[#fff] fixed w-full flex justify-between items-center py-[18px] px-[32px] z-[10]'
        : 'fixed w-full flex justify-between items-center px-[32px] py-[18px]'
    "
  >
    <div class="flex gap-[12px] text-center">
      <img src="/src/assets/Logo.png" alt="logo" />
      <div class="md:flex hidden gap-[32px] list-none items-center">
        <RouterLink to="/">Home</RouterLink>
        <div class="flex gap-[12px]">
          <li>Products</li>
          <img src="/src/assets/chevdown.svg" />
        </div>
        <div class="flex gap-[12px]">
          <li>Categories</li>
          <img src="/src/assets/chevdown.svg" />
        </div>
      </div>
    </div>
    <div class="md:flex gap-[24px] items-center hidden">
      <button class="text-[#475467]">Log in</button>
      <button
        class="text-[#fff] bg-[#0984DD] flex justify-center rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
      >
        Sign Up
      </button>
    </div>
    <div class="md:hidden">
      <img src="/src/assets/burger.svg" alt="menu" />
    </div>
  </div>
</template>
