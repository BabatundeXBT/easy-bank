//eslint-disable-next-line
function Button({children}) {
  return (
    <button className=" px-8 py-3 text-white rounded-full mt-0 mb-0 bg-gradient-to-r via-[#89d7eb] from-[#30d35c] to-[#2ab6d9] font-semibold md:hover:ring md:hover:ring-lime-600 md:hover:ring-offset-2">

        {children}
    </button>
   
  )
}

export default Button