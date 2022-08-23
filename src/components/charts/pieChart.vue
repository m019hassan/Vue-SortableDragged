<script setup>
defineProps({
  totalInitiatives: {
    type: Number,
  },
  idChart: {
    type: String,
    required: true,
  },
  cardHeader: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header">header {{ cardHeader }}</div>
    <div class="p-2">
      <div
        class="kpisValue dark-red"
        style="
          width: 92px;
          position: absolute;
          bottom: 8px;
          box-shadow: rgb(224, 224, 224) 0px 2px 1px;
          right: 15px;
        "
      >
        <small style="font-size: 11px">إجمالي المبادرات</small
        >{{ totalInitiatives }}
      </div>

      <DxPieChart
        id="pie"
        :data-source="populationByRegions"
        type="doughnut"
        palette="Soft"
      >
        <DxSeries argument-field="region">
          <DxLabel :visible="true" >
            <DxConnector :visible="true" />
          </DxLabel>
        </DxSeries>
        <!-- <DxExport :enabled="true"/> -->
        <DxLegend
          :margin="0"
          horizontal-alignment="right"
          vertical-alignment="top"
        />
        <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip">
          <!-- <DxFormat type="millions" /> -->
        </DxTooltip>
      </DxPieChart>
    </div>
  </div>
</template>
<script>
import DxPieChart, {
  DxLegend,
  DxSeries,
  DxTooltip,
  DxFormat,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";
import { populationByRegions } from "../../stores/counter.js";
export default {
  components: {
    DxPieChart,
    DxLegend,
    DxSeries,
    DxTooltip,
    DxFormat,
    DxLabel,
    DxConnector,
    DxExport,
  },
  data() {
    return {
      populationByRegions,
    };
  },
  methods: {
    customizeTooltip({ valueText, percent }) {
      return {
        text: `${valueText} - ${(percent * 100).toFixed(2)}%`,
      };
    },
  },
};
</script>

<style>
#pie {
  height: 240px;
}
</style>
<style scoped>
.kpisValue {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 4px;
  direction: rtl;
  font-size: 18px;
  text-align: center;
  /* color: #30b32d; */
  padding: 3px 8px;
  font-size: 16px;
}
.kpisValue small {
  display: block;
  color: #000;
  margin-bottom: 5px;
}
.dark-red {
  color: #6e1946 !important;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
