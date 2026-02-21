// ============================================================
// Mock Polymarket Client
// 用嚟模擬真實 Polymarket API，完全唔需要連網／真錢
// 設定 MOCK_MODE=true 環境變數就會啟動
// ============================================================

export interface MockOutcome {
  name: string;
  price: number; // 0.00 - 1.00 (即係 implied probability)
}

export interface MockMarket {
  id: string;
  title: string;
  ticker: string;
  end_date: string;
  outcomes: MockOutcome[];
}

// 15 個模擬 BTC 市場 snapshots（模擬唔同時間點嘅價格波動）
export const mockBtcMarkets: MockMarket[] = [
  {
    id: "mock-btc-001",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.62 },
      { name: "No",  price: 0.38 },
    ],
  },
  {
    id: "mock-btc-002",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.58 },
      { name: "No",  price: 0.42 },
    ],
  },
  {
    id: "mock-btc-003",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.45 },
      { name: "No",  price: 0.55 },
    ],
  },
  {
    id: "mock-btc-004",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.40 },
      { name: "No",  price: 0.60 },
    ],
  },
  {
    id: "mock-btc-005",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.35 },
      { name: "No",  price: 0.65 },
    ],
  },
  {
    id: "mock-btc-006",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.30 },
      { name: "No",  price: 0.70 },
    ],
  },
  {
    id: "mock-btc-007",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.38 },
      { name: "No",  price: 0.62 },
    ],
  },
  {
    id: "mock-btc-008",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.50 },
      { name: "No",  price: 0.50 },
    ],
  },
  {
    id: "mock-btc-009",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.55 },
      { name: "No",  price: 0.45 },
    ],
  },
  {
    id: "mock-btc-010",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.67 },
      { name: "No",  price: 0.33 },
    ],
  },
  {
    id: "mock-btc-011",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.72 },
      { name: "No",  price: 0.28 },
    ],
  },
  {
    id: "mock-btc-012",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.68 },
      { name: "No",  price: 0.32 },
    ],
  },
  {
    id: "mock-btc-013",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.60 },
      { name: "No",  price: 0.40 },
    ],
  },
  {
    id: "mock-btc-014",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.52 },
      { name: "No",  price: 0.48 },
    ],
  },
  {
    id: "mock-btc-015",
    title: "Will Bitcoin be above $95,000 in the next 15 minutes?",
    ticker: "BTC-95K-15M",
    end_date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    outcomes: [
      { name: "Yes", price: 0.44 },
      { name: "No",  price: 0.56 },
    ],
  },
];

// 逐個 snapshot 輪流回傳，模擬真實市場價格隨時間變化
let mockIndex = 0;

export function getMockMarket(): MockMarket {
  const market = mockBtcMarkets[mockIndex % mockBtcMarkets.length];
  mockIndex++;
  return market;
}
