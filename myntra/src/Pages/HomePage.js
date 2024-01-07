import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


export default function HomePage() {

    var carouselItems = [
        "https://images.creativemarket.com/0.1.0/ps/33590092/2250/1500/m1/fpnw/wm0/cover-copy-.jpg?1&s=e53e9ed8d239850c312b93ee5e1cd13a",
        "https://denimdudes.co/wp-content/uploads/2018/10/Denim_Dudes_Jordache_Jeans_Shot_04_226c-RD2_Campaign_1400x.jpg",
        "https://c.ndtvimg.com/2023-11/fvcnr9bo_sabyasachi-models_625x300_06_November_23.jpg"
    ];

    var CardBelowData = [
        {
            img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL2ZsNDg4NTQ3NjU3NjgtaW1hZ2UuanBn.jpg",
            title: "Designer Dresses",
            text: "Upto 50% Off \n Embrace versatility with designs that effortlessly transition from casual chic to formal elegance."
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/guest-wearing-denim-jacket-cropped-denim-jeans-chanel-bag-news-photo-920810972-1560192447.jpg?crop=0.44466xw:1xh;center,top&resize=980:*",
            title: "Denims Collection",
            text: "Upto 40% Off\nLevis,Diesel,Calvin Klein Jeans,Hudson Jeans, 7 for all Mankind,True Religion, Adriano Goldschmied"
        }, {
            img: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhcmVlfGVufDB8fDB8fHww",
            title: "Designer Sarees",
            text: "Under Rs.1,299\n Looking for latest fashion Designer Sarees online at best  prices? Designer sarees can elevate your ethnic wear wardrobe effortlessly"
        }, {
            img: "https://images.pexels.com/photos/18172215/pexels-photo-18172215.jpeg?cs=srgb&dl=pexels-angela-chac%C3%B3n-18172215.jpg&fm=jpg",
            title: "Pretty Dresses",

            text: "Upto Rs.5000 Off\n Dresses That Define Your Moments.\nIndulge in timeless elegance with our exquisite collection of dresses."
        }, {
            img: "https://imgs7.luluandsky.com/catalog/product/7/2/727A4308-8907884366920_1.JPG",
            title: "Glasses Collection",
            text: "Upto 20% Off \nFrames that Reflect Your Vision.\nAll the Designer Brands - Rayban,Oakley,Prada,Gucci,Persol,TomFord,Warby Parker,Burberry,Maui Jim"
        },
        {

            img: "https://www.tresmode.com/cdn/shop/files/Pay_Day_Sale_Mobile.jpg?v=1701283984&width=3000",
            title: "Footwear",
            text: "Upto 40-50% Off Shop Now \nStep into Comfort, Stride with Style\nSneakers,Stilletos,Sports Shoes,Sandals,Flip-flop,Loafers,Boots"
        }
    ]

    return (
        <>
            <div className="container">

                <main role="main" className="pb-3">
                    <div>
                        <Carousel>
                            {carouselItems.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100" src={item} alt={`slide-${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    <br></br>
                    <div className="card-group">
                        {CardBelowData.map((data, i) => (
                            <div className="card">
                                <img src={data.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">
                                        {data.text}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        ))}
                    </div>

                </main>
            </div>



        </>
    )
}
