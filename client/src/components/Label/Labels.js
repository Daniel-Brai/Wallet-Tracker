import React from 'react'

const tracks = [
    {
        type: 'Savings',
        color: '#F9C74F',
        percent: 45
    },
    {
        type: 'Investment',
        color: '#F9C74F',
        percent: 45
    },
    {
        type: 'Expenses',
        color: 'rgb(54, 162, 235)',
        percent: 45
    },
    {
        type: 'Others',
        color: 'rgb(54, 162, 235)',
        percent: 45
    }
]

const Label = ({ data }) => {
    if (!data) return;
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div style={{ backgroundColor: data.color ?? '#F9C74F' }} className="w-2 h-2 rounded py-3"></div>
                <h3 className="text-md">{data.type ?? ""}</h3>
            </div>
            <h3 className="font-bold">{data.percent ?? 0}%</h3>
        </div>
    )
}

const Labels = () => {
    return (
        <>
            {
                tracks.map((track, index) => <Label key={index} data={track}></Label>)
            }
        </>
    )
}


export default Labels