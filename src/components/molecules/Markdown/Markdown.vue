<template>
  <div class="Markdown">
    <VueMarkdown :source="mdText" />
  </div>
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Markdown',
  components: {
    VueMarkdown
  },
  props: {
    src: { type: String, default: null }
  },

  data: function()
  {
    return ({'mdText': ''})
  },
  mounted()
  {
    axios.get(this.src).then(response => {this.mdText = response.data})
  }
}
</script>

<style lang="scss">

</style>