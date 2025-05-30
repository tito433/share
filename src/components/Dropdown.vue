<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  align?: "left" | "right";
}>();

const alignmentClass = computed(() =>
  props.align === "right" ? "align-right" : "align-left"
);
</script>
<template>
  <div class="dropdown" :class="alignmentClass">
    <div class="head">
      <slot name="head">
        <button class="dropdown-button">Menu</button>
      </slot>
    </div>
    <div class="dropdown-arrow" />

    <div class="dropdown-content">
      <div class="wrap">
        <slot>
          <router-link
            v-for="index in 4"
            to="/"
            :key="index"
            class="dropdown-link"
          >
            Menu Item {{ index + 1 }}
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: flex;
  &.align-left {
    .dropdown-content {
      left: 0;
      right: initial;
    }
  }
  &.align-right {
    .dropdown-content {
      right: 0;
      left: initial;
    }
  }
  .head {
    display: flex;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    overflow: hidden;
    padding-top: 0.5rem;
    box-shadow: 0 8px 1rem rgba(0, 0, 0, 0.2);

    .wrap {
      background-color: white;
      min-width: 200px;
    }
    :deep(a) {
      color: #333;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
  &:hover,
  &.open {
    .dropdown-content,
    .dropdown-arrow {
      display: block;
    }
  }
}

.dropdown-arrow {
  display: none;
  position: absolute;
  top: 101%;
  left: 32%;
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid white;
  z-index: 2;
}
</style>
