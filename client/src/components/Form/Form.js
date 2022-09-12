import React from 'react'
import { useForm } from 'react-hook-form'
import List from '../List/List'

const Form = () => {
    const { register, handleSubmit, resetField } = useForm()

    const onSubmit = (data) => { 
        console.log(data)
    }

    return (
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="font-bold pb-4 text-xl">Transactions</h1>

            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type="text" {...register('name')} className="form-input" placeholder="Food, Transport, Rent, Others..." />
                    </div>
                    <select className="form-input" {...register('type')}>
                        <option value="Savings" defaultValue>Savings</option>
                        <option value="Investment">Investment</option>
                        <option value="Expenses">Expenses</option>
                        <option value="Others">Others</option>
                    </select>
                    <div className="input-group">
                        <input type="number" {...register('amount')} className="form-input" placeholder="Amount" />
                    </div>
                    <div className="sunmit-btn">
                        <button type="submit" className="border py-2 text-white bg-indigo-500 w-full focus:outline-none focus:ring-2">Submit</button>
                    </div>
                </div>
            </form>

            <List />
        </div>
    )
}

export default Form