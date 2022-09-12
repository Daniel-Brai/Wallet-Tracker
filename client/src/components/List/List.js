import React from 'react'
import boxicon from 'boxicons'

const tracks = [
    {
        type: 'Savings',
        color: '#F9C74F',
    },
    {
        type: 'Investment',
        color: '#F9C74F',
    },
    {
        type: 'Expenses',
        color: 'rgb(54, 162, 235)',
    },
    {
        type: 'Others',
        color: 'rgb(54, 162, 235)',
    }
]

const Transaction = ({ category }) => { 
    if(!category) return null;
    return (
        <div style={{borderRight: `8px solid ${category.color ?? "#E5E5E5"}`}} className="item flex justify-center bg-gray-50 py-2 rounded-r">
            <button className="px-3">
                <box-icon color={category.color ?? "#E5E5E5"} name="trash"></box-icon>
            </button>
            <span className="block w-full">{category.type ?? ""}</span>
        </div>
    )
}

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 font-bold text-xl">History</h1>
        { tracks.map((track, index) => <Transaction key={index} category={track}></Transaction>)}
        
    </div>
  )
}

export default List