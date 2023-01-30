import ImgHero from '../../assets/hero.webp'

export default function Banner1() {

    const bkImgHero = {
        backgroundImage: `url(${ImgHero})`,
        // height: '75vh',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundSize: 'auto 100%',
        backgroundPosition: '50% center',
        margin: '0',
        padding: '0',
    };

    return (
        <div className='max-md:mb-16 mb-32'>
            <div className="flex bgImgHero bg-primarySecond mb-32" style={bkImgHero}>
                <div style={{paddingBottom: '56.25%'}}></div>
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
    )
}