(function(){
  var chartDom = document.getElementById('app');
  var myChart = echarts.init(chartDom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
var option;

option = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: "May's demo",
          fontSize: 50,
          fontWeight: 800,
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: 'white',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.4,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 0.6,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 0.8,
              style: {
                fill: 'white'
              }
            },
            {
              percent: 1,
              style: {
                fill: 'white'
              }
            }
          ]
        }
      }
    ]
  }
  
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

})();

// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "1%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [281.06, 274.41, 254.16, 246.22, 228.2, 210.25, 210.77],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  
})();

// 折线图定制
(function() {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option;
    
    const dataBJ = [
      [1, 55, 9, 56, 0.46, 18, 6, '良'],
      [2, 25, 11, 21, 0.65, 34, 9, '优'],
      [3, 56, 7, 63, 0.3, 14, 5, '良'],
      [4, 33, 7, 29, 0.33, 16, 6, '优'],
      [5, 42, 24, 44, 0.76, 40, 16, '优'],
      [6, 82, 58, 90, 1.77, 68, 33, '良'],
      [7, 74, 49, 77, 1.46, 48, 27, '良'],
      [8, 78, 55, 80, 1.29, 59, 29, '良'],
      [9, 267, 216, 280, 4.8, 108, 64, '差'],
      [10, 185, 127, 216, 2.52, 61, 27, '中'],
      [11, 39, 19, 38, 0.57, 31, 15, '优'],
      [12, 41, 11, 40, 0.43, 21, 7, '优'],
      [13, 64, 38, 74, 1.04, 46, 22, '良'],
      [14, 108, 79, 120, 1.7, 75, 41, '中'],
      [15, 108, 63, 116, 1.48, 44, 26, '中'],
      [16, 33, 6, 29, 0.34, 13, 5, '优'],
      [17, 94, 66, 110, 1.54, 62, 31, '良'],
      [18, 186, 142, 192, 3.88, 93, 79, '差'],
      [19, 57, 31, 54, 0.96, 32, 14, '良'],
      [20, 22, 8, 17, 0.48, 23, 10, '优'],
      [21, 39, 15, 36, 0.61, 29, 13, '优'],
      [22, 94, 69, 114, 2.08, 73, 39, '良'],
      [23, 99, 73, 110, 2.43, 76, 48, '良'],
      [24, 31, 12, 30, 0.5, 32, 16, '优'],
      [25, 42, 27, 43, 1, 53, 22, '优'],
      [26, 154, 117, 157, 3.05, 92, 58, '中'],
      [27, 234, 185, 230, 4.09, 123, 69, '差'],
      [28, 160, 120, 186, 2.77, 91, 50, '差'],
      [29, 134, 96, 165, 2.76, 83, 41, '中'],
      [30, 52, 24, 60, 1.03, 50, 21, '良'],
      [31, 46, 5, 49, 0.28, 10, 6, '优']
    ];
    const dataGZ = [
      [1, 26, 37, 27, 1.163, 27, 13, '优'],
      [2, 85, 62, 71, 1.195, 60, 8, '良'],
      [3, 78, 38, 74, 1.363, 37, 7, '良'],
      [4, 21, 21, 36, 0.634, 40, 9, '优'],
      [5, 41, 42, 46, 0.915, 81, 13, '优'],
      [6, 56, 52, 69, 1.067, 92, 16, '良'],
      [7, 64, 30, 28, 0.924, 51, 2, '良'],
      [8, 55, 48, 74, 1.236, 75, 26, '良'],
      [9, 76, 85, 113, 1.237, 114, 27, '良'],
      [10, 91, 81, 104, 1.041, 56, 40, '良'],
      [11, 84, 39, 60, 0.964, 25, 11, '良'],
      [12, 64, 51, 101, 0.862, 58, 23, '良'],
      [13, 70, 69, 120, 1.198, 65, 36, '良'],
      [14, 77, 105, 178, 2.549, 64, 16, '良'],
      [15, 109, 68, 87, 0.996, 74, 29, '中'],
      [16, 73, 68, 97, 0.905, 51, 34, '良'],
      [17, 54, 27, 47, 0.592, 53, 12, '良'],
      [18, 51, 61, 97, 0.811, 65, 19, '良'],
      [19, 91, 71, 121, 1.374, 43, 18, '良'],
      [20, 73, 102, 182, 2.787, 44, 19, '良'],
      [21, 73, 50, 76, 0.717, 31, 20, '良'],
      [22, 84, 94, 140, 2.238, 68, 18, '良'],
      [23, 93, 77, 104, 1.165, 53, 7, '良'],
      [24, 99, 130, 227, 3.97, 55, 15, '良'],
      [25, 146, 84, 139, 1.094, 40, 17, '中'],
      [26, 113, 108, 137, 1.481, 48, 15, '中'],
      [27, 81, 48, 62, 1.619, 26, 3, '良'],
      [28, 56, 48, 68, 1.336, 37, 9, '良'],
      [29, 82, 92, 174, 3.29, 0, 13, '良'],
      [30, 106, 116, 188, 3.628, 101, 16, '中'],
      [31, 118, 50, 0, 1.383, 76, 11, '中']
    ];
    const dataSH = [
      [1, 91, 45, 125, 0.82, 34, 23, '良'],
      [2, 65, 27, 78, 0.86, 45, 29, '良'],
      [3, 83, 60, 84, 1.09, 73, 27, '良'],
      [4, 109, 81, 121, 1.28, 68, 51, '中'],
      [5, 106, 77, 114, 1.07, 55, 51, '中'],
      [6, 109, 81, 121, 1.28, 68, 51, '中'],
      [7, 106, 77, 114, 1.07, 55, 51, '中'],
      [8, 89, 65, 78, 0.86, 51, 26, '良'],
      [9, 53, 33, 47, 0.64, 50, 17, '良'],
      [10, 80, 55, 80, 1.01, 75, 24, '良'],
      [11, 117, 81, 124, 1.03, 45, 24, '中'],
      [12, 99, 71, 142, 1.1, 62, 42, '良'],
      [13, 95, 69, 130, 1.28, 74, 50, '良'],
      [14, 116, 87, 131, 1.47, 84, 40, '中'],
      [15, 108, 80, 121, 1.3, 85, 37, '中'],
      [16, 134, 83, 167, 1.16, 57, 43, '中'],
      [17, 79, 43, 107, 1.05, 59, 37, '良'],
      [18, 71, 46, 89, 0.86, 64, 25, '良'],
      [19, 97, 71, 113, 1.17, 88, 31, '良'],
      [20, 84, 57, 91, 0.85, 55, 31, '良'],
      [21, 87, 63, 101, 0.9, 56, 41, '良'],
      [22, 104, 77, 119, 1.09, 73, 48, '中'],
      [23, 87, 62, 100, 1, 72, 28, '良'],
      [24, 168, 128, 172, 1.49, 97, 56, '差'],
      [25, 65, 45, 51, 0.74, 39, 17, '良'],
      [26, 39, 24, 38, 0.61, 47, 17, '优'],
      [27, 39, 24, 39, 0.59, 50, 19, '优'],
      [28, 93, 68, 96, 1.05, 79, 29, '良'],
      [29, 188, 143, 197, 1.66, 99, 51, '差'],
      [30, 174, 131, 174, 1.55, 108, 50, '差'],
      [31, 187, 143, 201, 1.39, 89, 53, '差']
    ];
    const schema = [
      { name: 'date', index: 0, text: '日' },
      { name: 'AQIindex', index: 1, text: '评价指数' },
      { name: 'PM25', index: 2, text: '风味' },
      { name: 'PM10', index: 3, text: '新鲜' },
      { name: 'CO', index: 4, text: '可乐' },
      { name: 'NO2', index: 5, text: '汉堡' },
      { name: 'SO2', index: 6, text: '薯条' }
    ];
    const itemStyle = {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0,0,0,0.3)'
    };
    option = {
      color: ['#dd4444', '#fec42c', '#80F1BE'],
      legend: {
        top: 10,
        data: ['北京', '上海', '广州'],
        textStyle: {
          fontSize: 16,
          color:"white"
        }
      },
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        formatter: function (param) {
          var value = param.value;
          // prettier-ignore
          return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + param.seriesName + ' ' + value[0] + '日：'
                    + value[7]
                    + '</div>'
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>'
                    + schema[3].text + '：' + value[3] + '<br>'
                    + schema[4].text + '：' + value[4] + '<br>'
                    + schema[5].text + '：' + value[5] + '<br>'
                    + schema[6].text + '：' + value[6] + '<br>';
        }
      },
      xAxis: {
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
          fontSize: 16
        },
        max: 31,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          fontSize: 16
        },
        splitLine: {
          show: false
        }
      },
      // visualMap: [
      //   {
      //     left: 'right',
      //     top: '10%',
      //     dimension: 2,
      //     min: 0,
      //     max: 250,
      //     itemWidth: 30,
      //     itemHeight: 120,
      //     calculable: true,
      //     precision: 0.1,
      //     text: ['圆形大小：PM2.5'],
      //     textGap: 30,
      //     inRange: {
      //       symbolSize: [10, 70]
      //     },
      //     outOfRange: {
      //       symbolSize: [10, 70],
      //       color: ['rgba(255,255,255,0.4)']
      //     },
      //     controller: {
      //       inRange: {
      //         color: ['#c23531']
      //       },
      //       outOfRange: {
      //         color: ['#999']
      //       }
      //     }
      //   },
      //   {
      //     left: 'right',
      //     bottom: '5%',
      //     dimension: 6,
      //     min: 0,
      //     max: 50,
      //     itemHeight: 120,
      //     text: ['明暗：二氧化硫'],
      //     textGap: 30,
      //     inRange: {
      //       colorLightness: [0.9, 0.5]
      //     },
      //     outOfRange: {
      //       color: ['rgba(255,255,255,0.4)']
      //     },
      //     controller: {
      //       inRange: {
      //         color: ['#c23531']
      //       },
      //       outOfRange: {
      //         color: ['#999']
      //       }
      //     }
      //    }
      // ],
      series: [
        {
          name: '北京',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataBJ
        },
        {
          name: '上海',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataSH
        },
        {
          name: '广州',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataGZ
        }
      ]
    };
  
  option && myChart.setOption(option);

  window.addEventListener('resize', myChart.resize);
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  option = {
    title: [
      {
        text: '',
        borderColor: '#999',
        borderWidth: 1,
        textStyle: {
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 20
        },
        left: '10%',
        top: '90%'
      }
    ],
    dataset: [
      {
        // prettier-ignore
        source: [
                  [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                  [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                  [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                  [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                  [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
              ]
      },
      {
        transform: {
          type: 'boxplot',
          config: { itemNameFormatter: '岗位 {value}' }
        }
      },
      {
        fromDatasetIndex: 1,
        fromTransformResult: 1
      }
    ],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top:"5%",
      left: '15%',
      right: '0%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitArea: {
        show: true
      }
    },
    series: [
      {
        name: 'boxplot',
        type: 'boxplot',
        datasetIndex: 1
      },
      {
        name: 'outlier',
        type: 'scatter',
        datasetIndex: 2
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "外卖量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          60,
          20,
          40,
          20,
          40
        ]
      },
      {
        name: "到店量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          50,
          30,
          50,
          60,
          10,
          50,
          30,
          50,
          60,
          40,
          60,
          40,
          80,
          30,
          50,
          60,
          10,
          50,
          30,
          70,
          20,
          50,
          10,
          40,
          50,
          30,
          70,
          20,
          50,
          10,
          40
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart") ,null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var data = [
    {
      name: '华北',
      children: [
        {
          name: '北京',
          value: 15,
          children: [
            {
              name: '西城',
              value: 2
            },
            {
              name: '海淀',
              value: 5,
              children: [
                {
                  name: '学院路',
                  value: 2
                }
              ]
            },
            {
              name: '朝阳',
              value: 4
            }
          ]
        },
        {
          name: '天津',
          value: 10,
          children: [
            {
              name: '滨海',
              value: 5
            },
            {
              name: '南开',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: '华东',
      children: [
        {
          name: '上海',
          children: [
            {
              name: '浦东',
              value: 1
            },
            {
              name: '静安',
              value: 2
            }
          ]
        }
      ]
    }
  ];
  option = {
    series: {
      type: 'sunburst',
      data: data,
      radius: ['20%', '90%'],
      itemStyle: {
        borderRadius: 4,
        borderWidth: 2
      },
      label: {
        formatter: function(params) {
          if (params.value < 0.3) {
            return ' '
          } else {
            return params.name.slice(0, 3) + '...'
          }
        }
      },
      emphasis: {
        label: {
          show: true,
          formatter: function(params) {
            console.log(params)
            return params.name
          }
        },
        focus: 'none'
      }
    }
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
})();
