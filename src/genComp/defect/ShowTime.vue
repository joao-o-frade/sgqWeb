<script>
  // import { mapState } from 'vuex'
  import oiGrid from '@/genComp/grid/main.vue'

  export default {
    name: 'genDefectShowTime',

    props: {
      defectTime: { type: Array, required: true }
    },

    components: { oiGrid },

    computed: {
      columns () {
        return [
          {
            id: 'queue',
            name: 'Fila',
            alignHeader: 'center',
            align: 'left',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'status',
            name: 'Status',
            alignHeader: 'center',
            align: 'left',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'startDate',
            name: 'Início',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'endDate',
            name: 'Fim',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            html: true,
            filterOptions: []
          }, {
            id: 'workTime',
            name: 'Tempo Útil (h)',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            html: true,
            filterOptions: []
          }
        ]
      }
    }
  }
</script>

<template>

    <!--<div v-show="Object.keys(selected).length > 0">-->
    <span>
      <oiGrid slot="body"
        filterTermMessage=""
        :selectionField="false"
        :data="defectTime"
        :columns="columns"
      />
    </span>

</template>

<style scoped>
</style>
