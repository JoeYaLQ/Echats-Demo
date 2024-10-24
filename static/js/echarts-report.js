  const { ajax } = $;

  // 柱状图---人次统计
  var personTime = echarts.init(document.getElementById('barPersonTime'));
  // 配置
  var optionPersonTime = {
      title: {
        text: '人次统计',
        subtext: '数据来自MEGE SHOW后台',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
      },
      grid: {
        top: 100,
        left: 10,
        bottom: 50,
        containLabel : true,
      },
      xAxis: {
        splitLine: { show: false },
        type: 'category',
        name: '日期',
        data: [],
      },
      yAxis: {
        name: '人次',
        type: 'value',
        axisLine: {
          show: true, // y轴显示
        },
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'inside'
          },
          data: [],
        },
      ]
  };
  // 初始化ECharts
  personTime.setOption(optionPersonTime)

  // 柱状图---人流量统计
  var humanTraffic = echarts.init(document.getElementById('barHumanTraffic'));
  var optionHumanTraffic = {
      title: {
        text: '人流量统计',
        subtext: '数据来自MEGE SHOW后台',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
      },
      grid: {
        top: 100,
        left: 10,
        bottom: 50,
        containLabel : true,
      },
      xAxis: {
        splitLine: { show: false },
        type: 'category',
        name: '日期',
        data: [],
      },
      yAxis: {
        name: '人流量',
        type: 'value',
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'inside'
          },
          data: [],
        },
      ]
  };
  humanTraffic.setOption(optionHumanTraffic)

  // 柱状图---总和统计
  var sumPerson = echarts.init(document.getElementById('barSumPerson'));
  var optionSumPerson = {
      title: {
        text: '总和统计',
        subtext: '数据来自MEGE SHOW后台',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
      },
      grid: {
        top: 100,
        left: 10,
        bottom: 50,
        containLabel : true,
      },
      xAxis: {
        splitLine: { show: false },
        type: 'category',
        name: '日期',
        data: ['人次', '人流量'],
      },
      yAxis: {
        name: '总和',
        type: 'value',
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          label: {
            show: true,
            position: 'inside'
          },
          data: [],
        },
      ]
  };
  sumPerson.setOption(optionSumPerson)

  

  // 人数 top 10 -- 横向柱状图
  var chartBarTop = echarts.init(document.getElementById('chartBarTop'));
  var optionBarPie = {
    title: {
      text: '人数 TOP 10',
      subtext: '数据来自MEGE SHOW后台',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    grid: {
      top: 100,
      left: 10,
      bottom: 50,
      containLabel : true,
    },
    xAxis: {
      name: '人数',
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: true,
      },
      splitLine: {
        show: true
      }
    },
    yAxis: {
      name: '国家',
      data: [
        'Australia UA',
        'China UA', 
        'Japan UA',
        'Korea UA',
        'Singapore UA',
        'UK UA',
        'USA UA',
        'Taiwan UA',
        'Vietnam UA',
        'Australia UA',
      ],
      type: 'category',
    },
    series: [
      {
        name: 'sum',
        type: 'bar',
        data: [
          134141,
          19325,
          23438,
          31000,
          553282,
          519191,
          121594,
          630230,
          681807,
          743233,
        ],
        // markPoint: {
        //   data: [
        //     { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
        //     { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
        //   ]
        // },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        },
        label: {
          position: 'inside',
          show: true
        },
      }
    ]
  };
  chartBarTop.setOption(optionBarPie)

  
  // 人数 top 10 -- 扇形图 
  var domCircle = document.getElementById('chartPieTop');
  var chartPieTop = echarts.init(domCircle, null, {
    renderer: 'canvas',
    useDirtyRect: false,
  });
  optionPieTop = {
    title: {
      left: 'center',
      text: '人数 TOP 10',
      subtext: '数据来自MEGE SHOW后台',
      textStyle: {
        fontSize: 30,
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.seriesName + 
        '<br/>' + params.name +
        ' : ' + params.value +
        ' ('+ params.percent+ '%)';
      }
    },
    series: [
      {
        selectedMode: 'single',
        name: 'Country',
        type: 'pie', 
        radius: '60%',
        data: [
          { 
            value: 1048,
            name: 'Australia UA',
            selected: true 
          },
          { 
            value: 735,
            name: 'China UA', 
          },
          { 
            value: 580,
            name: 'Japan UA' 
          },
          { 
            value: 484,
            name: 'Korea UA' 
          },
          { 
            value: 300,
            name: 'Singapore UA' 
          }, 
          { 
            value: 200,
            name: 'Taiwan UA' 
          },
          { 
            value: 150,
            name: 'UK UA' 
          },
          { 
            value: 100,
            name: 'USA UA' 
          },
          { 
            value: 50,
            name: 'Vietnam UA' 
          },
          { 
            value: 450,
            name: 'Others',
            itemStyle: { 
              color: '#189fe8',
            }
          },
        ],
        emphasis: {
          disabled: false,
          itemStyle: {
            shadowBlur: 100,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {
          length: 30,
          length2: 60,
          maxSurfaceAngle: 80,
        },
        label: {
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          bleedMargin: 2,
          minMargin: 3,
          borderWidth: 1,
          borderRadius: 4,
          padding: [5,5],
          fontSize: 16,
          formatter: '{name|{a}}{abg|}\n{hr|}\n{b|{b}} : {c} {per|{d}%}',
          rich: {
            name: {
              fontSize: 18,
              lineHeight: 22,
              color: '#999',
              align: 'center',
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          },
        },
      }
    ]
  };
  chartPieTop.setOption(optionPieTop)

  // 人次统计数据
  function getPersonTime(value) {
    let xData = [];
    let newData = [];
    personTime.showLoading(); // 显示加载动画
    $('#personTime').prop('disabled', true);;
    // 异步请求
    // ajax({
    //   url: '/getPersonTime',
    //   type: 'get',
    //   data: { value: value },
    //   success: function (res) {
    //     xData = res.xData;
    //     newData = res.newData;
    //     personTime.setOption({ 
    //       xAxis: { data: xData },
    //       series: [{ data: newData }] 
    //     });
    //     $('#personTime').prop('disabled', false);
    //     personTime.hideLoading();
    //   },
    //   error: function () {
    //     console.log('error');
    //     $('#personTime').prop('disabled', false);
    //     personTime.hideLoading();
    //   }
    // })
    // 模拟接口（直接删除）
    if (value == '1') {
      setTimeout(() => {
        xData = ['20', '21', '22', '23'];
        newData = [1025, 2000, 3600, 1500];
        personTime.setOption({ 
          xAxis: { data: xData },
          series: [{ data: newData }] 
        });
        $('#personTime').prop('disabled', false);
        personTime.hideLoading();
      }, 1000);
    } else {
      setTimeout(() => {
        xData = ['27', '28', '29', '30'];
        newData = [1023, 2400, 6300, 2100];
        personTime.setOption({ 
          xAxis: { data: xData },
          series: [{ data: newData }] 
        });
        $('#personTime').prop('disabled', false);
        personTime.hideLoading();
      }, 1000);
    }
  }
  // 人流量统计数据
  function getHumanTraffic(value) {
    let xData = [];
    let newData = [];
    humanTraffic.showLoading(); // 显示加载动画
    $('#humanTraffic').prop('disabled', true);;
    // 模拟接口（直接删除）
    if (value == '1') {
      setTimeout(() => {
        xData = ['20', '21', '22', '23'];
        newData = [3225, 7000, 9800, 1500];
        humanTraffic.setOption({ 
          xAxis: { data: xData },
          series: [{ data: newData }] 
        });
        $('#humanTraffic').prop('disabled', false);
        humanTraffic.hideLoading();
      }, 1000);
    } else {
      setTimeout(() => {
        xData = ['27', '28', '29', '30'];
        newData = [6456, 9800, 9456, 2100];
        humanTraffic.setOption({ 
          xAxis: { data: xData },
          series: [{ data: newData }] 
        });
        $('#humanTraffic').prop('disabled', false);
        humanTraffic.hideLoading();
      }, 1000);
    }
  }
  // 总和-(人次--人流量)统计数据
  function getSumPerson(value) {
    let newData = [];
    sumPerson.showLoading(); // 显示加载动画
    $('#sumPerson').prop('disabled', true);;
    // 模拟接口（直接删除）
    if (value == '1') {
      setTimeout(() => {
        newData = [13225, 71000];
        sumPerson.setOption({ 
          series: [{ data: newData }] 
        });
        $('#sumPerson').prop('disabled', false);
        sumPerson.hideLoading();
      }, 1000);
    } else if(value == '2'){
      setTimeout(() => {
        newData = [62456, 19800];
        sumPerson.setOption({ 
          series: [{ data: newData }] 
        });
        $('#sumPerson').prop('disabled', false);
        sumPerson.hideLoading();
      }, 1000);
    } else {
      setTimeout(() => {
        newData = [13256, 21100];
        sumPerson.setOption({ 
          series: [{ data: newData }] 
        });
        $('#sumPerson').prop('disabled', false);
        sumPerson.hideLoading();
      }, 1000);
    }
  }
  // 获取 Top 10 统计数据
  function getBarTop(value) {
    let yData = [
      'Australia UA',
        'China UA', 
        'Japan UA',
        'Korea UA',
        'Singapore UA',
        'UK UA',
        'USA UA',
        'Taiwan UA',
        'Vietnam UA',
        'Australia UA',
      ];
    let newData = [];
    chartBarTop.showLoading(); // 显示加载动画
    $('#barTop').prop('disabled', true);;
    // 模拟接口（直接删除）
    if (value == '1') {
      setTimeout(() => {
        newData = [13225, 71000, 62456, 19800, 13256, 21100, 13256, 21100, 13256, 21100];
        chartBarTop.setOption({ 
          yAxis: { data: yData },
          series: [{ data: newData }] 
        });
        $('#barTop').prop('disabled', false);
        chartBarTop.hideLoading();
      }, 1000);
    } else if(value == '2'){
      setTimeout(() => {
        newData = [62456, 19800, 13256, 21100, 13256, 21100, 13256, 21100, 13256, 21100];
        chartBarTop.setOption({ 
          yAxis: { data: yData },
          series: [{ data: newData }] 
        });
        $('#barTop').prop('disabled', false);
        chartBarTop.hideLoading();
      }, 1000);
    } else {
      setTimeout(() => {
        newData = [13256, 21100, 14556, 21200, 54336, 87610, 34556, 61100, 13256, 21110];
        chartBarTop.setOption({ 
          yAxis: { data: yData },
          series: [{ data: newData }] 
        });
        $('#barTop').prop('disabled', false);
        chartBarTop.hideLoading();
      }, 1000);
    }
  }  
  
  // 获取 Top 10 统计数据
  function getPieData(value) {
    // 模拟测试数据
    let newData = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video1 Ads' },
      { value: 300, name: 'Video2 Ads' },
      { value: 300, name: 'Video3 Ads' },
      { value: 300, name: 'Video4 Ads' },
      { value: 300, name: 'Video5 Ads' },
      { value: 300, name: 'Video6 Ads' },
    ];
    chartPieTop.showLoading(); // 显示加载动画
    $('#pieTop').prop('disabled', true);
    // 模拟接口（直接删除）
    setTimeout(() => {
      chartPieTop.setOption({ 
        series: [{ data: newData }] 
      });
      $('#pieTop').prop('disabled', false);
      chartPieTop.hideLoading();
    }, 1000);
    
  }

  function init() {
    // 动态调整窗口大小
    window.addEventListener('resize', personTime.resize);
    window.addEventListener('resize', humanTraffic.resize);
    window.addEventListener('resize', sumPerson.resize);
    window.addEventListener('resize', chartBarTop.resize);
    window.addEventListener('resize', chartPieTop.resize);
    // 初始化配置
    getPersonTime('1');
    getHumanTraffic('1');
    getSumPerson('1');
    getBarTop('1');
    // getPieData('1');
  }

  init();
