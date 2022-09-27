import React from 'react'
import { default as api } from '../../store/apiSlice'
import { getLabels } from '../../helpers/helper'

const Label = ({ data }) => {
    if (!data) return;
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div style={{ backgroundColor: data.color ?? '#F9C74F' }} className="w-2 h-2 rounded py-3"></div>
                <h3 className="text-md">{data.type ?? ""}</h3>
            </div>
            <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}

const Labels = () => {
    let transactions;
    const { data, isSuccess, isFetching, isError } = api.useGetLabelsQuery()

    if (isFetching) {
        transactions = <div>Fetching...</div>
    } else if (isSuccess) {
        transactions = getLabels(data, 'type').map((track, index) => <Label key={index} data={track}></Label>)
    } else if (isError) {
        transactions = <div>😔 Oops! Something went wrong</div>
    }

    return (
        <>
            {
                transactions
            }
        </>
    )
}


export default Labels