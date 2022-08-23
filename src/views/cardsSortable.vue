<template>
  <div>
    <div id="container"></div>
    <DxSortable
      filter=".card"
      :data="cards"
      item-orientation="horizontal"
      drag-direction="both"
      @drag-start="onTabDragStart($event)"
      @reorder="onTabDrop($event)"
    >
      <template>
        <div class="row">
          <div v-for="card in cards" :key="card.id" class="col-lg-4">
            <donChart
              :cardHeader="card.header + ' title'"
              :totalInitiatives="card.total"
              :total="card.showtotla"
              :idChart="card.id"
            ></donChart>
          </div>
          <!-- <charts></charts> -->
        </div>
      </template>
    </DxSortable>
  </div>
</template>

<script>
import DxSortable from "devextreme-vue/sortable";
import donChart from "../components/charts/donChart.vue";
// import charts from "../views/charts.vue";
import service from "../stores/counter.js";

const allCards = service.getCardSortable();

export default {
  components: {
    DxSortable,
    donChart,
  },
  data() {
    return {
      cards: allCards,
    };
  },
  methods: {
    onTabDragStart(e) {
      e.itemData = e.fromData[e.fromIndex];
    },

    onTabDrop(e) {
      const newCards = [...this.cards];

      newCards.splice(e.fromIndex, 1);
      newCards.splice(e.toIndex, 0, e.itemData);

      this.cards = newCards;
    },
  },
};
</script>

<style>

</style>