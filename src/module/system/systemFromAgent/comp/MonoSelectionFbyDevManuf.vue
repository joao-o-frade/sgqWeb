<script>
  import { mapActions, mapState } from 'vuex'
  import oiSelection from '@/genComp/selection/Main.vue'

  export default {
    name: 'SystemMultiselectionFbyDevManufByCheck',

    components: { oiSelection },

    props: {
      filterDevManuf: { type: Array, default: () => [] },
      preSelected: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('systemFromAgent', ['selectedFromCTAndDef'])
    },

    methods: {
      ...mapActions('systemFromAgent', ['loadDataGbyDevManuf']),
      ...mapActions('systemFromAgent', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadDataGbyDevManuf(this.filterDevManuf)
      this.setSelected(this.preSelected)
    },

    watch: {
      'filterDevManuf': {
        handler () {
          this.loadDataGbyDevManuf(this.filterDevManuf)
          this.setSelected(this.preSelected)
        }
      }
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="data"
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
