import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title: "按钮",
        favicon: "./public/favicon.ico",
        meta: {
            renderer: "webkit",
            "force-rendering": "webkit",
            viewport:
                "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
            "theme-color": "#EDF2F9",
            "http-equiv": {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge,chrome=1",
            },
        },
    },
    output: {
        overrideBrowserslist: [
            "chrome >= 51",
            "edge >= 15",
            "firefox >= 54",
            "safari >= 10",
            "ios_saf >= 10",
        ],
        distPath: {
            root: "build",
        },
        copy: [
            {
                from: "public/manifest.json",
                to: "manifest.json",
            },
            {
                from: "public/logo192.png",
                to: "logo192.png",
            },
            {
                from: "public/logo512.png",
                to: "logo512.png",
            },
        ],
    },
    performance: {
        // removeConsole: ["log", "warn"],
        // bundleAnalyze: {},
        chunkSplit: {
            strategy: "split-by-experience",
            forceSplitting: {
                echarts: /node_modules\/echarts/,
                "@ant-design": /node_modules\/@ant-design/,
            },
        },
        removeMomentLocale: true,
    },
    server: {
        port: 3333
    }
});