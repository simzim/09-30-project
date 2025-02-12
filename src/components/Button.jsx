import './Button.css';

export default function Buttons({ className = '', children='shop', href='#', ...props }){
    return(
        <a  
            className={`button ${className}`} 
            href={href}
            target="_blank"
        >
            {children}
        </a>
    );

}