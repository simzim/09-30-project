import './TestimonialsList.css';
import TestimonialsCard from './TestimonialsCard';

export default function TestimonialsList({testimonials}){

    return(
        <div className="testimonials-list">
           { testimonials.map((card) =>(
                <TestimonialsCard
                    key={card.id}
                    imageSrc={card.imageSrc}
                    name={card.name}
                    text={card.text}
                    rating={card.rating}
                />
            ))
            }
        </div>
    )
}