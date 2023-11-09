import { loginRoutes, userRoutes, openaiRoutes } from './controller/routes.controller.js'

export default function (app) {
    
    app.use('/api/signin', loginRoutes);
    app.use('/api/register', userRoutes);
    app.use('/api/openai', openaiRoutes);

    app.use((err, _req, res, _next) => {
        if(err) res.status(500).json({});
    }) 
}