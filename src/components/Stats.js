import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import Navigation from '../helpful/navigation';
import './Stats.css';
import PieChart from '../helpful/Piechart';
const Stats = () => {
    
  // Sample data - Replace this with data from your database
  const columnData = [
    'Polcadot', 'Polcadot', 'Polcadot', 'Polcadot', 'Polcadot', 'Polcadot',
    'Thorchain', 'Thorchain', 'Thorchain', 'Thorchain', 'Thorchain', 'Thorchain',
    'Cosmos',
    'Chainlink', 'Chainlink', 'Chainlink', 'Chainlink', 'Chainlink', 'Chainlink', 'Chainlink', 'Chainlink',
    'Quant',
    'Bitcoin',
    'Ethereum', 'Ethereum', 'Ethereum', 'Ethereum', 'Ethereum', 'Ethereum', 'Ethereum', 'Ethereum'
    , 'BNB',
    'Cardano'
    , 'Solana',
    'Bitcoin-Bash',
    'Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance','Avalance',
    'Hedera',
    'NEAR',
    'INJECTIVE',
    'FANTOM',
    'SUI',
    'APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS','APTOS',
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

  
  useEffect(() => {
    const valueCounts = {};
    columnData.forEach(value => {
      if (valueCounts[value]) {
        valueCounts[value]++;
      } else {
        valueCounts[value] = 1;
      }
    });

    // Filter values that occur less than 5 times
    const filteredValueCounts = {};
    for (const value in valueCounts) {
      if (valueCounts[value] >= 5) {
        filteredValueCounts[value] = valueCounts[value];
      }
    }

    // Extract labels and data for the bar chart from the filtered values
    const barLabels = Object.keys(filteredValueCounts);
    const barData = Object.values(filteredValueCounts);

    // Create a bar chart
   const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: barLabels,
    datasets: [
      {
        label: 'Portofolio Frequency',
        data: barData,
        backgroundColor: 'rgba(75, 192, 192, 0.8)' // Bar color
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1, // Adjust as needed
        grid: {
          display: true, // Show Y-axis gridlines
          color: 'rgba(255, 255, 255, 0.2)', // Color of gridlines
        },
        ticks: {
          color: 'white', // Change the color of Y-axis labels to white
          fontSize: 14 // Set the font size for Y-axis labels (adjust as needed)
        }
      },
      x: {
        grid: {
          display: true, // Show X-axis gridlines
          color: 'rgba(255, 255, 255, 0.2)', // Color of gridlines
        },
        ticks: {
          color: 'white', // Change the color of X-axis labels to white
          fontSize: 14 // Set the font size for X-axis labels (adjust as needed)
        }
      }
    },
    legend: {
      display: false // Hide legend for the bar chart
    }
  }
});



    
  }, [columnData]);

  return (
    <div>
      <Navigation />
      <div>
        {/* Create a canvas for the bar chart */}
        <canvas id="barChart" width="300" height="50" className='diagram'></canvas>

      </div>
    <p className='info-text-stats'>The coins that arent displayed on the screen is because of low appearence in Portofolios (less than 5)</p>
    <div className='pie-frame'><PieChart /></div>
     
    </div>
  );
};

export default Stats;



