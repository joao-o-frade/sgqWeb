<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import oiGrid from '@/genComp/grid/main.vue'
  import oiModal from '@/genComp/modal/Modal2.vue'

  export default {
    name: 'Monoselection',
    visible: true,

    components: { oiModal, oiGrid },

    computed: {
      ...mapState('bitiProj', ['data', 'selected', 'loading']),
      ...mapGetters('bitiProj', [
        'distinctState',
        'distinctClassification',
        'distinctUN',
        'distinctReleaseSGQ',
        'distinctReleaseClarity',
        'distinctCategory',
        'distinctGP',
        'distinctGpN4',
        'distinctGpN3',
        'distinctLT',
        'distinctLtN4',
        'distinctLtN3',
        'distinctPMO',
        'distinctBusinessAnalyst',
        'distinctTestLeader'
      ]),

      columns () {
        return [
          {
            id: 'subDel',
            name: 'Sub/Ent',
            alignHeader: 'center',
            align: 'center',
            visible: true,
            sort: true,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'name',
            name: 'Nome',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'state',
            name: 'Estado',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctState
          }, {
            id: 'classification',
            name: 'Class.',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctClassification
          }, {
            id: 'un',
            name: 'UN',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctUN
          }, {
            id: 'releaseSGQFormat',
            name: 'Release<br>SGQ',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctReleaseSGQ
          }, {
            id: 'releaseClarityFormat',
            name: 'Release<br>Clarity',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctReleaseClarity
          }, {
            id: 'category',
            name: 'Categoria',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctCategory
          }, {
            id: 'GP',
            name: 'GP',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctGP
          }, {
            id: 'GP_N4',
            name: 'GP-N4',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctGpN4
          }, {
            id: 'GP_N3',
            name: 'GP-N3',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctGpN3
          }, {
            id: 'LT',
            name: 'LT',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctLT
          }, {
            id: 'LT_N4',
            name: 'LT-N4',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctLtN4
          }, {
            id: 'LT_N3',
            name: 'LT-N3',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctLtN3
          }, {
            id: 'businessAnalyst',
            name: 'Analista<br>Negócio',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctBusinessAnalyst
          }, {
            id: 'PMO',
            name: 'PMO',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctPMO
          }, {
            id: 'testLeader',
            name: 'Lider<br>Teste',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: false,
            sort: true,
            yesNoImage: false,
            filterOptions: this.distinctTestLeader
          }, {
            id: 'systemsDev',
            name: 'Sistemas<br>Desenvolvimento',
            alignHeader: 'center',
            align: 'left',
            minWidth: '300px',
            visible: false,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'systemsTest',
            name: 'Sistemas<br>Teste',
            alignHeader: 'center',
            align: 'left',
            minWidth: '200px',
            visible: false,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'hasTest',
            name: 'Há<br>Teste',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'finishedSystemsInDSOL',
            name: 'Sist.<br>Concl.<br>no DSOL',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'qualityProposalWithGo',
            name: 'Prop.<br>Qualid<br>Com GO',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'approvedSolutionDrawing',
            name: 'Desen.<br>solução<br>Aprov.',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'scheduleApproved',
            name: 'Cronog.<br>Aprov.',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'preCandidature',
            name: 'Pré<br>Candi-<br>datura',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: true,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'candidature',
            name: 'Can-<br>dida-<br>tura',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: true,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'constructionCompleted',
            name: 'Const.<br>Finaliz.',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: true,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'hasGMUD',
            name: 'Há<br>GMUD',
            alignHeader: 'center',
            align: 'center',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: true,
            filterOptions: [{ id: 'SIM', name: 'SIM' }, { id: 'NÃO', name: 'NÃO' }]
          }, {
            id: 'favorableOpinionImplantation',
            name: 'Implant<br>Favorável',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: true,
            yesNoImage: false,
            filterOptions: []
          }
        ]
      }
    },

    methods: {
      ...mapActions('bitiProj', ['loadData', 'setSelected'])
    },

    mounted () {
      this.loadData()

      // if (Object.keys(this.selected).length === 0) {
      //   this.$refs.buttonModal.click()
      // }
    }
  }
</script>

<template>
  <span>

    <!--
    <span style="margin:0; border:0; padding:0; padding-left: 5px">
    <button style="margin-top:2px"
        type="button"     
        ref="buttonModal"
        class="btn btn-xs"
        data-toggle="modal" 
        data-target="#modalSelectionProjectx">Seleção
    </button>
    
    <oiModal id="modalSelectionProjectx" ref="vuemodal" title="Seleção" size="l" >
      <div class="loader" slot="body" v-show="loading" style="margin-top: 25px;margin-bottom: 25px"/>
      <oiGrid v-show="!loading" slot="body"
    -->

      <div class="loader" v-show="loading"/>
      <oiGrid v-show="!loading"
        filterTermMessage="Informe os filtros! Na pesq. de farol, digite a cor 'verd', 'amar' ou 'verm'. Ex: verd+multip+2017."
        selectionType="mono"
        :data="data"
        :columns="columns"
        @setSelected="setSelected"
      />
    <!--
    </oiModal>    
    -->
  </span>
</template>

<style scoped>
  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #e95420; /* Blue */
      border-bottom: 16px solid #e95420;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>