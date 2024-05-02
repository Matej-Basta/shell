"use client";
import styles from "../components/safeComponent.module.css";

export default function ErrorBoundary() {
    return (
        <h1 className={styles.error}>Something went wrong</h1>
    );
}