import Number1 from '../../assets/banner4/1-fun-freebies.webp'
import Number2 from '../../assets/banner4/2-order-and-pay-ahead.webp'
import Number3 from '../../assets/banner4/3-get-to-free-faster.webp'

export default function Banner4() {
    return (
        <div className="max-md:mb-16 mb-32">
            <div className="max-md:px-2 px-6">
                <div>
                    <div className="w-6/12 mx-auto">
                        <h2 className="text-3xl font-semibold text-center">Endless Extras</h2>
                        <p className="text-center pt-4">Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                    </div>
                    <div className="pt-12 flex flex-col md:flex-row md:mx-14 text-center">
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8 max-md:mr-0 mr-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0'>
                                <img className='w-28' src={Number1} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Fun freebies</h3>
                                <p className='pt-4 max-md:text-left'>
                                    Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
                                </p>
                                <p className='pt-4 max-md:text-left'>
                                    <span className='underline text-primaryFirst'>Learn morea</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8  max-md:mx-0 mx-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0'>
                                <img className='w-28' src={Number2} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Order & pay ahead</h3>
                                <p className='pt-4 max-md:text-left'>
                                    Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
                                </p>
                                <p className='pt-4 max-md:text-left'>
                                    <span className='underline text-primaryFirst'>Learn morea</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8  max-md:ml-0 ml-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0'>
                                <img className='w-28' src={Number3} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Get to free faster</h3>
                                <p className='pt-4 max-md:text-left'>
                                    Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                                </p>
                                <p className='pt-4 max-md:text-left'>
                                    <span className='underline text-primaryFirst'>Learn morea</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}