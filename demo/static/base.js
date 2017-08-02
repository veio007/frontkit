
//页面初使化时，检查当前页是否存在相关元素，如果存在，绑定相应的事件
$(document).ready(function () {
    // 需要在页面加载完毕之后才能激活日期时间选择器
    if($('.m-date-picker input').length > 0){
        $('.m-date-picker input').datetimepicker({ language: 'zh-CN', weekStart: 1, format: "yyyy-mm-dd", pickerPosition: "bottom-left", minView: "month", autoclose: 1, todayHighlight: 1 });
    }
});
