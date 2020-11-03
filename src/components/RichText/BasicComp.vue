<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <button type="button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
        Underline
      </button>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Heading,
  Blockquote,
  Bold,
  BulletList,
  Code,
  CodeBlock,
  CodeBlockHighlight,
  Collaboration,
  HardBreak,
  History,
  HorizontalRule,
  Italic,
  Link,
  ListItem,
  Mention,
  OrderedList,
  Placeholder,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TodoItem,
  TodoList,
  Strike,
  Underline
} from 'tiptap-extensions'

export default {
  name: 'RichTextBasicComp',
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      // Create an `Editor` instance with some default content. The editor is
      // then passed to the `EditorContent` component as a `prop`
      editor: new Editor({
        content: `
        <p>在此输入内容</p>
        <p style="text-decoration: underline">This as well.</p>
        `,
        extensions: [
          new Heading(),
          new Blockquote(),
          new Bold(),
          new BulletList(),
          new Code(),
          new CodeBlock(),
          new CodeBlockHighlight(),
          new Collaboration(),
          new HardBreak(),
          new History(),
          new HorizontalRule(),
          new Italic(),
          new Link(),
          new ListItem(),
          new Mention(),
          new OrderedList(),
          new Placeholder(),
          new Table(),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new TodoItem(),
          new TodoList(),
          new Strike(),
          new Underline()
        ]
      })
    }
  },
  mounted () {

  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
