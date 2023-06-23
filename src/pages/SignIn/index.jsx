import { Link } from "react-router-dom"

function SingIn () {
    return(
        <div className=" shadow-xl p-10  self-center ">
            
            <div className=" mb-10">
                <p className=" text-3xl font-bold text-[#292929]">Sign In</p>
                <p>
                    <span className=" text-gray-400 text-sm">Doesn't have an account yet? </span> 
                    
                    <Link to={"/sing-up"}>
                        <span className="font-bold cursor-pointer text-sm underline text-gray-700"> Sing Up</span>
                    </Link>
                    

                </p>
            </div>
            <form id="sign-in--form">
                <div className="mb-3">
                    <p className=" font-bold ">Email Address</p>
                    <input 
                        className=" border-solid border-2 p-2 rounded-xl placeholder:text-sm text-sm w-full"
                        type="email" name="sign-in--form" id="email" placeholder="you@example.com"/>
                </div>
                <div className="mb-10">
                    <p className=" font-bold">Password</p>
                    <input 
                    className=" border-solid border-2 p-2 rounded-xl placeholder:text-sm text-sm w-full"
                    type="password" name="sign-in--form" id="password" placeholder="Enter 6 character or more" />
                </div>

                <button className=" w-full bg-[#292929] text-white h-10 rounded-lg" type="submit">Login</button>
            </form>

        </div>
    )
}

export {SingIn}