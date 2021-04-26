var map = new ol.Map({
  target: 'mapContainer',
  view: new ol.View({
    center: [12950000, 4860000],
    zoom: 18,
    minZoom: 5,
    maxZoom: 20
  })
})

let dtLayer = new ol.layer.Tile({
  title: "底图",
  source: new ol.source.XYZ({
    url: "http://t1.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=b3bd3e87fb62be3c15e5046b5c7012f6"
  }),
});
map.addLayer(dtLayer);

var myChart = echarts.init(document.getElementById('out_circle'));
var option = {
  title: {
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  // animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      roam: true,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [1, 10],
      /* edgeLabel: {
           fontSize: 10
       },*/
      data: [{
        name: '节点1',
        x: 750,
        y: 250,
        symbolSize: 100,
        category: 0,
      }, {
        name: '节点2',
        x: 800,
        y: 200,
        category: 1,
        category: 0,
      }, {
        name: '节点3',
        x: 650,
        y: 200,
        category: 0,
      }, {
        name: '节点4',
        category: 1,
        x: 660,
        y: 160
      }, {
        name: '节点5',
        x: 700,
        y: 160,
        symbolSize: 70,
        category: 2,
      }, {
        name: '节点6',
        x: 800,
        y: 350,
        category: 2,
      }, {
        name: '节点7',
        x: 740,
        y: 320,
        category: 2,
      }, {
        name: '节点8',
        category: 1,
        x: 760,
        y: 150
      }, {
        name: '节点9',
        x: 660,
        y: 300,
        category: 2,
      }, {
        name: '节点10',
        x: 680,
        y: 350,
        category: 2,
      }, {
        name: '节点11',
        category: 1,
        x: 820,
        y: 300
      }, {
        name: '节点12',
        x: 800,
        y: 130,
        symbolSize: 100,
        category: 2,
      }],
      // links: [],
      links: [/*{
                source: '节点1',
                target: '节点2',
                symbolSize: [5, 10], // ArrowSize
                label: {
                    show: true
                },
                lineStyle: {
                    width: 1,
                    // curveness: 0.3,
                    color:'blue'
                }
            },*/{
        source: '节点1',
        target: '节点2'
      },
        {
          source: '节点1',
          target: '节点3'
        }, {
          source: '节点1',
          target: '节点4'
        }, {
          source: '节点1',
          target: '节点5'
        }, {
          source: '节点1',
          target: '节点6'
        }, {
          source: '节点1',
          target: '节点7'
        }, {
          source: '节点1',
          target: '节点8'
        }, {
          source: '节点1',
          target: '节点9'
        }, {
          source: '节点1',
          target: '节点10'
        }, {
          source: '节点1',
          target: '节点11'
        }, {
          source: '节点1',
          target: '节点12'
        },],
      lineStyle: {
        opacity: 0.6,
        width: 4,
        curveness: 0,
        color: '#0066FF'
      },
      categories: [{
        name: '一级关系',
        itemStyle: { //可配置颜色
          normal: {
            color: "#0691DC",
          }
        },

      },{
        name: '二级关系',
        itemStyle: { //可配置颜色
          normal: {
            color: "#1A4FFC",
          }
        }
      },{
        name: '三级关系',
        itemStyle: { //可配置颜色
          normal: {
            color: "#26B484",
          }
        }
      },
      ]
    },

  ]
};

myChart.setOption(option);


