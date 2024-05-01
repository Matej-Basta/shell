import React from "react";
import styles from "./safeComponent.module.css";

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch() {}

    render() {
        if (this.state.hasError) {
            return <h1 className={styles.error}>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}