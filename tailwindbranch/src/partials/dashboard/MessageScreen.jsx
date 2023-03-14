
import React, {useState} from 'react'
import { people01 } from '../../assets'

const MessageScreen = ({}) => {

const [showchatScreen, setshowchatScreen] = useState(false)
const [activechat, setactivechat] = useState()

const messages = [
    {
      contact: 'jon',
      time: 'kk',
      useravatar: people01
    },
    {
      contact: 'bjorn',
      time: 'kk',
      useravatar: people01
    },
    {
      contact: 'bjorgingsen',
      time: 'kk',
      useravatar: people01
    },
]

function handleChat(params) {
  setactivechat()  
}

const Chat = ({useravatar, contact, func}) => {
    return(
        <li onClick={func} class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={useravatar} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {contact}
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-sm font-semibold text-blue-400 ">
                        open
                    </div>
                </div>
                     </li>
    )
}

const ChatScreen = ({activechat}) => {
    return(
        <>
        {activechat.contact}
        </>
    )
}

if(showchatScreen){
    return(
        <ChatScreen activechat={activechat}/>
    )
}

    const Chatlist = () => {
    return(
        <div class="w-full pt-6 max-w-md p-4 bg-white border border-gray-200 rounded-b-lg shadow sm:p-8  ">
    <div class="flex items-center justify-center border-b pb-4 mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 text-center ">Chats</h5>
   </div>
  { messages &&
   <div class="flow-root transition-all duration-500">
        <ul role="list" class="divide-y divide-gray-200 ">
            {messages?.map((message)=>{
                return(
                    <>
                    <Chat func={()=> {
                        setactivechat(message)
                        setshowchatScreen(true)
                    }} 
                        contact={message.contact} useravatar={message.useravatar}/>
                    </>
                )
            })}
            
        </ul>
   </div>}
</div>
    )
}
  return (
    <div className=' bg-slate-200 h-screen'>
         {/* <div className='p-2 bg-white flex justify-center'><p>Chats</p> </div> */}
         <div>
        <Chatlist/>
         </div>
    </div>
  )
}

export default MessageScreen