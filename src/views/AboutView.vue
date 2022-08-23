<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InputText type="text" v-model="text" aria-placeholder="Type"/>
    <Button label="Submit" />

    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      text: "Vue Text",
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
