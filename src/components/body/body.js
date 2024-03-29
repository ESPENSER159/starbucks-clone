import Banner1 from "./banner1"
import Banner2 from "./banner2"
import Banner3 from "./banner3"

export default function Body() {
    return (
        <div>
            <div className="h-12 bg-primaryText text-white sticky font-bold pl-32 max-md:px-4 pr-10 flex items-center justify-between top-0">
                <h1>STARBUCKS REWARDS</h1>
                <button className='text-sm border border-white font-semibold rounded-full px-3 py-1 font-mono hover:bg-primaryText hidden max-md:block'>Join in the app</button>
            </div>
            <Banner1 />
            <Banner2 />
            <Banner3 />
        </div>
    )
}