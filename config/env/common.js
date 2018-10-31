import path from 'path'
export default {
    port: process.env.PORT || 8000,
    viewDir: path.join(__dirname, '..', '../src/views'),
    // staticDir: path.join(__dirname, '..', '../src/assets'),
    logDir: path.join(__dirname, '..', '../src/log')
}