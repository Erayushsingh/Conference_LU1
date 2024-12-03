import React from 'react'
import HeaderUpper from '../../Components/HeaderUpper'
import LowerHeader from '../../Components/LowerHeader'
import Footer from '../../Components/Footer'

const RegistrationFeesPayment = () => {
    return (
        <>
            <HeaderUpper />
            <LowerHeader />
            <div className="bg-white rounded-lg shadow-lg p-6 my-8 w-full sm:w-[80%] mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-black mb-6">Registration Fee</h2>

                <div className="overflow-x-auto"> {/* Makes table horizontally scrollable on smaller screens */}
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-indigo-600 text-white md:text-2xl">
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Category</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Paper Presentation (INR/USD)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Attendee (INR/USD)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">On-the-Spot Registration (INR/USD)</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700">
                            {/* Students Row */}
                            <tr className="odd:bg-gray-50 even:bg-gray-100">
                                <td className="px-4 py-4 font-semibold text-sm sm:text-base">Students (UG/PG/Research)</td>
                                <td className="px-4 py-4 text-sm sm:text-base">1000 INR / 100 USD</td>
                                <td className="px-4 py-4 text-sm sm:text-base">1000 INR / 100 USD</td>
                                <td className="px-4 py-4 text-sm sm:text-base">1500 INR / 110 USD</td>
                            </tr>

                            {/* Academician/Industry Row */}
                            <tr className="odd:bg-gray-50 even:bg-gray-100">
                                <td className="px-4 py-4 font-semibold text-sm sm:text-base">Academician/Industry</td>
                                <td className="px-4 py-4 text-sm sm:text-base">2000 INR / 150 USD</td>
                                <td className="px-4 py-4 text-sm sm:text-base">2000 INR / 150 USD</td>
                                <td className="px-4 py-4 text-sm sm:text-base">2500 INR / 160 USD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/*Payment Details*/}
            <div className="p-6 max-w-lg mx-auto bg-gray-50 border border-gray-300 rounded-lg shadow-lg md:mb-10 mb-6">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Payment Details</h3>
                <div className="space-y-2">
                    <p className="text-lg"><strong>UPI ID:</strong></p>
                    <p className="text-lg"><strong>Beneficiary Name:</strong> </p>
                    <p className="text-lg"><strong>Bank Name:</strong> UCO BANK</p>
                    <p className="text-lg"><strong>Account Number:</strong> </p>
                    <p className="text-lg"><strong>Branch:</strong> Lucknow University</p>
                    <p className="text-lg"><strong>IFSC Code:</strong> </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegistrationFeesPayment