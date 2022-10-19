import "../Style/OurClient/LayoutOurClient.scss"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
function LayoutOurClient() {

    const info = [
        {
            img: "../../img/image/ourClient/person1.png",
            name: "Jenny Wilson",
            start: 4.7
        },
        {
            img: "../../img/image/ourClient/person2.png",
            name: "Jane Cooper",
            start: 5.0
        },
        {
            img: "../../img/image/ourClient/person3.png",
            name: "Cody Fisher",
            start: 4.9
        },
        {
            img: "../../img/image/ourClient/person4.png",
            name: "Darrell Steward",
            start: 5.0
        },
        {
            img: "../../img/image/ourClient/person1.png",
            name: "Jenny Wilson",
            start: 4.7
        },
        {
            img: "../../img/image/ourClient/person2.png",
            name: "Jane Cooper",
            start: 5.0
        },
        {
            img: "../../img/image/ourClient/person3.png",
            name: "Cody Fisher",
            start: 4.9
        },
        {
            img: "../../img/image/ourClient/person4.png",
            name: "Darrell Steward",
            start: 5.0
        },
    ]

    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        speed: 1500,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const ref = useRef({})
    const next = () => {
        ref.current.slickNext()
    }
    const prev = () => {
        ref.current.slickPrev()
    }

    return (
        <div className="our-client" id="client">
            <div className="our-client-text">
                <h3>CASE STUDY</h3>
                <h1>OUR CLIENT GETS RESULTS</h1>
                <p>PageTraffic offers top-notch SEO and digital marketing solutions.</p>
            </div>
            <div className="our-client-slide">
                <div className="arrow">
                    <div className="img1" onClick={prev}><img src="../../img/icon/left.png" /></div>
                    <div className="img2" onClick={next}><img src="../../img/icon/right.png" /></div>
                </div>
                <Slider {...setting} ref={ref}>
                    {info.map(item => {
                        return (
                            <div className="slide-item">
                                <img src={item.img} />
                                <div className="bg-gradient">
                                    <p>{item.name}</p>
                                    <div className="star">
                                        <img src="../../img/icon/start.png" />
                                        <p>{item.start}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default LayoutOurClient;
