<template>
  <div class="charts">
    <div class="container">
      <div class="row my-3">
        <div class="col-lg-4">
          <donChart
            cardHeader="Intiatives title"
            totalInitiatives="29"
            :total="true"
            idChart="donateCh"
          ></donChart>
        </div>
        <div class="col-lg-4">
          <pieChart
            cardHeader="Projects title"
            totalInitiatives="19"
          ></pieChart>
        </div>
        <div class="col-lg-4">
          <pieChart
            cardHeader="Intiatives title"
            totalInitiatives="35"
          ></pieChart>
        </div>
        <div class="col-lg-4">
          <barChart
            cardHeader="Intiatives title"
            totalInitiatives="15"
            :total="false"
          ></barChart>
        </div>

        <!-- <DxDraggable
          :data="barChart"
          :drag-template="barChart"
        >
          {{ task.text }}
          <template #myDragTemplate="{ data }">
            <div>{{ data.itemData }} + "drag template"</div>
            
          </template>
        </DxDraggable> -->
      </div>
    </div>
  </div>
</template>

<script>
import donChart from "../components/charts/donChart.vue";
import pieChart from "../components/charts/pieChart.vue";
import barChart from "../components/charts/barChart.vue";
// import DxDraggable from "devextreme-vue/draggable";

export default {
  components: {
    donChart,
    pieChart,
    barChart,

    // DxDraggable,
  },
  data() {
    return {
      text: "Vue Text",
    };
  },
};
</script>

<style>
#donateCh {
  height: 240px;
}
.card {
  margin-bottom: 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>