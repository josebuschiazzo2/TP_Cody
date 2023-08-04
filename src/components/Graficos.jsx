import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Footer from './Footer';
import Navbar from './Navbar';
import Papa from 'papaparse';
import '../styles/graficos.css';

function Graficos() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/codybdtemp.csv'); // Ruta relativa desde el directorio del proyecto
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData, { header: true });

        // Procesar los datos para usarlos en el gráfico
        const labels = parsedData.data.map((item) => item.Fecha);
        const datasets = [
          {
            label: 'Carlini',
            data: parsedData.data.map((item) => parseFloat(item.Temperatura)),
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
          },
          // Agregar más datasets para otras estaciones
        ];

        const data = { labels, datasets };
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div id="Graficos">
      <Navbar />
      <div className="container">
        <h1 className="p-5 m-5">Graficos</h1>
        {chartData && (
          <div className="chart-container">
            <Line data={chartData} options={options} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Graficos;
