<script>
  import { paths } from '@/environment'

  export default {
    name: 'ShowGrid',

    props: {
      items: {type: Array}
    },

    data () {
      return {
        pathApp: paths.app
      }
    },

    methods: {
      selectItem (item) {
        this.$router.push('/project/show/' + item.subproject + '/' + item.delivery)
      }
    }
  }
</script>

<template>

  <span style="padding:0px; margin: 0px; border: 0px">

    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">

        <thead>
            <tr>
                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                    
                </th>                                
            
                <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                </th>                                

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Sub/Ent</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Nome</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">UN</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">N4</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">GP</font>
                </th>

                <th class="text-center" style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">GAP</font>
                </th>

                <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                    <font size="2px">Resumo Executivo</font>
                </th>

                <!--
                <th class="text-center" style="padding:0; white-space: nowrap">
                    <font size="2px">Causa Raiz</font>
                </th>

                <th class="text-center" style="padding:0; white-space: nowrap">
                    <font size="2px">Plano Ação</font>
                </th>

                <th class="text-center" style="padding:0; width:130px;">
                    <font size="2px">Estado</font>
                </th>
                -->
            </tr>
        </thead>

        <tbody v-for="item in items">
            <tr>
                <td class="text-center" style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; white-space: nowrap; width:26px;">
                  <a 
                     href="#"
                     :onclick="'window.open(\'' + pathApp + '/projectConsult/show/' + item.subproject + '/' + item.delivery + '\', \'newwindow\', \'\'); return false;'">
                     <i class='glyphicon glyphicon-list-alt' style="padding-top:4px"></i>
                  </a>

                </td>
            
                <td class="text-center" style="padding: 1px; padding-top:4px; margin: 0px; border-top: 1px; padding:1px; font-size:11px">
                    <div class="text-center" style="padding:0;">
                        <img alt="Farol Verde" src="../../../asset/image/verde-sm.png" v-show="item.trafficLight === 'VERDE'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="item.trafficLight === 'AMARELO'" style="padding:0; margin:0; border:0">
                        <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="item.trafficLight === 'VERMELHO'" style="padding:0; margin:0; border:0">
                    </div>
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.subDel}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.name}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.UN}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.N4}}
                </td>

                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.GP}}
                </td>

                <td class="text-center" style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    {{item.gap}}
                </td>
                <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px; padding:1px; font-size:11px">
                    <span v-html="item.informative"/>
                </td>
            </tr>
        
        </tbody> 
        
    </table>

  </span>

</template>

<style scoped>

  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  }
  
</style>
