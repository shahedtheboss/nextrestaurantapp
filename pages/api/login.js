import cookie from 'cookie'

const handler = (req, res) =>{
    if(req.method === "POST"){
        const {email, pass} = req.body
        if(email === process.env.ADMIN_USERNAME && pass === process.env.ADMIN_PASSWORD){
            res.setHeader("SET-Cookie", cookie.serialize("token", process.env.TOKEN,{
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
            )
            res.status(200).json("Successful")
        }else{
            res.status(400).json("Credetials wrong")
        }
    }
}

export default handler