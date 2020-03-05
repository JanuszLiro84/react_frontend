import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Stage values',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
};

const chart = (props) => {
  const deals=props.deals;

  data['labels']=Object.keys(deals);
  data['datasets'][0]['data']=Object.values(deals);

    return (
      <div>
        <h2>Deals groupped by Stages (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
};

export default chart;

