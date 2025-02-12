import './PlantCard.css';
import Button from './Button';

export default function PlantCard({title, imageSrc, price, discount, showDiscount}){
    

    const discountedPrice = (price * (1 - discount / 100)).toFixed(2);

    return(
        <div className='plant-card'>
            <a className='plant-card-link'>
                <div className='img-box'>
                    {  showDiscount && discount > 0 &&(
                        <div className='discount-block'>
                            <div className='discount'>{discount} %</div>
                            <div className='discount'>off</div>
                        </div>
                    )}
                    <img className='plant-img' src={imageSrc} alt={title} />
                </div>
                <div className='card-text'>
                    <h3 className='plant-title'>{title}</h3>
                    {showDiscount && discount > 0 ? (
                        <>
                        <span className='discounted-price'>${discountedPrice}</span>
                        <span className='red-price'>${price}</span>
                        </>
                    ) : (
                        <div className='plant-price'>${price}</div>
                    )}
                </div>              
            </a>
            <Button className='green-btn'>Buy</Button>
        </div>
    )
}