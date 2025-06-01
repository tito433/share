<script setup lang="ts">
import { doc, increment, runTransaction } from "firebase/firestore";
import { computed, ref } from "vue";

import { db } from "@/firebase";

import AngrySvg from "@/assets/Angry.svg";
import HeartSvg from "@/assets/Heart.svg";
import LikeSvg from "@/assets/Like.svg";
import SadSvg from "@/assets/Sad.svg";
import SmileSvg from "@/assets/Smile.svg";
import WowSvg from "@/assets/Wow.svg";
import { useAuth } from "@/composables";
import { ReactionEnum } from "@/utils";

const props = defineProps<{
  postId: string;
  value?: string | null;
}>();

const { currentUser, signInAnonymously } = useAuth();
const showReactions = ref(false);
const holdTimeout = ref(null);
const currValue = ref(props.value || null);
const userId = computed(() => currentUser.value?.uid);

const showReactionsDesktop = () => {
  if (!isTouchDevice()) {
    showReactions.value = true;
  }
};

const hideReactions = () => {
  showReactions.value = false;
};

const startHold = () => {
  if (isTouchDevice()) {
    holdTimeout.value = setTimeout(() => {
      showReactions.value = true;
    }, 500); // hold duration
  }
};

const endHold = () => {
  clearTimeout(holdTimeout.value);
};

const onReact = async (name: ReactionEnum) => {
  showReactions.value = false;
  currValue.value = name;
  await addOrUpdateReaction(name);
};

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

const addOrUpdateReaction = async (newReaction: ReactionEnum) => {
  const shoutId = props.postId;

  if (!userId.value) {
    await signInAnonymously();
  }

  const shoutRef = doc(db, "shouts", shoutId);
  const userReactionRef = doc(db, `shouts/${shoutId}/reactions`, userId.value);

  await runTransaction(db, async (transaction) => {
    const userReactionSnap = await transaction.get(userReactionRef);
    const shoutSnap = await transaction.get(shoutRef);

    if (!shoutSnap.exists()) {
      throw new Error("Shout not found");
    }

    const reactionSummary = shoutSnap.data().reactionSummary || {};

    let oldReaction: ReactionEnum | null = null;
    if (userReactionSnap.exists()) {
      oldReaction = userReactionSnap.data().type;
    }

    // If the same reaction is being re-applied, skip (optional behavior)
    if (oldReaction === newReaction) {
      return;
    }

    // Set new reaction for the user
    transaction.set(userReactionRef, {
      type: newReaction,
      timestamp: new Date(),
    });

    // Prepare summary update
    const summaryUpdates: Record<string, any> = {
      [`reactionSummary.${newReaction}`]: increment(1),
    };

    if (oldReaction) {
      summaryUpdates[`reactionSummary.${oldReaction}`] = increment(-1);
    }

    transaction.update(shoutRef, summaryUpdates);
  });
};
</script>

<template>
  <div
    class="react-btn flex items-center justify-center relative"
    @mouseenter="showReactionsDesktop"
    @mouseleave="hideReactions"
    @touchstart="startHold"
    @touchend="endHold"
  >
    <button
      @click="showReactions = !showReactions"
      class="likebtn flex flex-column"
    >
      <template v-if="!currValue">
        <LikeSvg width="18" height="18" /> Like
      </template>
      <template v-else-if="currValue === ReactionEnum.Like">
        <LikeSvg width="18" height="20" fill="#1E90FF" />
        <span class="color-blue">Like</span>
      </template>
      <template v-else-if="currValue === ReactionEnum.Haha">
        <SmileSvg width="22" height="22" />
        <span class="color-yellow">Haha</span>
      </template>
      <template v-else-if="currValue === ReactionEnum.Love">
        <HeartSvg width="22" height="22" /> <span class="color-red">Love</span>
      </template>
      <template v-else-if="currValue === ReactionEnum.Wow">
        <WowSvg width="22" height="22" /> <span class="color-yellow">Wow</span>
      </template>
      <template v-else-if="currValue === ReactionEnum.Sad">
        <SadSvg width="22" height="22" /> <span class="color-yellow">Sad</span>
      </template>
      <template v-else-if="currValue === ReactionEnum.Angry">
        <AngrySvg width="22" height="22" /> <span class="color-red">Angry</span>
      </template>
    </button>

    <div v-if="showReactions" class="reaction-panel">
      <div class="wrap flex flex-center">
        <button @click="onReact(ReactionEnum.Like)">
          <LikeSvg width="20" height="20" fill="#1E90FF" />
        </button>
        <button @click="onReact(ReactionEnum.Haha)">
          <SmileSvg width="24" height="24" />
        </button>
        <button @click="onReact(ReactionEnum.Love)">
          <HeartSvg width="30" height="30" />
        </button>
        <button @click="onReact(ReactionEnum.Wow)">
          <WowSvg width="24" height="24" />
        </button>
        <button @click="onReact(ReactionEnum.Sad)">
          <SadSvg width="28" height="28" />
        </button>
        <button @click="onReact(ReactionEnum.Angry)">
          <AngrySvg width="26" height="26" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.likebtn {
  gap: 0.5rem;
  fill: var(--app-text-color);
  color: var(--app-text-color);
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
}
.reaction-panel {
  position: absolute;
  z-index: 100;
  bottom: 100%;
  display: flex;
  transition: all 0.3s ease;
  left: 0;
  .wrap {
    justify-content: center;
    margin-bottom: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: rgba(80, 80, 80);
    border-radius: 9999px;
    padding: 0.5rem;
    gap: 1rem;
  }
  button {
    padding: 0;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: var(--app-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
button {
  outline: none;
}
</style>
