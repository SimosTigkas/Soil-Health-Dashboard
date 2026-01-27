import React from "react";
import styles from "./MetricCard.module.css";
import CountUp from "react-countup";
import { METRICS } from "../../config/metricConfig";

export const MetricCard = ({ metricKey, currentValue, min, max, isLoading }) => {
    const metric = METRICS[metricKey];
    if (!metric) {
        return (
            <section className={styles.metricsContainer} aria-live="assertive" role="alert">
                <p>Metric not supported</p>
            </section>
        );
    }

    if ([currentValue, min, max].some(value => value === null || value === undefined || Number.isNaN(value))) {
        return (
            <section className={styles.metricsContainer} aria-live="polite"><p>Data unavailable for {metric.label}</p></section>
        );
    }

      if (isLoading) {
        return (
            <section className={styles.metricsContainer} aria-busy="true" aria-label="Loading metric summary">
                {[1, 2, 3].map(i => (<div key={i} className={styles.skeletonCard} />))}
            </section>
            );
        }
    return (
    <section className={styles.metricsContainer} aria-label="Metric summary" role="region">
        <div className={styles.metricCard}>
            <h3 id={`current-${metricKey}`}>Current</h3>
            <p aria-live="polite" aria-labelledby={`current-${metricKey}`}><CountUp start={0} end={currentValue} duration={1.5} suffix={metric.unit} /></p>
        </div>
        <div className={styles.metricCard}>
            <h3 id="min-metric">Min</h3>
            <p aria-live="polite" aria-labelledby="min-metric"><CountUp start={0} end={min} duration={1.5} suffix={metric.unit} /></p>
        </div>
        <div className={styles.metricCard}>
            <h3 id="max-metric">Max</h3>
            <p aria-live="polite" aria-labelledby="max-metric"><CountUp start={0} end={max} duration={1.5} suffix={metric.unit} /></p>
        </div>
    </section>);
};