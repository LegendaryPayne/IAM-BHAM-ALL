import passport from 'passport';
import { Strategy as LocalStrategy} from 'passport-local';
import Table from '../table';

let usersTable = new Table('Users');

export default function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        sessions: false
    } , (email, password, done) => {
        
        usersTable.find({email})
        .then(results => results[0])
        .then(result => {
            if (result && result.password && result.password === password) {
                
                return done(null, {token: 'blah123'});
            } else {
                return done(null, false, {message: 'Invalid login'});
            }
        }).catch(err => {
            return done(err);
        });
    }))

    app.use(passport.initialize());
}