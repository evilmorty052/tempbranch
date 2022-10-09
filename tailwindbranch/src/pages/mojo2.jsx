import React from "react"
import MojoAuth from "mojoauth-web-sdk"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function Mojo() {
const [payload, setPayload] = React.useState(null)
const history = useNavigate
{/* 1 Initialize and show the form*/}
const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
	source:[{type:'email', feature:'magiclink'}],
	redirect_url: "http://localhost:5173"
	
});
useEffect(() => {
	mojoauth.signIn().then((payload)=>(setPayload(payload)))&console.log(payload)&setTimeout(() => {localStorage.setItem('san', JSON.stringify(payload))}, 5000)
  return () => {
	if(payload > 1){
		return(
			document.getElementById("mojoauth-passwordless-form").remove()
		)
		
	}
  }
}, [payload])

return (
	<>
	{/* <button >click me</button> */}
	<div>
	    {/* 2 Put a div that will contain the form*/}
	    <div id="mojoauth-passwordless-form" />
	    {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
	</div>
	</>
	
	)
}
export default Mojo
