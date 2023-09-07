<script setup lang="ts">
import Section from '../header/Section.vue'
import Items from '../product/Items.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useGetSlide } from '@/hook/useGetSlide'
import { useGetScreenSize } from '../../hook/useGetScreen'
const { screenWidth } = useGetScreenSize()
</script>

<template>
  <div class="p-[32px]">
    <Section text="For You" />
    <div v-if="screenWidth > 868" class="flex gap-[32px] flex-wrap justify-between mt-[24px]">
      <div v-for="i in 15" class="flex items-center">
        <Items />
      </div>
    </div>
    <Swiper
      v-else
      :slides-per-view="useGetSlide(screenWidth)"
      :space-between="screenWidth < 376 ? 40 : 10"
      navigation
      :scrollbar="{ draggable: true }"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      backtodropdown
      class="mt-[24px]"
    >
      <SwiperSlide v-for="i in 15" class="flex items-center animation-slide">
        <Items />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped></style>
