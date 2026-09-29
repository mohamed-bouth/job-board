
export function response(req, res, data, view) {
    const accept = req.headers.accept
    console.log(accept)

    if (accept?.includes('application/json')) {
        return res.json({
            success: true,
            data
        })
    }

    return res.render(view, data )
}

export function errorResponse(req, res, error, status = 500) {
    const accept = req.headers.accept

    if (accept?.includes('application/json')) {
        return res.status(status).json({
            success: false,
            error: error.message
        })
    }

    return res.status(status).render('error', {
        error: error.message
    })
}