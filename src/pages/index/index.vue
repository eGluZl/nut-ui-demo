<template>
  <view class="index">
    <view class="container">
      <view class="date-warp" @tap="showDate1 = true">
        <view class="k">
          date1(true)：
        </view>
        <view class="v">{{ date1 }}</view>
      </view>
      <view class="date-warp" @tap="showDate2 = true">
        <view class="k">
          date2(false)：
        </view>
        <view class="v">{{ date2 }}</view>
      </view>
    </view>
    <nut-datepicker
        title="日期时间选择"
        type="datetime"
        @confirm="confirm1"
        :safe-area-inset-bottom="true"
        v-model:visible="showDate1"
    />
    <nut-datepicker
        title="日期时间选择"
        type="datetime"
        @confirm="confirm2"
        :safe-area-inset-bottom="false"
        v-model:visible="showDate2"
    />
  </view>
</template>

<script lang="ts" setup>
  //@ts-ignore
  import { ref } from "vue";

  const date1 = ref();
  const date2 = ref();

  const showDate1 = ref(false);
  const showDate2 = ref(false);

  const confirm1 = ( { selectedValue } )=>{
    date1.value = selectedValue.join(':');
  }
  const confirm2 = ( { selectedValue } )=>{
    date2.value = selectedValue.join(':');
  }

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  max-width: 100vw;
}
.container {
  display: flex;
  justify-content: center;
  width: 750px;
  overflow: hidden;
  flex-direction: column;

}
.date-warp {
  width: 686px;
  margin: 12px 32px;
  display: flex;
  align-items: center;
  .k {
    margin-right: 12px;
  }
  .v {
    border: 1px solid navajowhite;
    height: 42px;
    width: 520px;
    display: flex;
    align-items: center;
  }
}
</style>
