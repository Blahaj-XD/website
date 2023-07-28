'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function Page() {

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        data: [
          { value: 820, name: 'Monday' },
          { value: 932, name: 'Tuesday' },
          { value: 901, name: 'Wednesday' },
          { value: 934, name: 'Thursday' },
          { value: 1290, name: 'Friday' },
          { value: 1330, name: 'Saturday' },
          { value: 1320, name: 'Sunday' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        selectedOffset: 5, // Adds a small offset to emphasized items
        selected: 0,
        color: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
      },
    ],
  };


  return (<>
      <ReactECharts option={options}/>
  </>);
}


