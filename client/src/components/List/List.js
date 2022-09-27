import React from 'react'
import 'boxicons'
import { default as api } from '../../store/apiSlice'

const Transaction = ({ category, handler }) => {
    if(!category) return null;
    return (
        <div style={{borderRight: `8px solid ${category.color ?? "#E5E5E5"}`}} className="item flex justify-center bg-gray-50 py-2 rounded-r">
            <button className="px-3" onClick={handler}>
                <box-icon data-id={category._id ?? ""} type="solid" name="trash" color={category.color ?? "#F0F0"}></box-icon>
            </button>
            <span className="block w-full">{category.name ?? ""}</span>
        </div>
    )
}

const List = () => {
    let transactions;
    const { data, isSuccess, isFetching, isError } = api.useGetLabelsQuery()
    const [ deleteTransaction ] = api.useDeleteTransactionMutation()

    const handleClick = (e) => {
        if (!e.target.dataset.id) return 0;
        deleteTransaction({ _id: e.target.dataset.id })
    }

    if (isFetching) {
        transactions = <div>Fetching...</div>
    } else if (isSuccess) {
        transactions = data.map((track, index) => <Transaction key={index} category={track} handler={handleClick}></Transaction>)
    } else if (isError) {
        transactions = <div>😔 Oops! Something went wrong</div>
    }

  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 font-bold text-xl">History</h1>
        { transactions }
    </div>
  )
}

export default List