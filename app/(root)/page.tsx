import React from 'react'
import {Button} from "@/components/ui/button";
import TradingViewWidget from "@/components/TradingViewWidget";
import {MARKET_OVERVIEW_WIDGET_CONFIG} from "@/lib/constants";
import config from "@/postcss.config.mjs";

const Home = () => {
    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                <div className="md:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        title={"Market Overview"}
                        scriptUrl={"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className={"custom-chart"}
                        height={100}
                        />
                </div>
            </section>
        </div>
    )
}
export default Home

// homepage for our root layout