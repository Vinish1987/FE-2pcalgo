// src/components/Chart.js

import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: '#000',
        textColor: '#fff',
      },
      grid: {
        vertLines: {
          color: '#444',
        },
        horzLines: {
          color: '#444',
        },
      },
      priceScale: {
        borderColor: '#cccccc',
      },
      timeScale: {
        borderColor: '#cccccc',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries();

    // Sample data - replace this with real data
    candleSeries.setData([
      { time: '2025-04-10', open: 100, high: 110, low: 90, close: 105 },
      { time: '2025-04-11', open: 105, high: 115, low: 95, close: 110 },
      // Add more data points as needed
    ]);

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;
