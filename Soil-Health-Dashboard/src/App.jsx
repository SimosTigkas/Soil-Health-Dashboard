import styles from "./App.module.css";
import { SiteHealthDashboard } from "./components/SiteHealthDashboard/SiteHealthDashboard";

function App() {
  return (
    <div className={styles.App}>
      <SiteHealthDashboard/>
    </div>);
}

export default App
