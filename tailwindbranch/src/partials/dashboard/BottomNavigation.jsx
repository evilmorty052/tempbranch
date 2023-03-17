import { useState, useEffect, useLayoutEffect} from "react";
import { Link , useLocation} from "react-router-dom";


function BottomNavigation  ({func}) {
   const path = useLocation().pathname
   const [invisible, setinvisible] = useState(false)
   
 const handleActive = () => {
  switch (path) {
    case '/dashboard/Dashboard':
      setActive(2)
      setinvisible(false)
      break;
    case '/dashboard/Portfolio/coin':
      setinvisible(true)
      break;
    
      case '/dashboard/Portfolio/setup':
      setinvisible(true)
      break;

    case '/dashboard/Portfolio':
      setActive(1)
      setinvisible(false)
      break;
    
      case '/dashboard/Portfolio/portfolio':
      setinvisible(true)
      break;
     
      case '/dashboard/Portfolio/crypto':
      setinvisible(true)
      setActive(1)
      break;
    
      case '/dashboard/Hub':
      setActive(0)
      setinvisible(false)
      break;
      
      case '/dashboard/Withdraw':
      setActive(3)
      setinvisible(false)
      break;
      
      case '/dashboard/Messages':
      setActive(4)
      setinvisible(false)
      break;
      
      case '/dashboard/Messages/chat':
      setinvisible(true)
      break;
  
    default:
      break;
  }
 }
   
   
   useEffect(() => {
    handleActive()
   }, [path])
   

    const Menus = [
      { name: "Hub", icon: "globe-outline", dis: "translate-x-0" },
      { name: "Portfolio", icon: "person-outline", dis: "translate-x-16" },
      { name: "Dashboard", icon: "home-outline", dis: "translate-x-32" },
      { name: "Withdraw", icon: "cash-outline", dis: "translate-x-48" },
      { name: "Messages", icon: "chatbubbles-outline", dis: "translate-x-64" },
    ];
    const [active, setActive] = useState(2);

    const [ActivePage, setActivePage] = useState()


    return (
      <>
      
      {!invisible && <div className="bg-gray-100 max-h-[4.4rem]  px-6 mt-10 fixed bottom-0 w-full sm:hidden rounded-t-xl">
        <ul className="flex relative min-w-[339px]">
          <span
            className={`bg-green-300/60 duration-500  ${Menus[active].dis} border-2 border-gray-400 h-16 w-16 absolute
           -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col items-center justify-center text-center pt-6"
                onClick={() => {
                  setActive(i)
                  
                  func}}
              >
                <span
                  className={`text-2xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 "
                  }`}
                >
                <Link to={`/dashboard/${menu.name}`}> <ion-icon name={menu.icon}></ion-icon></Link> 
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 text-gray-800 font-extrabold duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>}
      </>
    );
  };

  export default BottomNavigation