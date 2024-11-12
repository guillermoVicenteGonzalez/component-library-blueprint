import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
	build: {
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: Object.fromEntries(
				glob
					.sync("lib/**/*.{ts,tsx}", {
						ignore: ["lib/**/*.d.ts"],
					})
					.map((file) => [
						// The name of the entry point
						// lib/nested/foo.ts becomes nested/foo
						relative("lib", file.slice(0, file.length - extname(file).length)),
						// The absolute path to the entry file
						// lib/nested/foo.ts becomes /project/lib/nested/foo.ts
						fileURLToPath(new URL(file, import.meta.url)),
					])
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
});
