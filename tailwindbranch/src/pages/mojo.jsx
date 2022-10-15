import React from "react"
import MojoAuth from "mojoauth-web-sdk"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { client } from "../../lib/client"
import { useAuth } from "../contexts/AuthContext"
import { mojoauth } from "./newuser"



export function Mojo(   ) {
const [payload, setPayload] = React.useState(null)
const history = useNavigate()
// const [token, setToken] =useState(()=>{localStorage.setItem('san',JSON.stringify(0))})
const id = localStorage.getItem('san')

{/* 1 Initialize and show the form*/}

const handlenext = async (id, token, user, userid) => {
    id = localStorage.getItem('san') 
    
if (id) {
    token = JSON.parse(id)
    let query = 
    ` *[email == "${token.user.identifier}"]
   `;   
   await client.fetch(query).then((data)=>{localStorage.setItem('user', JSON.stringify(data))})
   if(id){
    userid = localStorage.getItem('user')
    user =  JSON.parse(userid)
    console.log(user.length)

    if(id){
        user.length === 0 ? history('/newuser') : history('/welcome')
    }

   }

} else {
    console.log('drag kpo fight 2moro')
}
       
    //    console.log(token.user.identifier)
       
    
    
    
}
React.useEffect(() => {
    
	const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
            source:[{type:'email', feature:'otp'}],
        });
	mojoauth.signIn().then(payload => {
	    setPayload(payload)&localStorage.setItem('san',JSON.stringify(payload))&console.log(payload)
	    document.getElementById("mojoauth-passwordless-form").remove()

	});
}, [mojoauth])
return (
    <>
    
    <div className={  'flex flex-col  absolute inset-0 bg-plat min-h-screen items-center justify-center '}>
        <>
        <div >
          {id? <h1 className="text-2xl flex items-center text-blk gap-5"  onClick={()=>{handlenext()}}>Continue to Dashboard <i><FaArrowRight/></i> </h1> : <div></div>  }  
        </div>
        </>
      
    </div>
   
    <div>
	    {/* 2 Put a div that will contain the form*/}
	    <div id={ "mojoauth-passwordless-form" }/>
	    
	    {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
       
	</div>
    </>
	
	)
}
export default Mojo