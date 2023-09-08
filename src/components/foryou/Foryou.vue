<script setup lang="ts">
import Section from '../header/Section.vue'
import Items from '../product/Items.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useGetSlide } from '@/hook/useGetSlide'
import { ProductLatest } from '../../utils/data/Product'
import { useGetScreenSize } from '../../hook/useGetScreen'
const { screenWidth } = useGetScreenSize()
</script>

<template>
  <div class="p-8">
    <Section text="For You" />
    <div v-if="screenWidth > 1024" class="flex gap-8 flex-wrap mt-[24px] justify-between">
      <div v-for="items in ProductLatest" class="flex items-center">
        <Items
          :name="items.name"
          :price="items.price"
          :image="items.image"
          :description="items.description"
          :id="items.id"
        />
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
      <SwiperSlide v-for="items in ProductLatest" class="flex items-center animation-slide">
        <Items
          :name="items.name"
          :price="items.price"
          :image="items.image"
          :description="items.description"
          :id="items.id"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
