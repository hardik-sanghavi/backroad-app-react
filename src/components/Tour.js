import { tours } from '../data';
import tourImg1 from '../images/tour-1.jpeg';
import tourImg2 from '../images/tour-2.jpeg';
import tourImg3 from '../images/tour-3.jpeg';
import tourImg4 from '../images/tour-4.jpeg';
import { Title } from './Title';


const Tour = () => {
    return (
<section className="section" id="tours">

<Title title={'featured'} subTitle={'tours'}/>

<div className="section-center featured-center">

  {
    tours.map((tour) => {
      return (
      <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt={tour.title} />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.description}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.country}
              </p>
              <p>{tour.days}</p>
              <p>from {tour.amount}</p>
            </div>
          </div>
        </article>
      );
    }) 
  }
</div>
</section>

    )
}

export default Tour;