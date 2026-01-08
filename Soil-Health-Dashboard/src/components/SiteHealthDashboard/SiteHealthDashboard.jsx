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
        <div className={styles.dashboardContainer} id="site-health-dashboard">
            <h2>Health Dashboard</h2>
            < MetricChart labels={labels} data={metricValues} datasetLabel={selectedMetric} />
            < MetricCard  currentValue={currentValue} min={minValue} max={maxValue}/>
            <div className={styles.toggleContainer}>
                <button className={selectedMetric === "Soil Moisture" ? styles.active : ""} onClick={() => setSelectedMetric("Soil Moisture")}>
                    Soil Moisture
                </button>
                <button className={selectedMetric === "Temperature" ? styles.active : ""} onClick={() => setSelectedMetric("Temperature")}>
                    Temperature
                </button>
            </div>
        </div>
    );
};
