import Nav from "./nav"

export default function Header() {
    return (
        <div className="w-screen">
            <Nav />
            <div className="h-12 bg-primaryText text-white sticky font-bold pl-32 max-md:px-4 pr-10 flex items-center justify-between">
                <h1>STARBUCKS REWARDS</h1>
                <button className='text-sm border border-white font-semibold rounded-full px-4 py-2 font-mono hover:bg-primaryText hidden max-md:block'>Join in the app</button>
            </div>
        </div>
    )
}