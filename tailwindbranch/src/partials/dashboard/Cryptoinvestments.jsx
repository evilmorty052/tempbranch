import LineChart from "../charts/Linechart"
import { useState, useEffect } from "react"

const Cryptoinvestments = ({activecoin}) => {

    const [coin, setcoin] = useState(null)
    const [dailyprices, setdailyprice] = useState([])
    const [fetching, setfetching] = useState(false)

   useEffect(() => {
    if(fetching) return
 fetch(`https://api.coingecko.com/api/v3/coins/${activecoin}/market_chart?vs_currency=usd&days=7&interval=daily`).then((res)=> res.json()).then((res)=>{
   res &&  setfetching(true)
   res && setcoin(res)
    })
     
   }, [fetching])





 const prices =  [
    [
        1678233600000,
        22217.209884905325
    ],
    [
        1678320000000,
        21712.65119391273
    ],
    [
        1678406400000,
        20376.320007428807
    ],
    [
        1678492800000,
        20195.2289502733
    ],
    [
        1678579200000,
        20521.55615175117
    ],
    [
        1678665600000,
        22095.71339833569
    ],
    [
        1678752779000,
        24113.43633738108
    ]
]

const dailyprice = coin?.prices?.map((price)=>{
    return price[1]
})

console.log(dailyprice)

if (!coin) {
    return(
        <>...fetching</>
    )
}
    
  return (
    <div className="pt-8">
        <LineChart entries={dailyprice} label={['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']}/>
    </div>
  )
}

export default Cryptoinvestments