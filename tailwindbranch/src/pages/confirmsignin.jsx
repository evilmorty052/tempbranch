import { layout } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { client } from "../../lib/client";
import beams from "../assets/beams.jpg"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "@chakra-ui/react";



const confirmsignin = (ee,ff) => {
  const [user, setUser] = useState(null)
  const history = useNavigate()
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  ee =  JSON.parse(email);
  ff =  JSON.parse(password);
  const { signInWithGoogle, login } = useAuth()
  const toast = useToast()
  

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
    if (!ee || !ff) {
      toast({
        description: 'Credentials not valid.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
    // your login logic here
    // setIsSubmitting(true)
    login(ee, ff).catch(error => {
      console.log(error.message)
      toast({
        description: 'INVALID CREDENTIALS TRY AGAIN',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
    client.fetch(query).then((data)=>{setUser(data)})&localStorage.setItem('sanityuser', JSON.stringify(user))
    setTimeout(() => {history('/dashboard')}, 5000);
     
  }

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

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 px-5  ">
  <img src={beams} alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative rounded-3xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 justify-center flex flex-col text-gray-600">
          <p className="text-center text-2xl uppercase">{`Veryfying Your Device`}</p>
        </div>
        <div class="pt-8 text-base  leading-7 flex space-x-10 ">
          <p class="text-sky-500 hover:text-sky-600" onClick={()=>{history('/register/registerpage3')}}>make adjustments</p>
          <p>
            <button href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600" onClick={()=>{handlesubmit()}}>Get Started &rarr;</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
                </>
       
     );
}
 
export default confirmsignin;


