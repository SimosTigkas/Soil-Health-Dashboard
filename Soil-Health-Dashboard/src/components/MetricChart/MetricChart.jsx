import React from "react";
import styles from "./MetricChart.module.css";
import { Line } from "react-chartjs-2";
import "../../lib/chartConfig";
import {METRICS} from "../../config/metricConfig";

export const MetricChart = ({ labels, data, metricKey}) => {
    const metric = METRICS[metricKey];
    const rootStyles = getComputedStyle(document.documentElement);
    const borderColor = rootStyles.getPropertyValue('--color-primary').trim();
    const backgroundColor = rootStyles.getPropertyValue('--color-secondary').trim();
    const pointColor = rootStyles.getPropertyValue('--color-secondary').trim();
    const textColor = rootStyles.getPropertyValue('--color-text').trim(); 
    
    const { high, low } = metric.threshold;
    const dataObject = {
    labels: labels,
    datasets: [
        {
        label: metric.label,
        data: data,
        tension: 0.4,
        fill: true,
        borderColor:borderColor,
        backgroundColor: backgroundColor,
        segment: {
            borderColor: ctx => {
                const y0 = ctx.p0.parsed.y;
                const y1 = ctx.p1.parsed.y;
                if (y0 >= high || y1 >= high) return "rgb(220, 38, 38)";
                if (y0 <= low || y1 <= low) return "rgb(234, 179, 8)";
                return borderColor;
            },
            backgroundColor: ctx => {
                const y0 = ctx.p0.parsed.y;
                const y1 = ctx.p1.parsed.y;
                if (y0 >= high || y1 >= high) return "rgba(220, 38, 38, 0.5)";
                if (y0 <= low || y1 <= low) return "rgba(234, 179, 8, 0.5)";
                return backgroundColor;
            }
        },
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: ctx => {
            const y = ctx.parsed.y;
            if (y >= high) return "rgb(220, 38, 38)";
            if (y <= low) return "rgb(234, 179, 8)";
            return pointColor;
        },
        pointBorderColor: borderColor,
        hitRadius: 10,
        }
    ]
    }
    const optionsObject = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top", labels: { color: textColor } },
            tooltip: { mode: "index" , backgroundColor: "hsl(123, 38%, 71%)",  titleColor: textColor, bodyColor: textColor}
        },
        scales: {
            y: { beginAtZero: true, ticks: { color: textColor } },
            x: { display: true, ticks: { color: textColor } }
        }
    };
    return (
        <div className={styles.chartContainer} role="img" aria-label={`Line chart showing ${metric.label} values over time`} id="metric-chart" data-testid="metric-chart">
            <Line data={dataObject} options={optionsObject} />
        </div>
    );
};