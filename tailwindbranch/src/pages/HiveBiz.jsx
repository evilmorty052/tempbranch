import React,{Children, useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Miniheader from '../components/Miniheader'
import hemp from '../assets/hemplogo.png'
import useFetch from '../hooks/useFetch'
import { urlFor } from '../../lib/client'
import Loader from '../components/Loader'
import { filter , setSearchTerm} from '../Redux/slices/hivebizSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'



const HiveBiz = () => {
const [investing, setinvesting] = useState(false)
const [filterKeyWord, setfilterKeyWord] = useState('All')

const dispatch = useDispatch()
const keyword = useSelector((state)=> state.hivebizSlice.filteredKeyWord)
const searchTerm = useSelector((state)=> state.hivebizSlice.searchTerm)

const history = useNavigate()

const tags = [
    {
     word: 'All',
     id: 1
    },
    {
     word: 'Technology',
     id: 2
    },
    {
     word: 'Finance',
     id: 3
    },
    {
     word: 'Other',
     id: 4
    },
]

const data = [
    {
    id: 1,
    image: 'https://photos.angel.co/startups/i/787839-a0060176723678d2d230d746359aae4b-thumb_jpg.jpg?buster=1589578315'
    },
    {
    id: 2,
    image: hemp
    },
    {
    id: 3,
    image: hemp
    },
    {id: 4,
    image: hemp
    },
    {id: 5,
    image: hemp
    },
    {
    id: 6,
    image: hemp
    },
    {
    id: 7,
    image: hemp
    },
    {
    id: 8,
    image: hemp
    },
    {id: 9,
    image: hemp
    },
    {id: 10,
    image: hemp
    },
    {
    id: 11,
    image: hemp
    },
    {
    id: 12,
    image: hemp
    },
    {
    id: 13,
    image: hemp
    },
    {id: 14,
    image: hemp
    },
    {id: 15,
    image: hemp
    },
    {
    id: 16,
    image: hemp
    },
    {
    id: 17,
    image: hemp
    },
    {
    id: 18,
    image: hemp
    },
    {id: 19,
    image: hemp
    },
    {id: 20,
    image: hemp
    },
   

]

function handleShowInvestPage(params) {
  investing ?  setinvesting(false) : setinvesting(true)
}

let query = `*[_type == "store"]`
const hiveData = useFetch(query, 'tester')

const hives = hiveData?.filter((item)=>{
    
    // if(keyword == 'All') return
    
    if(searchTerm){
        return(
            item.name.toLowerCase() == searchTerm.toLowerCase()
           )
    } 

   return(
    item.category.toLowerCase() == keyword.toLowerCase()
   )
})

function handleFilter() {
    
}

// console.log(hives)

// if(!hiveData){

//     return <Loader/>
// }

if(investing){
    return(
        <HiveInvest back={handleShowInvestPage}/>
    )
}

  return (
    <>
    <Miniheader back={()=> history('/hive')}/>
    <div  className='pt-[60px] px-1'>
    <Page handleFilter={handleFilter} tags={tags} func={handleShowInvestPage} data={keyword == 'All' || !searchTerm ? hiveData : hives}/>
    </div>
    </>
  )
}


function BizCard({image, startup, description, seats, roi, website ,func}) {
  return(
    <>
    <div to={'/'}>
    <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={image}
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">{startup}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a target="_blank" href={`${website}`} class="text-sm font-medium text-gray-300">Visit Website </a>
          </li>
          {/* <li class="p-1 leading-none">
            <a href='' class="text-sm font-medium text-gray-300">View More </a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li className=' h-[120px]'>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Description:</strong>

        <p class="mt-1 leading-tight text-[14px] font-medium text-gray-300">
        {description}
        </p>
      </a>
    </li>

    <li className=' h-[80px]'>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
      >
        <strong class="font-medium text-white">ROI:</strong>

        <p class="text-[24px] font-medium text-gray-300">
         <span class="text-[24px] mr-1 font-medium text-gray-300">{roi}</span>%
        </p>
      </a>
    </li>
    <li className=' h-[80px]'>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
      >
        <strong class="font-medium text-white">Seats:</strong>

        <p class="text-[24px] font-medium text-gray-300">
         {seats}
        </p>
      </a>
    </li>
    <li className=''>
        <div>
        <button onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Invest'}
            </button>
        </div>
    </li>
  </ul>
</article>

    </div>
    </>
  )
}



function Page ({ data, func, tags, handleFilter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    <div className='mb-8 px-2 '>
    <h3 className='text-[38px] font-semibold text-gray-800 sm:text-center'>Build your investment portfolio.</h3>
    <div className='flex sm:justify-center'>
    <div className='py-4 flex gap-x-4  overflow-scroll'>
        <Tags handleFilter={handleFilter} data={tags}/>
     </div>
    </div> 
     <div className='pt-4 w-full sm:flex  sm:justify-center'>
        <input onChange={(e)=> dispatch(setSearchTerm(e.target.value))} placeholder='search companies' type={'search'} className='border-red-300 border rounded-2xl w-[280px]  sm:w-6/12 py-2 relative'/>
        {/* <p className='absolute inset-0'>1</p> */}
     </div>
     <div>
        {/* {pagination} */}
       
     {/* <div className='flex justify-center py-4 '>
        <ul className='bg-red-200 w-8/12 flex justify-between '>
            <li>1</li>
            <li>2</li>
        </ul>
     </div> */}
   </div>
    </div>
    <div className="lg:gap-y-[48px] gap-y-8 pb-20 grid grid-cols-1 sm:grid sm:grid-cols-2 gap-x-4 items-center px-1  lg:container lg:mx-auto lg:max-w-4xl lg:gap-x-10">
    <div className='flex justify-between py-2'>
        {/* Render your pagination UI here */}
        <button className={currentPage === 1 ? 'py-2 px-1 bg-gray-100 cursor-not-allowed' : 'py-2 px-1 bg-blue-200' } onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}><FaAngleLeft/></button>
        <button className='py-2 px-1 bg-blue-200' onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= data?.length}><FaAngleRight/></button>
      </div>
      {currentItems?.map((item) => (
        <div key={item.id} >
          {/* Render your item here */}
          <BizCard 
          image={urlFor(item.image)} 
          startup={item.name}
          website={item.website}
          description={item.description}
          roi={item.roi}
          seats={item.seats}
          func={func} />
        </div>
      ))}

      <div className='flex justify-between'>
        {/* Render your pagination UI here */}
        <button className='py-2 px-4 bg-blue-200' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <button className='py-2 px-4 bg-blue-200' onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= data?.length}>Next</button>
      </div>
    </div>
    </>
  );
};

function HiveInvest({back}) {
    return(
        <>
        <Miniheader back={back}/>
        <div className="py-20">
            you are here
        </div>
        </>
    )
}


function Tags({word, data, handleFilter}) {
const tagref = useRef
const [activetag, setactivetag] = useState(1)
const [active, setactive] = useState('All')


const initial = useSelector((state)=> state.hivebizSlice.filteredKeyWord)
const dispatch = useDispatch()


function handleClick(item) {
  setactivetag(item.id)
  if(activetag === item.id){
    setactive(true)
  }
  dispatch(filter(item.word))
// const keyword = useSelector((state)=> state.hivebizSlice.filteredKeyWord)



  
  
}
    
return(
        <>
         {data?.map((item)=>(
            <>
             <a >
                <div className={ activetag != item.id ? `bg-gray-400 w-[110px]  py-1 px-2 text-center rounded-xl ` : `bg-green-300 w-[110px]  py-1 px-2 text-center rounded-xl`}>
                <span  onClick={()=>handleClick(item)} className='text-base font-medium'>{item?.word}</span> 
                </div>                
            </a>
            </>
         ))}
        </>
    )
}

export default HiveBiz