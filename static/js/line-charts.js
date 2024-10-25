let chartsLine = echarts.init(document.getElementById('chartsLine'));
let optionLine = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
chartsLine.setOption(optionLine);

var option;  
    
// 示例数据  
var categories = ['27', '28', '29', '30',];  
var values = [110, 120, 132, 101, 134];  
var sum = values.reduce((a, b) => a + b, 0);  // 计算总和  
var barHuman = echarts.init(document.getElementById('barHumanTraffic'));
  var i = 0;
option = {  
    // tooltip: {},  // 默认配置，无需修改
    tooltip: {
      trigger: 'axis',
      formatter: (params) =>{
        // let result = params[0].name + '<br/>'; // 添加名称（日期）
        // params.forEach((param, index) => {
        //   // 为每个系列添加值
        //   result += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${index % 2 ? '#c23531' : '#2F4554'}"></span>`;
        //   result += `${param.seriesName}: ${param.value}<br/>`;
        // });
        // return result;
        // console.log(`output->params`,params)
        return  params[0].name +'日<br/>' +
        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#c23531"></span>'+
        params[0].seriesName+': '+params[0].value+'<br/>' + 
        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#2F4554"></span>百分比: '+
        (params[0].value/sum* 100).toFixed(2) + ' %'+'<br/>' 
      },
      // formatter: '{b0}日<br/>' +
      //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#c23531"></span>{a0}:{c0}<br/>' + 
      //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#2F4554"></span>百分比:'+ (c0/sum* 100).toFixed(2) + '%'+'<br/>' 
      //   // +'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#2F4554"></span>{a1}:{c1}%<br/>' +
      //   // '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#61A0A8"></span>{a2}:{c2}%<br/>' +
      //   // '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#D48265"></span>{a3}:{c3}%<br/>' +
      //   // '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#91C7AE"></span>{a4}:{c4}%<br/>'
      //   , // 显示百分比
      padding:5, // 内边距
      axisPointer:{
        type:'cross',
        lineStyle:{
          type:'dashed'
        }
      }
    },
    xAxis: {  
      type: 'category',  
      data: categories  
    },  
    yAxis: {  
      type: 'value'  
    },
    legend: {  
      data: ['pre'],  
    },
    series: [
      {  
      type: 'bar',
      name: '人数',
      data: values,
      label: {  
        show: false,  
        position: 'insideTop',
        formatter: function (params) {  
          // console.log(params)
            var percent = (params.value / sum * 100).toFixed(2) + '%';  
            var labelValue = '';
            labelValue += 
              '\n' +
              '人数: ' + params.value + '\n' +
              '\n' +
              '百分比: ' + percent + '\n';
            return labelValue;  
        },
      },
      markPoint:{
        position: 'right',
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label:{

          backgroundColor: 'rgb(242,242,242)',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          padding: [4, 10],
          lineHeight: 26,
          show: true,

          distance: 20,
          // formatter: '{c}',
          formatter:function(params){
            console.log(`output->`,params.value)
            return params.value ;
          }
        }
      },
    },
    {  
      type: 'bar',
      name: '人次',
      data: values,
      label: {  
        show: true,  
        // position: 'insideTop',
        formatter: function (params) {  
          // console.log(params)
            var percent = (params.value / sum * 100).toFixed(2) + '%';  
            var labelValue = '';
            labelValue += 
              '\n' +
              '人数: ' + params.value + '\n' +
              '\n' +
              '百分比: ' + percent + '\n';
            return labelValue;  
        },
      }
    }
  ]  
};  
option && barHuman.setOption(option);
  
function getBar(value) {
  
  if(value == '1') {
    values = [120, 200, 150, 80, 70];  
  } else if(value == '2'){
    values = [10, 30, 25, 40, 60];
  } else {
    values = [10, 20, 15, 30, 40];
  }
  barHuman.setOption({ 
    series: [{ data: values }] 
  });

}

function init() {
  window.addEventListener('resize', barHuman.resize);
  getBar('1');
}
init();