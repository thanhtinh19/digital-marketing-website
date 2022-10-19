import "../Style/OurBlog/LayoutOurBlog.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function LayoutOurBlog() {
    const info = [
        {
            img: "../../img/image/Blog/blog1.png",
            date: "19 Feb, 2022/ By Admin",
            title: "UI/UX design Tips",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog2.png",
            date: "09 Apr, 2022/ By Admin",
            title: "Improve your UX/UI",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog3.png",
            date: "25 Jon, 2022/ By Admin",
            title: "Meta Technology.",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog4.png",
            date: "13 Nov, 2022/ By Admin",
            title: "PageTraffic Ranks",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog1.png",
            date: "19 Feb, 2022/ By Admin",
            title: "UI/UX design Tips",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog2.png",
            date: "09 Apr, 2022/ By Admin",
            title: "Improve your UX/UI",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog3.png",
            date: "25 Jon, 2022/ By Admin",
            title: "Meta Technology.",
            content: "Promotion World has once placed PageTraffic among the top."
        },
        {
            img: "../../img/image/Blog/blog4.png",
            date: "13 Nov, 2022/ By Admin",
            title: "PageTraffic Ranks",
            content: "Promotion World has once placed PageTraffic among the top."
        },

    ]
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        speed: 1500,
        cssEase: "linear",
        arrows:false,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div className="blog" id="blog">
            <h1>See Our Blog Post</h1>
            <div className="blog-slide">
                <div className="arrow">
                    <div className="img1" onClick={prev}><img src="../../img/icon/left.png" /></div>
                    <div className="img2" onClick={next}><img src="../../img/icon/right.png" /></div>
                </div>
                <Slider {...setting} ref={ref}>
                    {info.map(item => {
                        return (
                            <div className="slide-item">
                                <img src={item.img} />
                                <div className="slide-item-text">
                                    <p>{item.date}</p>
                                    <h2>{item.title}</h2>
                                    <div className="content">{item.content}</div>
                                    <div className="btn-readmore">
                                        Read more
                                        <ArrowForwardIcon />
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

export default LayoutOurBlog;