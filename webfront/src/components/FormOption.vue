<template>
  <div>
    <br>
    <div class="card text-center shadow-lg ml-5 mr-5">
      <div class="card-header">
        <h4>选择查看的房间号和时间段</h4>
      </div>
      <div class="card-body ml-5 mr-5">
        <br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">开始日期</span>
          </div>
          <b-form-datepicker id="sd"></b-form-datepicker>
        </div>
        <br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon2">结束日期</span>
          </div>
          <b-form-datepicker id="sd"></b-form-datepicker>
        </div>
        <br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">房间号</span>
          </div>
          <input type="number" class="form-control" placeholder="RoomNumber" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="card-footer text-muted text-center">
        <div class="custom-control custom-radio custom-control-inline mr-5 ml-5">
          <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline1">日报表</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline mr-5 ml-5">
          <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline2">周报表</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline mr-5 ml-5">
          <input type="radio" id="customRadioInline3" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline3">月报表</label>
        </div>
        <div>
          <br>
          <a class="btn btn-success" href="#/master/formmes" role="button">查询报表</a>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormOption"
}
</script>

<style scoped>

</style>