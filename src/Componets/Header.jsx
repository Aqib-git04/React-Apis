

function Header() {

    return (
        <>
            <div className="flex justify-around items-center bg-[#F1F2F2]">
                <div >
                    <img src="https://clipground.com/images/food-company-logo.png" alt="" width={"200px"} className="cursor-pointer" />
                </div>

                <div className="">
                    <ul className="flex gap-11">
                        <li className="cursor-pointer hover:underline hover:border-gray-400">HOME</li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">ABOUT</li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">CONTACT US</li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">SERVICES</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
