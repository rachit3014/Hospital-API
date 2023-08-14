const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}


passport.use(new JWTStrategy(opts,  async function (jwtPayLoad, done){
    
    try {
         let doctor = await  Doctor.findById(jwtPayLoad._id)
        
            if (doctor){
                return done(null, doctor);
            }else{
                return done(null, false);
            }
      
        
        
    } catch (error) {
        console.log(error)
        
    }



}));



// Doctor.findById(jwtPayLoad._id, function(err, doctor){
//     if (err){console.log('Error in finding user from JWT'); return;}

//     if (doctor){
//         return done(null, doctor);
//     }else{
//         return done(null, false);
//     }
// })







module.exports = passport;
