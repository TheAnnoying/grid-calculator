import { resolve } from "path";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				404: resolve(__dirname, "404.html")
			},
			output: {
				entryFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	publicDir: "assets",
	cssMinify: "lightningcss",
	appType: "custom",
	plugins: [
		topLevelAwait()
	]
});