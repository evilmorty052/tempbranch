import { layout } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { client } from "../../lib/client";


const confirminfo = () => {
  const sanityuser1 = localStorage.getItem('sanityuser1');
  const sanityuser2 = localStorage.getItem('sanityuser2');
  const sanityuser3 = localStorage.getItem('sanityuser3');
  const person1 = JSON.parse(sanityuser1);
  const person2 = JSON.parse(sanityuser2);
  const person3 = JSON.parse(sanityuser3);

  const person =  Object.assign({}, person1, person2, person3);

  console.log(person)

    return ( 
        <Layout>
      <div className="bg-white h-full flex flex-col">
        <h4 className="text-center text-2xl">Confirm info</h4>
      </div>
        </Layout>

       
     );
}
 
export default confirminfo;


