<script>
  export default {
    name: 'ProjectsGrid',

    props: {
      dataSource: {type: Array}
    },

    data () {
      return {
        selected_: [],

        project: {},

        colors: [
          { portugues: 'VERMELHO', ingles: 'red' },
          { portugues: 'VERDE', ingles: 'green' },
          { portugues: 'AMARELO', ingles: 'gold' }
        ]
      }
    },

    methods: {
      onSelectItem (item, state) {
        this.$emit('onSelectItem', item, state)
      },

      color (item) {
        let index = this.colors.findIndex(i => i.portugues === item)
        return (index > -1) ? this.colors[index].ingles : ''
      }
    }
  }
</script>

<template>
  <div id="projectsGrid">
    <table class="table table-condensed table-striped table-hover table-bordered" >
        <thead>
            <tr>
                <th class="text-center" style="padding:0; width:26px;">
                </th>                                
           
                <th class="text-center" style="padding:0; width:26px;">
                    <font size="2px">Farol</font>
                </th>                                

                <th class="text-center" style="padding:0">
                    <font size="2px">Clas.</font>
                </th>

                <th class="text-center" style="padding:0">
                    <font size="2px">Rel.</font>
                </th>

                <th class="text-center" style="padding:0">
                    <font size="2px">Sub/Ent</font>
                </th>

                <th class="text-center" style="padding:0">
                    <font size="2px">Nome</font>
                </th>


                <th class="text-center" style="padding:0; width:130px;">
                    <font size="2px">Estado</font>
                </th>
            </tr>
        </thead>
        <tbody v-for="item in dataSource">
            <tr>
                <td class="text-center" style="padding:0; margin:0; border:0">
                  <a class='btn oi-icon' 
                    data-toggle="tooltip" 
                    title="Exibir" 
                    style="padding:0"
                    @click="onSelectItem(item, 'show')">
                    <i class='glyphicon glyphicon-list-alt'></i>
                  </a>
                </td>
            
                <td class="text-center" style="padding:0;">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../../asset/image/verde-sm.png" v-show="item.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="item.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="item.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
                    </div>
                </td>

                <td class="text-center" style="padding:1px">
                    <font size="2px">{{item.classification ? item.classification.substring(0,3) : ''}}</font>
                </td>

                <td class="text-center" style="padding:1px">
                    <font size="2px">{{item.release}}</font>
                </td>

                <td class="text-center" style="padding:1px">
                    <font size="2px">{{item.project}}</font>
                </td>

                <td class="text-left" style="padding:1px">
                    <font size="1.5px">{{item.name}}</font>
                </td>

                <td class="text-center" style="padding:1px">
                    <font size="1.5px">{{item.state}}</font>
                </td>
            </tr>
        </tbody> 
    </table>
  </div>
</template>

<style scoped>
  .oi-icon {
    font-size: medium;
  }
  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  }  
</style>
