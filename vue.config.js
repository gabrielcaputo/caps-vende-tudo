module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/scoped.scss";
                `
            }
        }
    },
    lintOnSave: undefined
}