import {useState} from 'react'
import {Link } from 'next/link'
import {useRouter} from 'next/router'
import axios from "axios"

function Login(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const router = useRouter()

    const login = async(e) =>{
        e.preventDefault()

        try{
            await axios.post ('https://nextpro-shahedtheboss.vercel.app/api/login',{
                email,
                pass
            })
            router.push("/admin")
        }catch(err){
            alert("Invalid Input")
            console.log(err);
        }
    }

    return(
        <div className="mainfr">
            <div className="loginfr">
                <h1 className="head">ADMIN LOGIN</h1>
                <form className="fr">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={{fontFamily: "arial"}}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}
                    />
                    
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******"
                        style={{fontFamily: "arial"}}
                        onChange={(e) =>{
                            setPass(e.target.value)
                        }}
                    />
                    <div className="buts">
                        <button className="loginbt" type="submit" onClick={login}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
)
}

export default Login