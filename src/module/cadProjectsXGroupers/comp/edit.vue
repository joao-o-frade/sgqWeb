<script>
  import oiChartDensityDefectTotal from 'comp/chart/defects/densityDefectTotal'
  import oichartDefectReopenedTotal from 'comp/chart/defects/reopenedTotal'
  import oiChartDefectAverangeTimeTotal from 'comp/chart/defects/DefectAverangeTimeTotal'
  import oiChartdefectOfTSInTI from 'comp/chart/defects/defectOfTSInTI'
  import oiSelection from 'comp/selection/selections.vue'
  import services from 'src/modules/project/services'

  export default {
    name: 'cadProjectsEdit',

    components: { oiChartDensityDefectTotal, oichartDefectReopenedTotal, oiChartDefectAverangeTimeTotal, oiChartdefectOfTSInTI, oiSelection },

    props: {
      project: { type: Object },
      densityDefectTotal: { type: Object },
      DefectAverangeTimeTotal: { type: Object },
      reopenedTotal: { type: Object },
      defectOfTSInTITotal: { type: Object },
      iterations: { type: Array },
      iterationsActive: { type: Array },
      iterationsSelected: { type: Array }
    },

    data () {
      return {
        colors: [
          { portugues: 'VERMELHO', ingles: 'color:red' },
          { portugues: 'VERDE', ingles: 'color:green' },
          { portugues: 'AMARELO', ingles: 'color:gold ' }
        ],

        config: {
          language: 'pt_br',
          events: {
            'froalaEditor.initialized': function () {
            }
          }
        },

        project: ''
      }
    },

    updated () {
      if (this.project !== this.project.subDel) {
        this.project = this.project.subDel
        this.loadIterations()
        this.loadIterationsActive()
        this.loadIterationsSelected()
      }
    },

    methods: {
      color (item) {
        let index = this.colors.findIndex(i => i.portugues === item)
        return (index > -1) ? this.colors[index].ingles : ''
      },

      loadIterations () {
        services.getIterations(this.project)
          .then(resp => {
            this.iterations = resp.data
          }
        )
      },

      loadIterationsActive () {
        services.getIterationsActive(this.project)
          .then(resp => {
            this.iterationsActive = resp.data
            /*
            if (this.iterationsSelected.length === 1) {
              if (this.iterationsSelected[0] === '') {
                this.iterationsSelected = []
              }
            }
            */
          }
        )
      },

      loadIterationsSelected () {
        services.getIterationsSelected(this.project)
          .then(resp => {
            this.iterationsSelected = resp.data
          }
        )
      },

      ConfirmIterations (iterationsActive) {
        if (this.iterationsActive !== iterationsActive) {
          this.iterationsActive = iterationsActive
          this.iterationsSelected = iterationsActive
          services.updateIterationsActive({ projectId: this.project.id, iterations: this.iterationsActive })
            .then(resp => {
              if (iterationsActive.length > 0) {
                this.loadDataIterations()
              } else {
                this.loadData()
              }
            }
          )

          services.updateIterationsSelected({ projectId: this.project.id, iterations: this.iterationsActive })
        }
      }

    }

  }
</script>

<template>
  <div id="cadProjectsEdit">
    
    <div id="cabecalho" class="row well well-sm oi-well" >
      <div class="col-xs-12 col-md-6 oi-col">
        <div>
          <label class="fd-label">Sub/Ent:</label>
          <label class="fd-content">{{project.subDel}}</label>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 oi-col">
        <div>
          <label class="fd-label">Nome:</label>
          <label class="fd-content">{{project.name}}</label>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 oi-col">
        <div>
          <label class="fd-label">GP:</label>
          <label class="fd-content">{{project.GP}}</label>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 oi-col">
        <div>
          <label class="fd-label">N3:</label>
          <label class="fd-content">{{project.N3}}</label>
        </div>
      </div>
    </div> 

    <div id="abas" class="row well well-sm oi-well" >
      <div class="row well-sm oi-well">
          <ul class="nav nav-tabs" style="margin-top:3px">
            <li class="active">
              <a data-toggle="tab" href="#trafficLight" style="padding: 0 5px 0 5px">Farol
                <img alt="Farol Verde" src="../../../assets/images/verde.png"  v-show="project.trafficLight === 'VERDE'">
                <img alt="Farol Amarelo" src="../../../assets/images/amarelo.png" height="17" width="17" v-show="project.trafficLight === 'AMARELO'">
                <img alt="Farol Vermelho" src="../../../assets/images/vermelho.png" height="17" width="17" v-show="project.trafficLight === 'VERMELHO'">
              </a>
            </li>
            <li><a data-toggle="tab" href="#informative" style="padding: 0 5px 0 5px">Resumo Executivo</a></li>
            <li><a data-toggle="tab" href="#attentionPoints" style="padding: 0 5px 0 5px">Pontos de Atenção</a></li>
            <li><a data-toggle="tab" href="#attentionPointsOfindicator" style="padding: 0 5px 0 5px">Indicadores</a></li>
            <li><a data-toggle="tab" href="#iterationsActive" style="padding: 0 5px 0 5px">Filtros</a></li>
          </ul>

          <div class="tab-content">
            <div id="trafficLight" class="tab-pane fade in active" style="padding:0; margin:0; text-align: center">
                <div class="col-xs-12 oi-col">
                    <input type="radio" id="green" value="VERDE" v-model="project.trafficLight">
                    <label for="green">Verde</label>

                    <input type="radio" id="yellow" value="AMARELO" v-model="project.trafficLight">
                    <label for="yellow">Amarelo</label>

                    <input type="radio" id="red" value="VERMELHO" v-model="project.trafficLight">
                    <label for="red">Vermelho</label>
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Causa Raíz</label>
                    <!--
                    <textarea id="opiniao"
                      rows="5" name="opiniao" 
                      v-model="project.rootCause"
                      wrap="hard">
                    </textarea>
                    -->
                    <froala :tag="'textarea'" :config="config" v-model="project.rootCause"></froala>
                </div>

                <div class="col-xs-12 oi-col">
                    <label class="fd-label">Plano de Ação</label>
                    <!--
                    <textarea id="opiniao"
                      rows="5" name="opiniao" 
                      v-model="project.actionPlan"
                      wrap="hard"> 
                    </textarea>
                    -->
                    <froala :tag="'textarea'" :config="config" v-model="project.actionPlan"></froala>
                </div>
            </div>

            <div id="informative" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 oi-col">
                  <!--
                  <textarea id="opiniao" 
                    rows="10" name="opiniao" 
                    v-model="project.informative"
                    wrap="hard">
                  </textarea>
                  -->
                  <froala :tag="'textarea'" :config="config" v-model="project.informative"></froala>
              </div>
            </div>

            <div id="attentionPoints" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 oi-col">
                  <!--
                  <textarea id="opiniao"
                    rows="10" name="opiniao" 
                    v-model="project.attentionPoints"
                    wrap="hard">
                  </textarea>
                  -->
                  <froala :tag="'textarea'" :config="config" v-model="project.attentionPoints"></froala>
              </div>
            </div>

            <div id="attentionPointsOfindicator" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <!--
              <div class="col-xs-12 oi-col">
                  <label class="fd-label">Pontos de Atenção</label>
                  <textarea id="opiniao"
                    rows="5" name="opiniao" 
                    v-model="project.attentionPointsOfindicator"
                    wrap="hard">
                  </textarea>
              </div>
              <div class="row">
                <label class="fd-label">Indicadores</label>
              </div>
              -->

              <div class="col-xs-6 col-md-3 oi-col">
                <oiChartDensityDefectTotal :value="densityDefectTotal"/>
              </div>

              <div class="col-xs-6 col-md-3 oi-col">
                <oiChartDefectAverangeTimeTotal :value="DefectAverangeTimeTotal"/>
              </div>

              <div class="col-xs-6 col-md-3 oi-col">
                <oichartDefectReopenedTotal :value="reopenedTotal"/>
              </div>

              <div class="col-xs-6 col-md-3 oi-col">
                <oiChartdefectOfTSInTI :value="defectOfTSInTITotal"/>
              </div>

            </div>

            <div id="iterationsActive" class="tab-pane fade in" style="padding:0; margin:0; text-align: center">
              <div class="col-xs-12 text-left" style="margin:5px; border:0; padding:0; padding-top:10px">
                <oiSelection
                  idChild="iterations"
                  title="Iterations Ativos"
                  :dataSource="iterations"
                  :itemsSelected="iterationsActive"
                  :showButtonSelected="false"
                  @onChangeSelected="ConfirmIterations"
                />                              
              </div>    
            </div>
                
          </div>
      </div>  
    </div>  
  </div>  
</template>

<style scoped>
  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 3px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 0; 
    font-weight: normal;
  }

  label[for="green"] {
    color: green;
  }

  label[for="yellow"] {
    color: yellow;
  }

  label[for="red"] {
    color: red;
  }

  textarea {
    min-width: 100%
  }

  img {
    margin-top: 4px;
    vertical-align: top;
    height: 12px;
    width: 12px;
  }  
</style>