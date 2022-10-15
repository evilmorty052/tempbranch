import { layout } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { client } from "../../lib/client";
import beams from "../assets/beams.jpg"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "@chakra-ui/react";
import { actionCodeSettings } from "../utils/init-firebase";
import { isSignInWithEmailLink, signInWithEmailLink,getAuth} from "firebase/auth";
import { Input, Button } from "@chakra-ui/react";

// Confirm the link is a sign-in with email link.
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
const SetPin = (ee,ff, pin ) => {
  
  const [user, setUser] = useState(null)
  const history = useNavigate()
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  ee =  JSON.parse(email);
  ff =  JSON.parse(password);
  const { signInWithGoogle, login, sendSignInLink } = useAuth()
  const toast = useToast()
  const [pin1, setpin1] = useState('')
  const [pin2, setpin2] = useState('')
  const [pin3, setpin3] = useState('')
  const [pin4, setpin4] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  pin = `${pin1}${pin2}${pin3}${pin4}`
  

  const query = 
  ` *[email match "${ee}"&& password =="${ff}"]
`;

useEffect(() => {
    client.fetch(query).then((data)=>{setUser(data)}).catch((error)=>{console.log(error)})
}, [])

//   const query = 
//     ` *[email match "${person.email}"]
// `;

  const handlesubmit = async () =>{
    // if (!ee || !ff) {
    //   toast({
    //     description: 'Credentials not valid.',
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    //   history('/login')
      
    //   return
    // }
    if(!pin1 || !pin2 || !pin3 || !pin4 ){
      console.log('kkk')
      toast({
       description:'CHECK YOUR PIN',
      })

      return
     }

    // if(pin.lenght < 4){
    //   window.alert('weong')
    //   return
    // }

    // console.log(pin)
 
    // your login logic here
    setIsSubmitting(true)&localStorage.setItem("pin", JSON.stringify(pin))&console.log(pin)&history('/register/confirminfo')

    // await sendSignInLink(ee, ff, ).then(console.log('sent')).catch(error => {
    //   console.log(error.message)
    //   toast({
    //     description: error.message,
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    // })
    // login(ee, ff).catch(error => {
    //   console.log(error.message)
    //   toast({
    //     description: 'INVALID EMAIL OR PASSWORD TRY AGAIN',
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    //   }) && history('/login')
    //   return
    // }).then(()=>{client.fetch(query).then((data)=>{setUser(data)})&localStorage.setItem('pin', JSON.stringify(pin))
    // setTimeout(() => {history('/welcome')}, 5000);})
    
     
  }

  // const handlesubmit = () => {
   
  //   if(!pin1 || !pin2 || !pin3 || !pin4  ){
  //    console.log('kkk')
  //    toast({
  //     description:'Incomplete pin',
  //    })
  //   }
  // }

    return (
    //     <Layout>
    //   <div className="bg-white h-full flex flex-col py-5 mt-20 justify-center">
    //     <div className=" space-y-5 flex flex-col bg-red-300 justify-center">
    //     <h4 className="text-center text-2xl ">Confirm your info</h4>
    //     <h4 className="text-center text-2xl">{person.firstname}</h4>
    //     <h4 className="text-center text-2xl">{person.lastname}</h4>
    //     <h4 className="text-center text-2xl">{person.age}</h4>
    //     <h4 className="text-center text-2xl">{person.plan}</h4>
    //     <h4 className="text-center text-2xl">{person.wantdemo}</h4>
    //     </div>
    //   </div>
    //     </Layout>
                <>
                <div className="">

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-5 bg-plat  ">
  {/* <img src={beams} alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative rounded-3xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 justify-center flex flex-col text-gray-600">
          <p className="text-center text-2xl uppercase font-poppins font-bold">{`Choose Your Pin`}</p>
          {/* <input type="password"  className="rounded-2xl"/> */}
          <div className="  flex items-center justify-between">
          <Input required value={pin1} onChange={e => setpin1(e.target.value)&console.log(pin1)} type='password' maxLength={1} className='max-w-[50px]  rounded-md text-center '/>
          <Input required value={pin2} onChange={e => setpin2(e.target.value)&console.log(pin2)} type="password" maxLength={1} className='max-w-[50px]  rounded-md text-center '/>
          <Input required value={pin3} onChange={e => setpin3(e.target.value)&console.log(pin3)} type="password" maxLength={1} className='max-w-[50px]  rounded-md text-center '/>
          <Input required value={pin4} onChange={e => setpin4(e.target.value)&console.log(pin4)} type="password" maxLength={1} className='max-w-[50px]  rounded-md text-center '/>
        {/* <div className="flex items-center justify-center w-full">
        <input required value={pin4} onChange={e => setpin4(e.target.value)&console.log(pin4)} type="text" maxLength={4} className='max-w-[250px]  font-poppins text-2xl   tracking-[1em] flex justify-center w-full rounded-md text-center '/>
        </div>   */}
         
          </div>
          <Button
             type="submit"
             colorScheme='blue'
             size='lg'
            fontSize='md'
            onClick={()=>{handlesubmit()}}
            isLoading={isSubmitting}>
            
            Sign Up
          </Button>
        </div>
        {/* <div class="pt-8 text-base  leading-7 flex space-x-10 ">
          <p class="text-sky-500 hover:text-sky-600" onClick={()=>{history('/register/registerpage3')}}>make adjustments</p>
          <p>
            <button href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600" onClick={()=>{handlesubmit()}}>Get Started &rarr;</button>
          </p>
        </div> */}
      </div>
    </div>
  </div>
</div>
                </div>
                </>
       
     );
}
 
export default SetPin;


