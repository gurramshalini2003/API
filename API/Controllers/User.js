const User = require('../Models/User');  

exports.login = (req, res) => {
    const email = req.body.email;
    const Password = req.body.Password;
    User.find({email:email, Password:Password}).then(result => {
        if(result.length >= 1){
            res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated: true, user: result }) 
        }
        else {
            res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated:false, user: result })
        }
    }).catch(err => {
        res.status(500).json({ message: err})
    })
}

exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const PhoneNumber = req.body.PhoneNumber;
    const Password = req.body.Password;
    const SignInUser = new User({ email: email, FirstName: FirstName, LastName: LastName, PhoneNumber:PhoneNumber, Password:Password });
    SignInUser.save().then(result => {
        res.status(200).json({ message: "User signedUp Sucessfully", user: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}