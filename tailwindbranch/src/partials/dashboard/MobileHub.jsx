import { useState } from "react"



const MobileHub = () => {
const [expanded, setexpanded] = useState(false)

const UserCard = () => {
    return(
        <>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
        </>
    )
}

const Syndicatecard = () => {
    return(
        <>
        <a
  href="#"
  class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div class="absolute inset-0 bg-black/25"></div>

  <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div class="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

      <p class="text-sm">Italy</p>
    </div>

    <span
      class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</a>

        </>
    )
}

const ChemicalCard = () => {
    return(
        <>
        <a
  class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
  href="#"
>
  <div class="pt-4 text-gray-500">
    <svg
      class="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg>

    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      Science of Chemistry
    </h3>

    <p class="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>

  <span
    class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    4.3
  </span>
</a>

        </>
    )
}
  return (
    <>
    <div className="py-8">
    <UserCard/>
    <Syndicatecard/>
    <ChemicalCard/>
    </div>
    </>
  )
}

export default MobileHub