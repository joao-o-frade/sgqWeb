<script>
  import oiModal from '@/genComp/modal/Modalx.vue'
  import oiShow from './Show.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'ShowButtonChartCFD',

    components: { oiModal, oiShow },

    props: {
      project: {type: Object}
    },

    methods: {
      ...mapActions('pulledChain', ['setSelected'])
    }
  }
</script>

<template>
    <span style="margin:0; border:0; padding:0">
        <a class='btn btn-xs my-tool-tip'
            title="Exibir"
            style="padding:0;margin:0; text-right"
            @click="setSelected(project)"
            data-toggle="modal"
            :data-target="'#modalShow' + project.id">
            <span class="glyphicon glyphicon glyphicon glyphicon-list-alt icon"></span>
        </a>

        <oiModal :id="'modalShow' + project.id">
            <span style="margin:0; border:0; padding:0" slot="header">
                <div class="col-xs-1" style="margin:0; border:0; padding:0; text-align: left">
                    <a class="btn btn-primary btn-xs"
                        role="button"
                        data-dismiss="modal">
                        Fechar
                    </a>
                </div>

                <div class="col-xs-10" style="margin:0; border:0; padding:0; text-align: center">
                    <label class="fd-label">[Entrega] {{project.subDel}} - {{project.name}}</label>
                </div>

                <hr class="col-xs-12">
            </span>
            
            <oiShow slot="body"/>
        </oiModal>
    </span>
</template>

<style scoped>
  .icon {
    font-size: medium;
  }
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    font-size: 13px; 
    white-space: normal;
  }
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  } 
</style>
