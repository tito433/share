<template>
  <div v-if="totalReactions > 0" class="reactions-count">
    <span>
      <template v-for="(reaction, index) in topReactions" :key="index">
        <LikeSvg v-if="reaction === ReactionEnum.Like" fill="#1E90FF" />
        <SmileSvg v-else-if="reaction === ReactionEnum.Haha" />
        <HeartSvg v-else-if="reaction === ReactionEnum.Love" />
        <WowSvg v-else-if="reaction === ReactionEnum.Wow" />
        <SadSvg v-else-if="reaction === ReactionEnum.Sad" />
        <AngrySvg v-else-if="reaction === ReactionEnum.Angry" />
      </template>
    </span>
    {{ totalReactions }}
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
<style scoped lang="scss">
.reactions-count {
  font-size: 1rem;
  gap: 0.5rem;
  svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
