import { Polymarket } from "polymarket-data";

async function main() {
  const client = new Polymarket();

  console.log("=== Polymarket Bitcoin 觀察 bot 一次運行開始 ===");

  // 1. 拉一批未結束市場
  const markets = await client.gamma.markets.listMarkets({
    closed: false,
    limit: 100
  });

  // 2. filter 出 Bitcoin / BTC 相關市場
  const btcMarkets = (Array.isArray(markets) ? markets : []).filter((m: any) => {
    const title = (m.title || m.question || "").toLowerCase();
    const ticker = (m.ticker || "").toLowerCase();
    return (
      title.includes("bitcoin") ||
      title.includes("btc") ||
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

  } else {
    console.log("呢個市場暫時冇 outcomes / 價格資料。");
  }

  console.log("=== 運行結束 ===");
}

main().catch((err) => {
  console.error("Observer 發生錯誤：", err);
  process.exit(1);
});
