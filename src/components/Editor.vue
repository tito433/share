<script setup>
import {
  ref,
  computed,
  watch,
  onBeforeUnmount,
  defineProps,
  defineEmits,
} from "vue";
import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

// Props & emits
const props = defineProps({
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);

// Editor ref
const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    emit("update:modelValue", editor.getHTML());
  },
});

onBeforeUnmount(() => editor.value?.destroy?.());

// SVGs (simple, optimized)
const icons = {
  bold: `<svg  viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H15C16.4587 21.5 17.8576 20.9205 18.8891 19.8891C19.9205 18.8576 20.5 17.4587 20.5 16C20.5 14.5413 19.9205 13.1424 18.8891 12.1109C18.6781 11.9 18.4518 11.7079 18.2128 11.5359C19.041 10.5492 19.5 9.29829 19.5 8C19.5 6.54131 18.9205 5.14236 17.8891 4.11091C16.8576 3.07946 15.4587 2.5 14 2.5H6ZM14 10.5C14.663 10.5 15.2989 10.2366 15.7678 9.76777C16.2366 9.29893 16.5 8.66304 16.5 8C16.5 7.33696 16.2366 6.70107 15.7678 6.23223C15.2989 5.76339 14.663 5.5 14 5.5H7.5V10.5H14ZM7.5 18.5V13.5H15C15.663 13.5 16.2989 13.7634 16.7678 14.2322C17.2366 14.7011 17.5 15.337 17.5 16C17.5 16.663 17.2366 17.2989 16.7678 17.7678C16.2989 18.2366 15.663 18.5 15 18.5H7.5Z" fill="currentColor"></path></svg>`,
  italic: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.0222 3H19C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H15.693L10.443 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H9.02418C9.00802 21.0004 8.99181 21.0004 8.97557 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H8.30704L13.557 5H10C9.44772 5 9 4.55228 9 4C9 3.44772 9.44772 3 10 3H14.9782C14.9928 2.99968 15.0075 2.99967 15.0222 3Z" fill="currentColor"></path></svg>`,
  heading1: `<svg viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6v12M4 12h8M12 6v12M17 12h3M20 12v6" /></svg>`,
  heading2: `<svg viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6v12M4 12h8M12 6v12M17 10c0-1.1.9-2 2-2s2 .9 2 2c0 1.1-2 1.5-2 3h2m-2 3h2" /></svg>`,
  paragraph: `<svg viewBox="0 0 24 24" stroke="currentColor"><path d="M6 4h12M6 8h12M6 12h8m-8 4h6" /></svg>`,
  ul: `<svg viewBox="0 0 24 24" stroke="currentColor"><circle cx="4" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="4" cy="18" r="1.5"/><line x1="8" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="8" y1="18" x2="20" y2="18"/></svg>`,
  ol: `<svg viewBox="0 0 24 24" stroke="currentColor"><text x="2" y="7" font-size="6">1.</text><text x="2" y="13" font-size="6">2.</text><text x="2" y="19" font-size="6">3.</text><line x1="8" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="8" y1="18" x2="20" y2="18"/></svg>`,
  //   undo: `<svg viewBox="0 0 24 24" stroke="currentColor"><path d="M9 14l-4-4 4-4M5 10h8a4 4 0 110 8h-1" /></svg>`,
  //   redo: `<svg viewBox="0 0 24 24" stroke="currentColor"><path d="M15 10l4 4-4 4M19 14H11a4 4 0 010-8h1" /></svg>`,
};

// Toolbar button groups
const buttonGroups = computed(() => {
  if (!editor.value) return [];

  return [
    [
      {
        name: "bold",
        svg: icons.bold,
        tooltip: "Bold",
        action: () => editor.value.chain().focus().toggleBold().run(),
        isActive: () => editor.value.isActive("bold"),
      },
      {
        name: "italic",
        svg: icons.italic,
        tooltip: "Italic",
        action: () => editor.value.chain().focus().toggleItalic().run(),
        isActive: () => editor.value.isActive("italic"),
      },
    ],
    [
      {
        name: "heading1",
        svg: icons.heading1,
        tooltip: "Heading 1",
        action: () =>
          editor.value.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.value.isActive("heading", { level: 1 }),
      },
      {
        name: "heading2",
        svg: icons.heading2,
        tooltip: "Heading 2",
        action: () =>
          editor.value.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.value.isActive("heading", { level: 2 }),
      },
      {
        name: "paragraph",
        svg: icons.paragraph,
        tooltip: "Paragraph",
        action: () => editor.value.chain().focus().setParagraph().run(),
        isActive: () => editor.value.isActive("paragraph"),
      },
    ],
    [
      {
        name: "ul",
        svg: icons.ul,
        tooltip: "Bullet List",
        action: () => editor.value.chain().focus().toggleBulletList().run(),
        isActive: () => editor.value.isActive("bulletList"),
      },
      {
        name: "ol",
        svg: icons.ol,
        tooltip: "Ordered List",
        action: () => editor.value.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.value.isActive("orderedList"),
      },
    ],
    // [
    //   {
    //     name: "undo",
    //     svg: icons.undo,
    //     tooltip: "Undo",
    //     action: () => editor.value.chain().focus().undo().run(),
    //   },
    //   {
    //     name: "redo",
    //     svg: icons.redo,
    //     tooltip: "Redo",
    //     action: () => editor.value.chain().focus().redo().run(),
    //   },
    // ],
  ];
});
</script>
<template>
  <div class="rich-editor-wrap">
    <div class="toolbar">
      <div v-for="(group, i) in buttonGroups" :key="i" class="item-group">
        <button
          v-for="btn in group"
          :key="btn.name"
          :title="btn.tooltip"
          @click="btn.action"
          v-html="btn.svg"
          :class="['item', btn.isActive?.() ? 'bg-gray-200' : '']"
        ></button>
      </div>
    </div>
    <EditorContent :editor="editor" class="rich-editor" />
  </div>
</template>

<style scoped lang="scss">
.rich-editor-wrap {
  --min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .toolbar {
    display: flex;
    gap: 0.5rem;
    .item-group {
      display: flex;
      gap: 1px;
      button {
        background-color: rgb(107, 107, 107);
        width: 2rem;
        height: 2rem;
        border: none;
        border-radius: 0;
        svg {
          fill: rgb(255, 255, 255);
        }
      }
    }
  }
  .rich-editor {
    min-height: var(--min-height);
    padding: 0.5rem;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
  }
}
:deep(.ProseMirror) {
  min-height: var(--min-height);
  position: relative;
  padding: 0.25rem 0.5rem;
  line-height: 1.2;
  outline: none;
  p {
    margin-bottom: 1em;
  }
  p:first-child,
  .ProseMirror h1:first-child,
  .ProseMirror h2:first-child,
  .ProseMirror h3:first-child,
  .ProseMirror h4:first-child,
  .ProseMirror h5:first-child,
  .ProseMirror h6:first-child {
    margin-top: 10px;
  }
}
</style>
