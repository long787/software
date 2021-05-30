<template>
  <div style="text-align: center" class="container-fluid">
    <h2>便携空调</h2>
    <AirCondition></AirCondition>
  <br>
  <AirControl></AirControl>
  </div>
</template>

<script>
import AirCondition from "../components/AirCondition";
import AirControl from "../components/AirControl";
export default {
  name: "User",
  components:{
    AirCondition,
    AirControl
  }
}
</script>

<style scoped>

</style>