import { Link, useLocation } from "react-router-dom";
import './SingleProductPage.css';
import Buttons from "../components/Button";

export default function SingleProductPage() {

  const location = useLocation()
  const plantData = location.state;

  console.log(plantData);

  return (
    <>
      <div className="light-bg">
          <div className="wrapper">
            <div className="plant-header">
                <h2 className="">
                  <span className="product-title">Plant</span>
                  <span className="plant-title">{plantData.title}</span>
                </h2>
            </div>
          </div>
      </div>
      <div className="plant-content wrapper">
        <div className="plant-image-block">
          <img className="plant-image" src={plantData.imageSrc} alt={plantData.title} />
          <img className="plant-image" src={plantData.imageSrc} alt={plantData.title} />
          <img className="plant-image" src={plantData.imageSrc} alt={plantData.title} />
          <img className="plant-image" src={plantData.imageSrc} alt={plantData.title} />
        </div>
        <div className="plant-data-block">
            <h3>{plantData.title}</h3>
            <h4>$ {plantData.price}</h4>
            <Buttons className="green-btn">add to Chart</Buttons>
        </div>
      </div>
      <div className="light-bg">
        <div className="wrapper">
            <div className="plant-instruction">
                <Link to="../../public/files/test-file.pdf" target="_blank" download="test-file.pdf" >Download file</Link>
            </div>
        </div>
      </div>

    </>
  )
}
