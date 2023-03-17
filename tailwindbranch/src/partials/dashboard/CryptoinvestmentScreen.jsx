import LineChart from "../charts/Linechart"
import { useState, useEffect } from "react"
import { FaBookmark, FaChild } from "react-icons/fa"
import { Route, Routes, useNavigate } from "react-router-dom"
import { bnb, bitcoin, ethereum, avalanche, solana,polygon } from "../../assets"
import styles from "../../style"
import { PlusCircleOutlined } from "@ant-design/icons"

const CryptoinvestmentScreen = ({activecoin}) => {
const navigate = useNavigate()
const coinlist = [
    {
      coin: 'Bitcoin',
      id: 'bitcoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua",
      about: 'Bitcoin is a cryptocurrency launched in January 2009 with the first genesis block mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.',
      symbol:'BTC',
      image: bitcoin
    },
    {
      coin: 'Solana',
      id: 'solana',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      symbol:'SOL',
       about: "Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains. To solve the blockchain trilemma, where developers have to balance decentralization, security and scalability when building blockchains, Solana combines the Proof-of-History (PoH) consensus mechanism alongside the more common Proof-of-Stake. This lets Solana achieve consensus more quickly by reducing the workload.Proof-of-History is a time-based consensus mechanism that develops a historical record of an activity based on its position in the blockchain, which is represented by a hash tree. This lets any node quickly verify the order of all transactions by checking the hashes on the hash tree, allowing for fast and efficient validation without requiring the nodes to store the full history of every transaction.",
      image: solana

    },
    {
      coin: 'Ethereum',
      id: 'ethereum',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.   Ethereum is also home to numerous Layer 2 solutions that offer users a cheaper and faster way to process transactions on the blockchain. Some of these solutions include Arbitrum, which rolls up multiple transactions into a single transaction on Ethereum, and Polygon’s Proof-of-Stake chain, which is a sidechain that runs parallel to the Ethereum blockchain. ",
      symbol:'ETH',
      image: ethereum

    },
    {
      coin: 'Avalanche',
      id: 'avalanche-2',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'AVAX',
      about: "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly. Mainnet was launched in September 21, 2020. Since then, the platform has grown to secure over 100+ individual projects, $1.4M+ of AVAX burned (reducing supply), 950+ individual block-producing validators, and over 500k+ community members around the globe. Decentralized finance (DeFi) applications can be found on Avalanche such as Pangolin, TraderJoe and Benqi. While popular games on Avalanche includes Crabada.",
      image: avalanche

    },
    {
      coin: 'Binance Coin',
      id: 'binancecoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain. Binance Coin has seen massive growth in interest throughout the years. Several rounds of token burn events have appreciated BNB price and pushed it up as one of the top-10 cryptocurrencies by market capitalization. BNB can be traded in over 300 trading pairs across 120 exchanges tracked.",
      symbol:'BNB',
      image: bnb

    },
    {
      coin: 'Polygon',
      id: 'matic-network',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Matic',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: polygon
    }
]


const CoinCard = ({header, buttontext, func, description, image}) => {
    return(
        <>
         <div className="flex items-center space-x-4 bg-gray-200 min-w-[300px] max-w-[350px] px-2 py-4 rounded-xl">
             <div className="p-2 bg-white rounded-xl w-20 ">
                <img src={image} alt="" className="w-full" />
             </div>
             <div className="flex items-center space-x-2">
                 <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{header}</h3>
                     <p className=" text-sm leading-normal" >{description} </p>
                 </div>
                 <button onClick={func} className="w-20  bg-green-300 py-1  rounded-3xl">{buttontext}</button>
             </div>
         </div>
        </>
    )
}
    const [coin, setcoin] = useState(null)
    const [coinprice, setcoinprice] = useState(null)
    const [token, settoken] = useState(null)
    const [dailyprices, setdailyprice] = useState([])
    const [fetching, setfetching] = useState(false)
    const [investing, setinvesting] = useState(false)
    
    // const coinprice = coin?.prices?.prices[31]


   useEffect(() => {
    if(!token) return
 fetch(`https://api.coingecko.com/api/v3/coins/${token.id}/market_chart?vs_currency=usd&days=31&interval=daily`).then((res)=> res.json()).then((res)=>{
   res &&  setfetching(true)
   res && setcoin(res)
//    res && setcoinprice(coin?.prices[31])
//    res && console.log(coinprice)
    })
     
   }, [token])





const dailyprice = coin?.prices?.map((price)=>{
    return price[1]
})

const priceincrease = dailyprice?.[31] - dailyprice?.[0]
const increasesize  = ((dailyprice?.[31] - dailyprice?.[0]) / dailyprice?.[0]) * 100






const CoinScreen = () => {
 const [coinprice, setcoinprice] = useState(dailyprice?.[31])
 
 const coinvolume = coin?.total_volumes?.[31]
 const volume = coinvolume?.[1]
 const coincaps = coin?.market_caps?.[31]
 const marketcap = coincaps?.[1]

 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

 const CoinscreenHeader = () => {
    return(
        <>
        <div className="px-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="w-10">
                <img src={token.image} alt="" />
              </div>
              <div className="mb-4">
                <h3 className={"text-2xl font-bold text-gray-800"}>
                  {token.coin}
                </h3>
                <p className="text-xl mt-1 font-extrabold">
                  {formatter.format(coinprice)}
                </p>
              </div>

              {/* <div>high volatility</div> */}
            </div>
            <div className="pb-10">
              <a className="text-3xl font-bold text-green-400 ">
                <PlusCircleOutlined />
              </a>
            </div>
          </div>
        </>
    )
 }

 const CoinScreenChart = () =>{
    return(
        <>
         <div>
            <LineChart
              entries={dailyprice}
              label={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ]}
            />
          </div>
        </>
    )
 }

 const CoinOverview = () => {
    return(
        <>
        
        <div className="px-4 space-y-10 pb-[120px]">
            <h3 className="text-2xl font-bold text-gray-800">Overview</h3>
            <div>
              <h3 className={styles.UiSubHeading}>About</h3>
              <div className="py-2">
                <p className={styles.paragraph}>
                  {token.about}
                </p>
                <div className="py-8 border-b border-b-gray-400">
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Symbol</span>
                      <span className="font-semibold text-gray-700">{token.symbol}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Coin price</span>
                      <span className="font-semibold text-gray-700">{formatter.format(coinprice)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">24h Volume</span>
                      <span className="font-semibold text-gray-700">{formatter.format(volume)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Market cap</span>
                      <span className="font-semibold text-gray-700">{formatter.format(marketcap)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
    )
 }

 const InvestmentButton = () => {
    return(
        <>
           <div className="fixed  flex py-4 justify-center items-end left-0 right-0  bg-gray-200/90  bottom-0">
            <button className="bg-green-300 text-gray-800 p-4 text-2xl tracking-wide font-bold rounded-3xl w-11/12">
              Invest
            </button>
          </div>
        </>
    )
 }

 
 
   console.log(coin) 

    if(!coin){
        return(
            <h1>...fetching</h1>
        )
    }
    return (
      <>
        <div className="pt-8 h-screen  relative space-y-8">
          <CoinscreenHeader/>
          <CoinScreenChart/>
          <CoinOverview/>
         <InvestmentButton/>
        </div>
      </>
    );
}

const AllCrypto = () =>{
    return(
        <>
        <div  className="pb-[80px] sm:flex justify-center">
        <ul className="flex gap-y-4 flex-col sm:grid grid-cols-2 grid-flow-row md:grid-cols-3 sm:gap-x-4 items-center  ">
                {coinlist.map((coin)=>{
                    return(
                        <>
                        <CoinCard func={()=> {
                            settoken(coin)
                            // navigate('coin')

                        }
                            
                            } description={coin.description} header={coin.coin} image={coin.image} buttontext='Explore'/>
                        </>
                    )
                })}
        </ul>
        </div>
         
        </>
    )
}

if(token){
    return (
        <>
        <CoinScreen/>
        </>
      )
}


    
  return(
    <>
     <div className="pt-10 flex  ">
        <div className="w-full mx-auto  ">
           <Routes>
            <Route path="/"  element={<AllCrypto/>}/>
            {/* <Route exact path="coin"  element={<CoinScreen/>}/> */}
           </Routes>
        </div>
     </div>
    </>
  )
}

export default CryptoinvestmentScreen




