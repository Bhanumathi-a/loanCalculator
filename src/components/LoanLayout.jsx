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

  // let totalAmount = `${loanAmount}  ${totalInterest}`
  let totalAmount = parseInt(loanAmount) + parseInt(totalInterest)

  // console.log(monthlyInterestRate, monthlyPayment)

  return (
    <>
      <div className='container p-12 m-auto w-full lg:w-2/3'>
        <h2 className='text-2xl text-center font-sans font-semibold text-blue-900'>
          Calculate Loan
        </h2>
        <p className='block text-lg font-sans pt-4 pb-6'>
          Use our Loan Calculator to get insights on your loan plan! Just select
          an amount, set an approximate interest rate and loan tenure between 12
          and 360 months. The Loan EMI calculator will estimate the monthly EMI
          amount and total Interest payable till the end of the loan tenure.
        </p>
        <div className='relative mb-8'>
          <label
            htmlFor='loanAmt'
            className='block text-xl font-sans leading-6 pb-1 '>
            Loan Amount
          </label>
          <input
            id='loanAmt'
            type='text'
            // type='range'
            min='100000'
            max='10000000'
            step='10'
            className='w-full  bg-gray-200 rounded-lg  dark:bg-gray-700 accent-blue-900 h-12 p-2'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          {/* <span
            className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-5 `}
            style={{ left: 0 }}>
            ₹{loanAmount}
          </span>

          <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
            ₹100000
          </span>

          <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
            ₹ 10000000
          </span> */}
        </div>
        <div className='grid grid-cols-1 gap-5 mb-10 lg:grid-cols-2'>
          <div className='relative mb-8 w-full inline-block'>
            <label
              className='block text-xl font-sans leading-6 pb-7 '
              htmlFor='interest'>
              Interest Rate (%)
            </label>
            <input
              type='range'
              id='interest'
              name='Interest'
              min='5'
              max='20'
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-900'
              value={loanInterest}
              onChange={(e) => setLoanInterest(e.target.value)}
            />
            <span
              className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-5 `}
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
              className='block text-xl font-sans leading-6 pb-7 '
              htmlFor='tenure'>
              Tenure (In months)
            </label>
            <input
              type='range'
              id='tenure'
              name='Tenure'
              min='12'
              max='360'
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-900'
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
            <span
              className={`bg-blue-900 -mt-8 text-white truncate text-sm rounded py-1 px-4 absolute bottom-5 `}
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
        <div id='result' className='grid grid-cols-1 gap-5 mb-2 lg:grid-cols-2'>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Principal Amount
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6  text-blue-900'>
              ₹{loanAmount}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6'>
              Monthly EMI Amount
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6  text-blue-900'>
              ₹{monthlyPayment}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Interest Payable
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6  text-blue-900'>
              ₹{totalInterest}
            </p>
          </div>
          <div>
            <h3 className='block text-xl font-sans leading-6 '>
              Total Amount Payable
            </h3>
            <p className='block text-2xl font-semibold font-sans leading-6  text-blue-900'>
              ₹{totalAmount}
            </p>
          </div>
        </div>
        <p className='block text-sm font-sans text-gray-700 pt-4'>
          <strong>Disclaimer*</strong>: Our Loan EMI calculator offers estimated
          monthly instalments which are indicative and tentative and are based
          upon the details populated by the user. Actual loan terms and
          eligibility are subject to bank approval. For precise loan details,
          consult our representatives before decisions based on these estimates.
        </p>
      </div>
    </>
  )
}

export default LoanLayout
