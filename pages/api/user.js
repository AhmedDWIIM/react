import connectDB from "../../middleware/mongodb";
import User from "../../models/User";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body
        if (username && password){
            try{
                var passwordHash = await bcrypt.sign(password)
                var user = new User({
                    username,
                    password: passwordHash
                })
                var usercreated = await user.save();
                return res.status(200).send(usercreated)
            }
            catch(error){
                res.status(500).send(error.message)
            }
        }else{
            res.status(422).send('incomplete data')
        }
    }else{
        res.status(422).send('method not supported')
    }
}
export default connectDB(handler)