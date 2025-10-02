'use client';
// because using hooks from react

import React, {useEffect, useRef} from 'react';

// the idea is to make a re-useable hook for rendering charts etc that is agnostic of stock name and chart type i guess.

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(
        () => {

            if (!containerRef.current) return;

            // if another widget is already loaded, we return/exit
            if (containerRef.current.dataset.loaded) return;

            // clear inner HTML by replacing with empty div
            containerRef.current.innerHTML = `<div class="trading-view-widget-container__widget" style="width: 100%; height: 100%;"></div>`;

            const script = document.createElement("script");

            script.src = scriptUrl;  // because will be different for different widget types

            script.async = true;
            script.innerHTML = JSON.stringify(config);

            containerRef.current.appendChild(script);
            containerRef.current.dataset.loaded = 'true';

            // when func unmounts, below runs for cleanup
            return () => {
                if (containerRef.current) {
                    containerRef.current.innerHTML = '';
                    delete containerRef.current.dataset.loaded;
                }
            }
        },
        [scriptUrl, config, height]
    );

    return containerRef;
}
export default useTradingViewWidget
