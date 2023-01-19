import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DoughnutChart() {
  const data = useQuery(QUERY_USER);
  const users = data?.users || [];

  const infographic = {
    labels: ['Uncompleted', 'Completed', 'Users'],
    datasets: [
      {
        label: 'Metrics',
        data: [19, 2, 9],
        backgroundColor: [
          'rgba(255, 99, 132 )',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const options = {};
  return (
    <div>
      <Doughnut data={infographic} options={options}></Doughnut>
    </div>
  );
}

export default DoughnutChart;
