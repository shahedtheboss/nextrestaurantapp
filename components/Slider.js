import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

function Slider(){
    return(
        <div className="sl">
            <Carousel className="car">
                <div>
                    <img
                        className="slimg"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=" alt=""/>
                </div>
                <div>
                    <img
                        className="slimg"
                        src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=" alt=""/>
                </div>
                <div>
                    <img
                        className="slimg"
                        src="https://media.istockphoto.com/photos/tasty-blueberry-smoothie-in-glass-picture-id1156323059?k=20&m=1156323059&s=612x612&w=0&h=UPHepH5TGisRMqXsuWXeagW2esJ5jnY13S6eo3aaEnk=" alt=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider