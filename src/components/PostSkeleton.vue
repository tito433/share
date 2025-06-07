<script setup lang="ts">
import UserSvg from "@/assets/User.svg";

import Skeleton from "@/components/skeleton/index.vue";
import SkeletonItem from "@/components/skeleton/item.vue";

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getWidth() {
  const fractionalWidths = [
    "w-2/3",
    "w-1/4",
    "w-3/4",
    "w-1/5",
    "w-2/5",
    "w-3/5",
    "w-4/5",
    "w-1/6",
    "w-5/6",
  ];
  const index = Math.floor(Math.random() * fractionalWidths.length);
  return fractionalWidths[index];
}
</script>
<template>
  <div class="app-card flex flex-col flex-grow gap-1">
    <Skeleton loading>
      <template #template>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <UserSvg width="2.5rem" height="2.5rem" class="app-fill" />
            <div class="flex flex-col flex-grow gap-2">
              <SkeletonItem variant="text" width="4.5rem" height="1.5rem" />
              <SkeletonItem variant="text" width="4.5rem" height=".5rem" />
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <SkeletonItem
              v-for="x in getRandom(2, 5)"
              variant="text"
              class="w-full"
            />
            <SkeletonItem variant="text" :class="getWidth()" />
          </div>
          <div class="flex justify-between">
            <SkeletonItem variant="text" width="2.5rem" />
            <SkeletonItem variant="text" width="5rem" />
          </div>
          <div class="border-top"></div>
          <div class="flex justify-between">
            <SkeletonItem variant="text" width="5rem" height="1.688rem" />
            <SkeletonItem variant="text" width="5rem" height="1.688rem" />
            <SkeletonItem variant="text" width="5rem" height="1.688rem" />
          </div>
        </div>
      </template>
    </Skeleton>
  </div>
</template>
