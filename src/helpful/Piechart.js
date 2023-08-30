import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const originalLabels=[
        'Polcadot',
        'Thorchain', 
        'Cosmos',
        'Chainlink',
        'Quant',
        'Bitcoin',
        'Ethereum',
        'BNB',
        'Cardano'
        , 'Solana',
        'Bitcoin-Bash',
        'Avalance',
        'Hedera',
        'NEAR',
        'INJECTIVE',
        'FANTOM',
        'SUI',
        'APTOS',
        'AZERO',
        'XRP',
        'STELLAR',
        'KASPA',
        'ALGORAND',
        'POLYGON',
        'ARBITRUM',
        'OPTIMISM',
        'METIS',
        'STACKS',
        'LOOPRING',
        'ILLUVIUM',
        'GALA',
        'APECOIN',
        'MAGIC',
        'DOGECOIN',
        'PEPE',
        'SHIBA-INU',
        'FLOKI',
        'INJECTIVE',
        'CURVE-DAO',
        'AAVE',
        'TERRA-LUNA',
        'SYNTHETIC'
      ];
  const  originalData= [6, 6, 1,8,1,1,8,1,1,1,1,13,1,1,1,1,1,17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // Replace with your data values
  const updatedData = originalData.map(value => (value < 5 ? 0 : value));
  const filteredLabels = originalLabels.filter((label, index) => updatedData[index] > 0);
  const data = {
    labels: filteredLabels,
    datasets: [
      {
        data: updatedData, // Replace with your data values
        backgroundColor:[
            'red',
            'blue',
            'green',
            'orange',
            'yellow',
            'pink',
            'purple',
            'violet',
            'turquoise',
            'gold',
            'lime',
            'aqua',
            'navy',
            'coral',
            'teal',
            'brown',
            'white',
            'black',
            'beige',
            'rust',
            
          ],// Colors for each segment
      },
    ],
  };

  const options = {
    maintainAspectRatio: true, // Allow the pie chart to be resized
    responsive: true, // Make the chart responsive
    width: 400, // Adjust the width of the chart (in pixels)
    height: 400, // Adjust the height of the chart (in pixels)
    // You can add options here to customize the appearance of the pie chart
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
