import loginRoutes from './controller/login/login.routes.js';

export default function (app) {
    
    app.use('/api/signin', loginRoutes);

    app.use((err, _req, res, _next) => {
        if(err) res.status(500).json({});
    }) 
}