import { Polymarket } from "polymarket-data";
import { getMockMarket } from "./mock-data";

// ============================================================
// MOCK_MODE 說明：
//   設定環境變數 MOCK_MODE=true 就會用假數據
//   唔需要連真正 Polymarket API，完全離線測試
// ============================================================
const IS_MOCK = process.env.MOCK_MODE === "true";

function getSignal(yesPrice: number, prevYesPrice: number | null): string {
  if (prevYesPrice === null) return "---（首次觀察）";
  const diff = yesPrice - prevYesPrice;
  if (diff > 0.08)  return "STRONG UP   ▲▲ (Yes 急升 >8%)";
  if (diff > 0.03)  return "UP          ▲  (Yes 升  >3%)";
  if (diff < -0.08) return "STRONG DOWN ▼▼ (Yes 急跌 >8%)";
  if (diff < -0.03) return "DOWN        ▼  (Yes 跌  >3%)";
  return              "HOLD        — (唔大變動)";
}

async function runMockObserver() {
  console.log("=== [MOCK MODE] Polymarket Bitcoin 觀察 bot 開始 ===");
  console.log("     完全離線模擬，共 15 個 BTC 市場 snapshots\n");

  let prevYesPrice: number | null = null;

  for (let i = 1; i <= 15; i++) {
    const market = getMockMarket();
    const yes = market.outcomes.find((o) => o.name === "Yes");
    const no  = market.outcomes.find((o) => o.name === "No");

    const yesPrice = yes?.price ?? 0;
    const noPrice  = no?.price  ?? 0;
    const spread   = Math.abs(yesPrice - noPrice);
    const signal   = getSignal(yesPrice, prevYesPrice);
    const now      = new Date().toISOString();

    console.log(`[Snapshot ${String(i).padStart(2, "0")} / 15]  ${now}`);
    console.log(`  市場：${market.title}`);
    console.log(`  ID  ：${market.id}`);
    console.log(`  結束：${market.end_date}`);
    console.log(`  Yes ：${(yesPrice * 100).toFixed(0)}%   No：${(noPrice * 100).toFixed(0)}%   Spread：${spread.toFixed(2)}`);
    console.log(`  訊號：${signal}`);
    console.log("");

    prevYesPrice = yesPrice;

    // 模擬每個 snapshot 間隔（GitHub Actions 唔需要 sleep，本地跑可以開啟）
    // await new Promise((r) => setTimeout(r, 2000));
  }

  console.log("=== [MOCK MODE] 模擬完成，共觀察 15 個 snapshots ===");
}

async function runRealObserver() {
  const client = new Polymarket();
  console.log("=== Polymarket Bitcoin 觀察 bot 一次運行開始 ===");

  // 1. 拉一批未結束市場
  const markets = await client.gamma.markets.listMarkets({
    closed: false,
    limit: 100
  });

  // 2. filter 出 Bitcoin / BTC 相關市場
  const btcMarkets = (Array.isArray(markets) ? markets : []).filter((m: any) => {
    const title  = (m.title || m.question || "").toLowerCase();
    const ticker = (m.ticker || "").toLowerCase();
    return (
      title.includes("bitcoin") ||
      title.includes("btc")     ||
      ticker.includes("btc")
    );
  });

  if (btcMarkets.length === 0) {
    console.log("[INFO] 暫時搵唔到 Bitcoin 相關市場。");
    console.log("=== 運行結束 ===");
    return;
  }

  // 3. 揀第一個 Bitcoin 市場做觀察
  const market = btcMarkets[0];
  console.log("觀察市場：");
  console.log("- id:", market.id);
  console.log("- title:", market.title || market.question);
  console.log("- end_date:", market.end_date);

  // 4. 顯示 outcome 價格（即係 YES/NO 或其他選項嘅 odds）
  if (market.outcomes && market.outcomes.length > 0) {
    console.log("Outcome 價格：");
    for (const o of market.outcomes) {
      console.log(`  - ${o}`);
    }
  } else {
    console.log("呢個市場暫時冇 outcomes / 價格資料。");
  }

  console.log("=== 運行結束 ===");
}

async function main() {
  if (IS_MOCK) {
    await runMockObserver();
  } else {
    await runRealObserver();
  }
}

main().catch((err) => {
  console.error("Observer 發生錯誤：", err);
  process.exit(1);
});
