import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Labels from '../Label/Labels'
import { default as api } from '../../store/apiSlice'
import { getChartData, getTotalAmount } from '../../helpers/helper'

Chart.register(ArcElement)

const Graph = () => {
    let chartData;
    const { data, isSuccess, isFetching, isError } = api.useGetLabelsQuery()

    if (isFetching) {
        chartData = <div>Fetching...</div>
    } else if (isSuccess) {
        let values = getChartData(data)
        chartData = <Doughnut {...values}></Doughnut>
    } else if (isError) {
        chartData = <p style="margin-top: 18px; margin-bottom: 18px">😔 Oops! Something went wrong</p>
    }

    return (
        <div className="flex justify-content max-w-xs mx-auto">
            <div className="item">
                <div className="chart relative">
                    { chartData }
                    <h3 className="mb-4 font-bold title">
                        Total
                        <span className="block text-3xl text-emerald-400">₦{getTotalAmount(data) ?? 0}</span>
                    </h3>
                </div>
                <div className="flex flex-col py-10 gap-4">
                    <Labels />
                </div>
            </div>
        </div>
    )
}

export default Graph
