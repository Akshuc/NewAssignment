import logo from '../../Assets/card.jpg';
import logo1 from '../../Assets/card1.jpg';
import style from '../../../styles/Card.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from './CardData';







const CardContainer = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    
    return (
        
<div className={style.Child2}>

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}

  


    
    

  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  
>
  <div className={style.card}>
    <img className={style.img} src={data[0].image}/>
    <span className={style.text}>{data[0].name}</span>
  </div>
  <div className={style.card}>
    <img src={data[1].image} className={style.img} />
    <span className={style.text}>{data[1].name}</span>
  </div>
  <div className={style.card}>
    <img src={data[2].image} className={style.img} />
    <span className={style.text}>{data[2].name}</span>
  </div>
  <div className={style.card}>
    <img src={data[3].image} className={style.img} />
    <span className={style.text}>{data[3].name}</span>
  </div>
  <div className={style.card}>
    <img src={data[4].image} className={style.img} />
    <span className={style.text}>{data[4].name}</span>
  </div>
</Carousel>
        
    </div>
            
            
        
    )

}

export default CardContainer;