import type { DefaultTheme } from "vitepress";

export default function sidebarTrading(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Money Management",
			collapsed: false,
			base: "/software/trading/money-management",
			items: [
				{ text: "Rebalance", link: "rebalance" },
				{ text: "Asset Allocation", link: "asset-allocation" },
			],
		},

		{
			text: "Risk Management",
			collapsed: false,
			base: "/software/trading/risk-management",
			items: [
				{ text: "Portfolio Size", link: "portfolio-size" },
				{ text: "Risk Reward Ratio", link: "risk-reward-ratio" },
			],
		},
		{
			text: "Trading Strategy",
			collapsed: false,
			base: "/software/trading/trading-strategy",
			items: [
				{ text: "Scalping", link: "scalping" },
				{ text: "Grid Trading", link: "grid-trading" },
				{ text: "Day Trading", link: "day-trading" },
			],
		},
		{
			text: "Trading Tools",
			collapsed: false,
			base: "/software/trading/trading",
			items: [
				{ text: "TradingView", link: "/software/trading/trading" },
				{ text: "CryptoQuant", link: "/software/trading/cryptoquant" },
			],
		},
	];
}
