import './SectionTestimonials.css';
import { useEffect, useState } from 'react';
import TestimonialsList from './TestimonialsList';

export default function SectionTestimonials(){
    
    const [testimonials, setTestimonials] = useState([]);
    
        useEffect(() => {
            const fetchAllTestimonials = async () => {
                try {
                    const response = await fetch('https://gist.githubusercontent.com/simzim/8baf7cc7f3cd739a5a17c151098e0898/raw/cbd3d74805690135f6ed538206264ac73c52d0ac/testimonials.json');
                    const data = await response.json();
                        console.log(data);
                    
                    const allTestimonialsWithImages = await Promise.all(data.map(async (testimonial) => {
                            let imagePath;
                            try{
                                imagePath = await import(`../img/clients/${testimonial.img}`);
                            }
                            catch(error){
                                imagePath = await import(`../img/clients/clear.jpg`);
                            }
                           
                            return {
                                ... testimonial,
                                imageSrc: imagePath.default,
                            };
                        }));
                        console.log(allTestimonialsWithImages);
                    setTestimonials(allTestimonialsWithImages);
                } catch (error){
                    console.error('Klaida gaunant visus atsiliepimus', error);
                }
            };
            fetchAllTestimonials();
        }, []);
    



    return (
        <div className="light-bg">
            <div className="wrapper testimonials-section">
                <h2 className='test-title'>Testimonials</h2>
                <p className='test-text'>Plant parents love us</p>
                <TestimonialsList testimonials={testimonials}/>
            </div>
        </div>

    );
}