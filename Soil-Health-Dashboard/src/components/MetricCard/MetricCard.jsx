import React from "react";
import styles from "./MetricCard.module.css";

export const MetricCard = ({ currentValue, min, max}) => {
    return (
    <div className={styles.metricsContainer}>
        <div className={styles.metricCard}>
            <h3>Current</h3>
            <p>{currentValue}</p>
        </div>
        <div className={styles.metricCard}>
            <h3>Min</h3>
            <p>{min}</p>
        </div>
        <div className={styles.metricCard}>
            <h3>Max</h3>
            <p>{max}</p>
        </div>
    </div>);
};