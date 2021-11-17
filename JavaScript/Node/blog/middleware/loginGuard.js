const guard = (req, res, next) => {

    if (req.url != '/login' && !req.session.username) { //request login or no session
        res.redirect('/admin/login');
    } else {
        next()
    }
}

module.exports = guard;