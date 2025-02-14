import Title from "./Title";
import './SectionDeals.css';
import DealsCardList from "./DealsCardList";


export default function SectionDeals({allProducts}){
    return (
            <div className="wrapper deals-section">
                <Title text1 = 'Ferntastic' text2 = 'Deals' showLink={false}/>
                <DealsCardList allProducts={allProducts}/>
            </div>
    );
}