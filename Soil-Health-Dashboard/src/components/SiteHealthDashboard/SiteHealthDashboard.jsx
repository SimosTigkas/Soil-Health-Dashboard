import { useEffect, useState} from "react";
import styles from "./SiteHealthDashboard.module.css";
import mockData from "../../data/data.json";
import { MetricChart } from "../MetricChart/MetricChart";
import { MetricCard } from "../MetricCard/MetricCard";

const STORAGE_KEY = "selectedMetric";

export const SiteHealthDashboard = () => {
    const [selectedMetric, setSelectedMetric] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) || "Moisture";
    });
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (selectedMetric)
            localStorage.setItem(STORAGE_KEY, selectedMetric);
    }, [selectedMetric]);

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
            < MetricChart labels={labels} data={metricValues} metricKey={selectedMetric} />
            < MetricCard metricKey={selectedMetric} currentValue={currentValue} min={minValue} max={maxValue} isLoading={isLoading}/>
            <div className={styles.toggleContainer} role="group" aria-label="Metric toggle">
                <button className={selectedMetric === "Moisture" ? styles.active : ""} aria-pressed={selectedMetric === "Moisture"} aria-label="Show Moisture chart" data-testid= "metric-toggle-moisture" onClick={() => setSelectedMetric("Moisture")}>
                    Moisture
                </button>
                <button className={selectedMetric === "Temperature" ? styles.active : ""} aria-pressed={selectedMetric === "Temperature"} aria-label="Show Temperature chart" data-testid= "metric-toggle-temperature" onClick={() => setSelectedMetric("Temperature")}>
                    Temperature
                </button>
            </div>
        </section>
    );
};
