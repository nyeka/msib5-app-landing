<template>
  <div
    class="md:w-[224px] rounded-[8px] cursor-pointer"
    :key="props.id"
    @click="gotoDetails(props.id, props.name)"
  >
    <div
      class="flex justify-center items-center bg-gray-300 border-x-2 border-t-2 rounded-[8px] rounded-b-none"
    >
      <img :src="props.image" alt="botol" />
    </div>
    <div class="bg-[#fff] p-[24px] rounded-b-[8px] border-b-2 border-l-2 border-r-2">
      <label class="rounded-[16px] bg-[#F2F4F7] px-[12px] py-[4px]">Label</label>
      <p class="font-normal mt-[16px]">{{ props.name }}</p>
      <div class="flex justify-between mt-[8px]">
        <p class="font-bold">{{ formatIDR(props.price) }}</p>
        <span class="font-normal text-[12px] text-[#98A2B3]">450ML</span>
      </div>
      <div class="flex gap-[12px] mt-[4px] text-[12px]">
        <p class="line-through text-[#98A2B3]">Rp40.000</p>
        <p class="text-[#B42318] py-[2px] px-[8px] bg-[#FEF3F2] rounded-[16px]">-10%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Iproduct } from '@/utils/type/Iproduct'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { formatIDR } from '../../utils/ConvertNumber'
const props = defineProps<Iproduct>()
const route = useRouter()

const gotoDetails = (id: number, name: string) => {
  const nameProduct = name.replace(/\s/g, '-').toLowerCase()
  route.push({ name: 'product-detail', params: { nameProduct, id } })
}
</script>
