<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'SystemSelectionFromTestManufs',

    components: { oiSelection },

    props: {
      testManufs: { type: Array, default: () => [] },
      selectedSystem: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['fromTestManufs', 'selected'])
    },

    watch: {
      'testManufs': {
        handler () {
          this.loadFromTestManufs(this.testManufs)
          this.setSelected(this.selectedSystem)
        }
      }
    },

    methods: {
      ...mapActions('system', ['loadFromTestManufs']),
      ...mapActions('system', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadFromTestManufs(this.testManufs)
      this.setSelected(this.selectedSystem)
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="fromTestManufs"
      :selected="selected"
      :showButtonSelected="showButtonSelected"
      gender="male"
      @onConfirm="confirm"
    />
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }
</style>
