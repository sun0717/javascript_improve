// 借助 errorOverlayMiddleware 中间件来进行错误拦截并展示
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware'

class ErrorOverlayPlugin {
    apply(compiler) {
        const className = this.constructor.name;
        if (compiler.options.mode !== 'development') return;

        compiler.hooks.entryOption.tap(className, (context, entry) => {
            const chunkPath = require.resolve('./entry');
            adjustEntry(entry, chunkPath);
        })

        compiler.hooks.afterResolves.tap(className, ({ options }) => {
            if (options.devServer) {
                const originalBefore = options.devServer.before;
                options.devServer.before = (app, server) => {
                    if (originalBefore) {
                        originalBefore(app, server);
                    }
                    app.use(errorOverlayMiddleware());
                }
            }
        })
    }
}

function adjustEntry(entry, chunkPath) {
    if (Array.isArray(entry)) {
        if (!entry.includes(chunkPath)) {
            entry.unshift(chunkPath);
        }
    } else {
        Object.keys(entry).forEach(entryName => {
            entry[name] = adjustEntry(entry[entryName], chunkPath);
        })
    }
}

module.exports = ErrorOverlayPlugin;