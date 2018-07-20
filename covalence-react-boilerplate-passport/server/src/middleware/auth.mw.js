import passport from 'passport';

function tokenMiddleware(req, res, next) {
    console.log('got to tokenmiddle')
    passport.authenticate('bearer', { session: false })(req, res, next);
}

function isLoggedIn(req, res, next) {
    console.log('got to isloggedin')
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

export { tokenMiddleware, isLoggedIn };