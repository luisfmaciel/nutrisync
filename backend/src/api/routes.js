import loginRoutes from './controller/login/login.routes.js';
import userRoutes from './controller/user/user.routes.js';

export default function (app) {
    
    app.use('/api/signin', loginRoutes);
    app.use('/api/register', userRoutes);

    app.use((err, _req, res, _next) => {
        if(err) res.status(500).json({});
    }) 
}