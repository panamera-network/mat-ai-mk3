// components/MainPanel.tsx
"use client";

import AccountSummary from "../../AccountSummary";
import RingSummary from "../../RingSummary";
import AISuggestionPanel from "../../AISuggestionPanel";
import MainChart from "../../MainChart";
import OrderPanel from "../../OrderPanel";
import EntryLog from "../../EntryLog";
import SessionTracker from "../../SessionTracker";
import CSMPanel from "../../CSMPanel";
import styles from "./MainPanel.module.css";

export default function MainPanel() {
  return (
    <div className={styles.mainPanel}>
      {/* Summary and Rings */}
      <div className={styles.summaryRings}>
        <div>
          <AccountSummary />
        </div>
        <RingSummary />
      </div>

      {/* AI Suggestion */}
      <div className={styles.aiSuggestion}>
        <AISuggestionPanel />
      </div>

      {/* Main Chart + Tracker */}
      <div className={styles.chartTracker}>
        <div className={styles.mainChart}>
          <MainChart />
        </div>
        <div className={styles.trackerSide}>
          <div className={styles.csmPanel}>
            <CSMPanel />
          </div>
          <div className={styles.sessionTracker}>
            <SessionTracker />
          </div>
        </div>
      </div>

      {/* Order Panel + Entry Log */}
      <div className={styles.orderLog}>
        <div className={styles.orderPanel}>
          <OrderPanel />
        </div>
        <div className={styles.entryLog}>
          <EntryLog />
        </div>
      </div>
    </div>
  );
}
