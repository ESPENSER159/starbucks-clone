import Number1 from '../../assets/numbers/1.webp'
import Number2 from '../../assets/numbers/2.webp'
import Number3 from '../../assets/numbers/3.webp'

export default function Banner2() {
    return (
        <div className="max-md:mb-16 mb-32">
            <div className="max-md:px-2 px-6">
                <div>
                    <div className="w-6/12 mx-auto">
                        <h2 className="text-3xl font-semibold text-center">Getting started is easy</h2>
                        <p className="text-center pt-4">Earn Stars and get rewarded in a few easy steps.</p>
                    </div>
                    <div className="pt-12 flex flex-col md:flex-row md:mx-14 text-center">
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8 max-md:mr-0 mr-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0 shrink-0'>
                                <img className='w-12' src={Number1} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Create an account</h3>
                                <p className='pt-4 max-md:text-left'>
                                    To get started, <span className='underline text-primaryFirst'>join now</span>. You can also <span className='underline text-primaryFirst'>join in the app</span> to get access to the full range of Starbucks Rewards benefits.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8  max-md:mx-0 mx-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0'>
                                <img className='w-12' src={Number2} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Order and pay how you’d like</h3>
                                <p className='pt-4 max-md:text-left'>
                                    Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <span className='underline text-primaryFirst'>Learn how</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col max-md:flex-row max-md:pb-8  max-md:ml-0 ml-6">
                            <div className='md:mx-auto my-0 md:pb-6 pr-4 shrink-0'>
                                <img className='w-12' src={Number3} alt="number1"></img>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold max-md:text-left'>Earn Stars, get Rewards</h3>
                                <p className='pt-4 max-md:text-left'>
                                    As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}