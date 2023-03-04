import React from 'react'

const Tabs = ({tab1, tab2 , setactive}) => {
  return (
          <>
            <div className="flex py-8 px-4 ">
              <div className="flex  w-full ">
                <div
                  onClick={setactive}
                  className={
                    !tab1
                      ? `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center`
                      : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-xl font-semibold text-center">Startups</a>
                </div>
                <div
                  onClick={setactive}
                  className={
                    !tab2
                      ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center`
                      : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-xl font-semibold text-center">Investors</a>
                </div>
              </div>
            </div>
          </>
  )
}

export default Tabs