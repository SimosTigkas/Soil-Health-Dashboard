import React from "react";
import styles from "./SiteHealthDashboard.module.css";
import mockData from "../../data/data.json";
import { MetricChart } from "../MetricChart/MetricChart";
import { MetricCard } from "../MetricCard/MetricCard";

export const SiteHealthDashboard = () => {
    let [selectedMetric, setSelectedMetric] = React.useState("Soil Moisture");
    const labels = mockData.map(entry => entry.day);
    const metricValues = mockData.map(entry => Number(entry[selectedMetric]));
    const currentValue = metricValues[metricValues.length - 1];
    const minValue = Math.min(...metricValues);
    const maxValue = Math.max(...metricValues);

    return (
        <section className={styles.dashboardContainer} id="site-health-dashboard" aria-labelledby="dashboard-title">
            <h2 id="dashboard-title">Soil Health Dashboard</h2>
            < MetricChart labels={labels} data={metricValues} datasetLabel={selectedMetric} />
            < MetricCard  currentValue={currentValue} min={minValue} max={maxValue}/>
            <div className={styles.toggleContainer} role="group" aria-label="Metric toggle">
                <button className={selectedMetric === "Soil Moisture" ? styles.active : ""} aria-pressed={selectedMetric === "Soil Moisture"} aria-label="Show Soil Moisture chart" onClick={() => setSelectedMetric("Soil Moisture")}>
                    Soil Moisture
                </button>
                <button className={selectedMetric === "Temperature" ? styles.active : ""} aria-pressed={selectedMetric === "Temperature"} aria-label="Show Temperature chart" onClick={() => setSelectedMetric("Temperature")}>
                    Temperature
                </button>
            </div>
        </section>
    );
};
