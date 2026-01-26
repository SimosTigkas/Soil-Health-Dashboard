import React from "react";
import styles from "./MetricCard.module.css";

export const MetricCard = ({ currentValue, min, max}) => {
    return (
    <section className={styles.metricsContainer} aria-label="Metric summary" role="region">
        <div className={styles.metricCard}>
            <h3 id="current-metric">Current</h3>
            <p aria-live="polite" aria-labelledby="current-metric">{currentValue}</p>
        </div>
        <div className={styles.metricCard}>
            <h3 id="min-metric">Min</h3>
            <p aria-live="polite" aria-labelledby="min-metric">{min}</p>
        </div>
        <div className={styles.metricCard}>
            <h3 id="max-metric">Max</h3>
            <p aria-live="polite" aria-labelledby="max-metric">{max}</p>
        </div>
    </section>);
};