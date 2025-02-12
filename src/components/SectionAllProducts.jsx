import { useEffect, useState } from 'react';
import SectionHot from './SectionHot';



export default function SectionAllProducts(){

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/simzim/f6ce627e8265fc219ce5c3eb72144942/raw/94298c766cc28bedd1878f136317980307761310/plants.json');
                const data = await response.json();
                    console.log(data);
                
                const allProductsWithImages = await Promise.all(data.map(async (product) => {
                        let imagePath;
                        try{
                            imagePath = await import(`../img/plants/${product.fileName}`);
                        }
                        catch(error){
                            imagePath = await import(`../img/plants/empty.svg`);
                        }
                       
                        return {
                            ... product,
                            imageSrc: imagePath.default,
                        };
                    }));
                    console.log(allProductsWithImages);
                setAllProducts(allProductsWithImages);
            } catch (error){
                console.error('Klaida gaunant visas prekes', error);
            }
        };
        fetchAllProducts();
    }, []);


    return(
        <>
            <SectionHot allProducts = {allProducts}/>
        </>
    )
}