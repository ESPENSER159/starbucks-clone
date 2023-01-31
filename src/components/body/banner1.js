import ImgHero from '../../assets/hero.webp'
import ImgHeroMobile from '../../assets/hero-mobile.webp'

export default function Banner1() {

    const bkImgHero = {
        backgroundImage: `url(${ImgHero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: '50% center',
        margin: '0',
        padding: '0',
    };

    const bkImgHero_mobile = {
        backgroundImage: `url(${ImgHeroMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <>
            <div className='max-md:mb-16 mb-32 max-md:hidden'>
                <div className="flex bgImgHero bg-primarySecond mb-32" style={bkImgHero}>
                    <div style={{ paddingBottom: '56.25%' }}></div>
                    <div className='flex justify-start items-center'>
                        <div className='px-6 py-8'>
                            <h2 className='font-semibold text-4xl'>FREE COFFEE <br />IS A TAP AWAY</h2>
                            <div className='text-lg pt-4 font-semibold'>
                                <p>
                                    <span>Join now to start earning Rewards</span>
                                </p>
                            </div>
                            <div className='text-lg pt-8 font-semibold'>
                                <button className='border border-primaryFirst font-semibold rounded-full px-4 py-1 text-base bg-primaryFirst text-white hover:bg-hoverButtonDark'>Join now</button>
                                <div className='mt-4'>
                                    <span>Or join in the app for the best experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <div className="flex bgImgHero bg-primarySecond mb-16" style={bkImgHero_mobile}>
                    <div style={{ paddingBottom: '128.333%' }}></div>
                    <div className='text-center w-full'>
                        <div className='px-6 py-8'>
                            <h2 className='font-semibold text-2xl'>FREE COFFEE <br />IS A TAP AWAY</h2>
                            <div className='pt-4 font-semibold'>
                                <p>
                                    <span>Join now to start earning Rewards</span>
                                </p>
                            </div>
                            <div className='underline pt-8 font-semibold'>
                                <button className='border border-primaryFirst font-semibold rounded-full px-4 py-1 text-base bg-primaryFirst text-white hover:bg-hoverButtonDark'>Join in the app</button>
                                <div className='mt-4'>
                                    <span>Or join online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}