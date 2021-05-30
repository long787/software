<template>
  <div>
    <h1 class="text-center mb-5">日报表</h1>

    <div class="card mr-5 ml-5 shadow-lg mb-5">
      <div class="card-header text-center">
        <h4>房间号：1</h4>
      </div>
      <div class="card-body mr-5 ml-5">
        <p class="card-text">从控机开关机次数：5</p>
        <div class="table-responsive pagination">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">开启时间</th>
              <th scope="col">关闭时间</th>
              <th scope="col">初始温度</th>
              <th scope="col">目标温度</th>
              <th scope="col">风量消耗</th>
              <th scope="col">所需费用</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2021.05.20 9:20</td>
              <td>2021.05.20 9:21</td>
              <td>23℃</td>
              <td>25℃</td>
              <td>100L</td>
              <td>￥100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mr-5 ml-5 shadow-lg">
      <div class="card-header text-center">
        <h4>房间号：2</h4>
      </div>
      <div class="card-body mr-5 ml-5">
        <p class="card-text">从控机开关机次数：5</p>
        <div class="table-responsive pagination">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">开启时间</th>
              <th scope="col">关闭时间</th>
              <th scope="col">初始温度</th>
              <th scope="col">目标温度</th>
              <th scope="col">风量消耗</th>
              <th scope="col">所需费用</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2021.05.20 9:20</td>
              <td>2021.05.20 9:21</td>
              <td>23℃</td>
              <td>25℃</td>
              <td>100L</td>
              <td>￥100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Formmes"
}
</script>

<style scoped>

</style>