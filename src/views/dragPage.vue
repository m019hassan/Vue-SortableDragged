<template>
  <div class="dragPage">
    <div class="container">
      <div class="row">
        <!-- <DxScrollView id="scroll"> -->
        <DxDraggable
          id="list"
          :group="draggingGroupName"
          :on-drag-start="onListDragStart"
          data="dropArea"
          class="row"
        >
          <DxDraggable
            v-for="card in cardDrag"
            :key="card.id"
            :clone="true"
            :allow-reordering="true"
            :group="draggingGroupName"
            :data="card"
            class="col-lg-4 col-6"
            :on-drag-start="onItemDragStart"
            :on-drag-end="onItemDragEnd"
          >
            <!-- <div class="card">
              <div class="card-header">{{ card.header }}</div>
              <div class="card-body"> -->
            <donChart
              :cardHeader="card.id + ' Intiatives title'"
              :totalInitiatives="card.total"
              total="show"
              idChart="donateCh"
            ></donChart>
            <!-- </div>
            </div> -->
            <!-- 
            <template #donChart="{ card }">
              <div class="card">
                <div class="card-header">header</div>
                <div class="card-body">{{ card.content }}</div>
              </div>
            </template> -->
          </DxDraggable>
        </DxDraggable>

        <hr />

        <!-- <DxList
          :data-source="plannedTasks"
          :repaint-changes-only="true"
          key-expr="id"
        >
          <DxItemDragging
            data="plannedTasks"
            :allow-reordering="true"
            :on-drag-start="onDragStart"
            :on-add="onAdd"
            :on-remove="onRemove"
            group="tasks"
          />
        </DxList> -->
        <!-- </DxScrollView> -->
      </div>
    </div>
  </div>
</template>

<script>
// import DxDraggable from "devextreme-vue/draggable";
import DxList, { DxItemDragging } from "devextreme-vue/list";
import DxDraggable from "devextreme-vue/draggable";
// import DxScrollView from "devextreme-vue/scroll-view";
// import donChart from "../components/charts/donChart.vue";

import donChart from "../components/charts/donChart.vue";

import { cardDrag } from "../stores/counter.js";
import { doingTasks, plannedTasks } from "../stores/counter.js";

export default {
  components: {
    // DxScrollView,
    // DxList,
    // DxItemDragging,
    DxDraggable,
    donChart,
  },
  data() {
    return {
      draggingGroupName: "appointmentsGroup",
      cardDrag,
      plannedTasks,
      doingTasks,
      donChart,
    };
  },
  methods: {
    onDragStart(e) {
      e.itemData = this[e.fromData][e.fromIndex];
    },
    onAdd(e) {
      const data = [...this[e.toData]];
      data.splice(e.toIndex, 0, e.itemData);
      this[e.toData] = data;
    },
    onRemove(e) {
      const data = [...this[e.fromData]];
      data.splice(e.fromIndex, 1);
      this[e.fromData] = data;
    },
    onListDragStart(e) {
      e.cancel = true;
    },
    onItemDragStart(e) {
      e.itemData = e.fromData;
    },
    onItemDragEnd(e) {
      if (e.toData) {
        e.cancel = true;
      }
    },
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