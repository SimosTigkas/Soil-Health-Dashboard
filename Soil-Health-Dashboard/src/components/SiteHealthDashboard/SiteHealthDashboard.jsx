import React, { useEffect, useState} from "react";
import styles from "./SiteHealthDashboard.module.css";
import mockData from "../../data/data.json";
import { MetricChart } from "../MetricChart/MetricChart";
import { MetricCard } from "../MetricCard/MetricCard";

export const SiteHealthDashboard = () => {
    const [selectedMetric, setSelectedMetric] = React.useState("soilMoisture");
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);
    
    const labels = mockData.map(entry => entry.day);
    const metricValues = mockData.map(entry => entry.metrics[selectedMetric]);
    const currentValue = metricValues[metricValues.length - 1];
    const minValue = Math.min(...metricValues);
    const maxValue = Math.max(...metricValues);


    return (
        <section className={styles.dashboardContainer} id="site-health-dashboard" aria-labelledby="dashboard-title">
            <h2 id="dashboard-title">Soil Health Dashboard</h2>
            < MetricChart labels={labels} data={metricValues} datasetLabel={selectedMetric} />
            < MetricCard metricKey={selectedMetric} currentValue={currentValue} min={minValue} max={maxValue} isLoading={isLoading}/>
            <div className={styles.toggleContainer} role="group" aria-label="Metric toggle">
                <button className={selectedMetric === "soilMoisture" ? styles.active : ""} aria-pressed={selectedMetric === "soilMoisture"} aria-label="Show Soil Moisture chart" onClick={() => setSelectedMetric("soilMoisture")}>
                    Soil Moisture
                </button>
                <button className={selectedMetric === "temperature" ? styles.active : ""} aria-pressed={selectedMetric === "temperature"} aria-label="Show Temperature chart" onClick={() => setSelectedMetric("temperature")}>
                    Temperature
                </button>
            </div>
        </section>
    );
};
