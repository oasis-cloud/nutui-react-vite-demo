import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // 配置 nutui 全局 scss 变量
                additionalData: `@import "@test/nutui-react/dist/styles/variables.scss";`,
            },
        },
    },
    plugins: [
        react(),
        styleImport({
            libs: [
                {
                    libraryName: "@test/nutui-react",
                    libraryNameChangeCase: "pascalCase",
                    resolveStyle: (name) => {
                        return `@test/nutui-react/dist/packages/${name.toLowerCase()}/${name.toLowerCase()}.scss`;
                    },
                },
            ],
        }),
    ],
});
