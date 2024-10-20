import React from 'react'

const SearchTabs = () => {
  return (
    <div className='mt-16 p-2'>
      <button className='bg-white text-gray-900 py-2 px-4 mx-2 rounded-md'>All</button>
        <Btntabs item={"Music"}/>
        <Btntabs item={"Tech"}/>
        <Btntabs item={"Harkirat Singh"}/>
        <Btntabs item={"Stark"}/>
        <Btntabs item={"start Ups"}/>
        <Btntabs item={"Web2"}/>
        <Btntabs item={"Artificial Intelligence"}/>
        <Btntabs item={"News"}/>
        <Btntabs item={"Tech"}/>
        <Btntabs item={"Harkirat Singh"}/>
        <Btntabs item={"Stark"}/>
        <Btntabs item={"Stark Ups"}/>
        <Btntabs item={"Web2"}/>
        <Btntabs item={"AI"}/>
    </div>
  )
}

function Btntabs({item}) {
    return (
        <button className='bg-[#242323] text-gray-50 py-1 px-3 mx-2 rounded-md'>{item}</button>
    )
}

export default SearchTabs
