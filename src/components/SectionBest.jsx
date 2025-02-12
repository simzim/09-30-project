import Title from "./Title";
import './SectionBest.css';
import BestCardList from "./BestCardList";

export default function SectionBest(){
    return (

        <div className="wrapper best-section">
            <Title text1 = 'Best' text2 = 'Selling' showLink={true}/>
            <BestCardList/>
        </div>

    );
}