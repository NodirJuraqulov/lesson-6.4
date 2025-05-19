import React from 'react'

const Card = () => (
    <div className="w-full max-w-md mx-auto my-16 bg-white rounded-2xl shadow-2xl p-8 space-y-6 min-h-[480px]">
      {/* Rasm uchun joy */}
      <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 shadow-inner mt-2 flex items-center justify-center">
        <p className='text-[45px] font-bold text-gray-800'>NJ</p>
      </div>

      {/* Foydalanuvchi ma’lumotlari */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">Nodir Juraqulov</h2>
        <p className="text-lg text-gray-600 font-medium">ID: 987654</p>
        <p className="text-lg text-gray-600">Email: nodir@example.com</p>
        <p className="text-lg text-gray-600">Phone: +998 90 123 45 67</p>
        <p className="text-lg text-gray-600">Gender: Male</p>
      </div>

      {/* Social links */}
      <div className="flex justify-center space-x-6 pt-4">
        <a
          href="https://linkedin.com/in/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-lg font-medium underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black text-lg font-medium underline"
        >
          GitHub
        </a>
      </div>
    </div>
)

export default React.memo(Card)