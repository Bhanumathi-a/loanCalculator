import React, { useState } from "react"

const LoanLayout = () => {
  const [loanAmount, setLoanAmount] = useState(100000)
  const [loanInterest, setLoanInterest] = useState(5)
  const [loanTenure, setLoanTenure] = useState(12)

  const monthlyInterestRate = loanInterest / 12 / 100

  // P = (r * PV) / (1 - (1 + r)^(-n)) for monthly payment
  let monthlyPayment =
    (monthlyInterestRate * loanAmount) /
    (1 - Math.pow(1 + monthlyInterestRate, -loanTenure))
  monthlyPayment = Math.round(monthlyPayment)

  let totalInterest = monthlyPayment * loanTenure - loanAmount
  totalInterest = Math.round(totalInterest)

  let totalAmount = loanAmount + totalInterest

  // console.log(monthlyInterestRate, monthlyPayment)

  return (
    <>
      <div className='container p-12 m-auto w-2/3'>
        <h2 className='text-2xl text-center font-sans font-semibold text-blue-900'>
          Calculate Loan
        </h2>
        <div className='relative mb-8'>
          <label
            htmlFor='loanAmt'
            className='block text-xl font-sans leading-6 pb-5 '>
            Loan Amount
          </label>
          <input
            id='loanAmt'
            type='range'
            min='100000'
            max='10000000'
            step='10'
            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <span
            className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-4 `}
            style={{ left: 0 }}>
            {/* ${loanAmount / 100000} */}₹{loanAmount}
          </span>

          <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
            ₹100000
          </span>

          <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
            ₹ 10000000
          </span>
        </div>
        <div className='grid grid-cols-2 gap-5 mb-10'>
          <div className='relative mb-8 w-full inline-block'>
            <label
              className='block text-xl font-sans leading-6 pb-5 '
              htmlFor='interest'>
              Interest Rate (%)
            </label>
            <input
              type='range'
              id='interest'
              name='Interest'
              min='5'
              max='20'
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              value={loanInterest}
              onChange={(e) => setLoanInterest(e.target.value)}
            />
            <span
              className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-4 `}
              style={{ left: 0 }}>
              {loanInterest}
            </span>
            <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
              5%
            </span>

            <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
              20%
            </span>
          </div>
          <div className='relative mb-8 w-full inline-block'>
            <label
              className='block text-xl font-sans leading-6 pb-5 '
              htmlFor='tenure'>
              Tenure (In months)
            </label>
            <input
              type='range'
              id='tenure'
              name='Tenure'
              min='12'
              max='360'
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
            <span
              className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-4 `}
              style={{ left: 0 }}>
              {loanTenure}
            </span>
            <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
              12
            </span>

            <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
              360
            </span>
          </div>
        </div>
        <div id='result' className='grid grid-cols-2 gap-5 mb-2'>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Principal Amount
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6 '>
              ₹{loanAmount}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Monthly EMI Amount
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6 '>
              ₹{monthlyPayment}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Interest Payable
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6 '>
              ₹{totalInterest}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Total Amount Payable
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6 '>
              ₹{totalAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoanLayout
