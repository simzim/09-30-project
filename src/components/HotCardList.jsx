import './HotCardList.css';
import PlantCard from "./PlantCard"

export default function HotCardList({allProducts, rating}){

    const filtredProducts = allProducts.filter(product => product.rating === rating)

    console.log(filtredProducts);

    return(
        <div className="hotCard-list">
           { filtredProducts.map((card) =>(
                <PlantCard
                    key={card.id}
                    plantid={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    price={card.price}
                    showDiscount={false}
                    discount={card.discount}
                />
            ))
            }
        </div>
    )
}