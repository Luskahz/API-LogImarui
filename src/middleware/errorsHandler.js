export const errorsHandler = (error, req, res, next) => {

    console.error(`[${new Date().toISOString()}] [${req.method} ${req.originalUrl}]`, error.message);
    if (process.env.NODE_ENV !== 'production') {

        console.error(error.stack?.split('\n').slice(0, 3).join('\n'));
    }


    if (error?.type === 'entity.parse.failed' && error.message.includes('JSON')) {
        return res.status(400).json({
            message: "JSON Inválido, verifique a formatação dos dados!"
        });
    }


    return res.status(500).json({
        message: process.env.NODE_ENV === 'production'
            ? "Erro inesperado, tente novamente mais tarde."
            : `Erro: ${error.message}`
    });
}