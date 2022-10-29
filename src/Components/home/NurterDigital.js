import { React, useState } from "react"
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Carousel from 'react-bootstrap/Carousel';

function NurterDigital() {
    let publicPath = "https://reservation.cuengine.com/cubedots_new/";

    const [projectDetail, setProjectDetail] = useState(
        [
            {
                "id": 1,
                "video_url": "/assets/videos/1.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Tema Istanbul 2",
                "min_price": "200,000",
                "max_price": "300,000"
            },
            {
                "id": 2,
                "video_url": "/assets/videos/2.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Torino Oro24",
                "min_price": "657,000",
                "max_price": "421,000"
            },
            {
                "id": 3,
                "video_url": "/assets/videos/3.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Skyland Istanbul",
                "min_price": "785,000",
                "max_price": "589,000"
            },
            {
                "id": 4,
                "video_url": "/assets/videos/4.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Alya 4 Mevsim",
                "min_price": "58,000",
                "max_price": "965,000"
            },
            {
                "id": 5,
                "video_url": "/assets/videos/5.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Nisantası Koru",
                "min_price": "130,000",
                "max_price": "236,000"
            },
            {
                "id": 6,
                "video_url": "/assets/videos/222.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Avrupa Konutlari Yamanevler",
                "min_price": "235,000",
                "max_price": "345,000"
            }
        ]
    )

    return (
        <>
            <section className="nurterDigitalSection">
                <div className="nurterBackgroundVideo">
                    <Carousel indicators={false}>
                        <Carousel.Item className="firstSlide">
                            <Video className="videoPlayer" preload playsInline autoPlay playButton={false}
                                loop muted controls={false} src={publicPath + projectDetail[0].video_url} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="secondSlide">
                            <Video className="videoPlayer" preload playsInline autoPlay playButton={false}
                                loop muted controls={false} src={publicPath + projectDetail[1].video_url} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="thirdSlide">
                            <Video className="videoPlayer" preload playsInline autoPlay playButton={false}
                                loop muted controls={false} src={publicPath + projectDetail[2].video_url} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* <Video className="videoPlayer" preload playsInline autoPlay playButton={false}
                        loop muted controls={false} src={publicPath + projectDetail[0].video_url} /> */}
                </div>
            </section>
        </>
    )
}
export default NurterDigital;