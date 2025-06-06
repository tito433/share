<template>
  <div v-if="totalReactions > 0" class="flex gap-1 items-center">
    <template v-for="(reaction, index) in topReactions" :key="index">
      <LikeSvg
        v-if="reaction === ReactionEnum.Like"
        fill="#1E90FF"
        width="16"
        height="16"
      />
      <SmileSvg
        v-else-if="reaction === ReactionEnum.Haha"
        width="16"
        height="16"
      />
      <HeartSvg
        v-else-if="reaction === ReactionEnum.Love"
        width="16"
        height="16"
      />
      <WowSvg
        v-else-if="reaction === ReactionEnum.Wow"
        width="16"
        height="16"
      />
      <SadSvg
        v-else-if="reaction === ReactionEnum.Sad"
        width="16"
        height="16"
      />
      <AngrySvg
        v-else-if="reaction === ReactionEnum.Angry"
        width="16"
        height="16"
      />
    </template>
    <span class="ml-2 text-base">{{ totalReactions }}</span>
  </div>
</template>
<script setup lang="ts">
import { ReactionEnum } from "@/utils";
import AngrySvg from "@/assets/Angry.svg";
import HeartSvg from "@/assets/Heart.svg";
import LikeSvg from "@/assets/Like.svg";
import SadSvg from "@/assets/Sad.svg";
import SmileSvg from "@/assets/Smile.svg";
import WowSvg from "@/assets/Wow.svg";

defineProps<{
  totalReactions: number;
  topReactions: string[];
}>();
</script>
