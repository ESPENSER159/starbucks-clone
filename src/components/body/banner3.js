import { useState } from 'react'
import Product0 from '../../assets/products/product0.webp'
import Product1 from '../../assets/products/product1.webp'
import Product2 from '../../assets/products/product2.webp'
import Product3 from '../../assets/products/product3.webp'
import Product4 from '../../assets/products/product4.webp'

export default function Banner3() {
    const [imgProduct, setImgProduct] = useState(Product0)
    const [titleProduct, setTitleProduct] = useState('Customize your drink')
    const [txtProduct, setTxtProduct] = useState('Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.')

    function selectProduct(e) {
        // console.log(e.currentTarget.id)

        // ocult selected product
        for (let i = 0; i < 5; i++) {
            document.getElementById(`product${i}`).children[1].classList.add('hidden')
        }

        // show select product
        e.currentTarget.children[1].classList.remove('hidden')

        // change image product
        switch (e.currentTarget.id) {
            case 'product0':
                setImgProduct(Product0)
                setTitleProduct('Customize your drink')
                setTxtProduct('Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.')
                break;
            case 'product1':
                setImgProduct(Product1)
                setTitleProduct('Brewed hot or iced coffee or tea, bakery item, packaged snack and more')
                setTxtProduct('Treat yourself to an iced coffee, buttery croissant, bag of chips and more.')
                break;
            case 'product2':
                setImgProduct(Product2)
                setTitleProduct('Handcrafted drink (Cold Brew, lattes and more) or hot breakfast')
                setTxtProduct('Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.')
                break;
            case 'product3':
                setImgProduct(Product3)
                setTitleProduct('Sandwich, protein box or at-home coffee')
                setTxtProduct('Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.')
                break;
            case 'product4':
                setImgProduct(Product4)
                setTitleProduct('Select Starbucks® merchandise')
                setTxtProduct('Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.')
                break;
            default:
                break
        }
    }

    return (
        <div className="max-md:mb-16 mb-32 bg-backgroundBanner1">
            <div className="pt-12 mb-12">
                <div className="px-4">
                    <h2 className="pb-12 text-3xl font-semibold text-center">Get your favorite for free</h2>
                </div>
                <div>
                    <div className="flex justify-center w-full md:max-w-lg mx-auto">
                        <button id='product0' className="relative pt-2 pb-4 px-2 text-3xl font-semibold text-center w-full" onClick={selectProduct}>
                            <span className="text-2xl">
                                25
                                <span className="text-base text-gold">★</span>
                            </span>
                            <div className="bg-primaryFirst absolute bottom-0 h-1 left-0 w-full"></div>
                        </button>
                        <button id='product1' className="relative pt-2 pb-4 px-2 text-3xl font-semibold text-center w-full" onClick={selectProduct}>
                            <span className="text-2xl">
                                100
                                <span className="text-base text-gold">★</span>
                            </span>
                            <div className="bg-primaryFirst absolute bottom-0 h-1 left-0 w-full hidden"></div>
                        </button>
                        <button id='product2' className="relative pt-2 pb-4 px-2 text-3xl font-semibold text-center w-full" onClick={selectProduct}>
                            <span className="text-2xl">
                                200
                                <span className="text-base text-gold">★</span>
                            </span>
                            <div className="bg-primaryFirst absolute bottom-0 h-1 left-0 w-full hidden"></div>
                        </button>
                        <button id='product3' className="relative pt-2 pb-4 px-2 text-3xl font-semibold text-center w-full" onClick={selectProduct}>
                            <span className="text-2xl">
                                300
                                <span className="text-base text-gold">★</span>
                            </span>
                            <div className="bg-primaryFirst absolute bottom-0 h-1 left-0 w-full hidden"></div>
                        </button>
                        <button id='product4' className="relative pt-2 pb-4 px-2 text-3xl font-semibold text-center w-full" onClick={selectProduct}>
                            <span className="text-2xl">
                                400
                                <span className="text-base text-gold">★</span>
                            </span>
                            <div className="bg-primaryFirst absolute bottom-0 h-1 left-0 w-full hidden"></div>
                        </button>
                    </div>
                    <div className="listProducts bg-primarySecond md:flex justify-center items-center pb-12 md:py-8">

                        <div className="md:max-w-sm md:py-0 md:mr-12 py-8 grow">
                            <div className="relative">
                                <div className="w-full block" style={{ 'paddingBottom': '56.25%' }}></div>
                                <div className="absolute top-0 right-0 bottom-0 left-0">
                                    <img id='bannerProductImg' src={imgProduct} alt='product' />
                                </div>
                            </div>
                        </div>

                        <div id='bannerProductText' className='md:max-w-sm px-4 grow'>
                            <h3 className='text-center md:text-left text-lg md:text-2xl font-semibold pb-4'>
                                {titleProduct}
                            </h3>
                            <p className='text-center md:text-left'>
                                {txtProduct}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}