module.exports = {
    apps: [
        {
            name: 'vue-app',
            script: 'npm',
            args: 'run dev -- --host 0.0.0.0',
            interpreter: 'none',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
