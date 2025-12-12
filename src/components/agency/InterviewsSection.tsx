import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Play, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function InterviewsSection() {
  const images = [
    "/reviews/photo1.jpg",
    "/reviews/photo2.jpg",
    "/reviews/photo3.jpg",
    "/reviews/photo4.jpg",
    "/reviews/photo5.jpg",
    "/reviews/photo6.jpg",
    "/reviews/photo7.jpg",
    "/reviews/photo8.jpg",
    "/reviews/photo9.jpg",
    "/reviews/photo10.jpg",
    "/reviews/photo11.jpg",
    "/reviews/photo12.jpg",
    "/reviews/photo13.jpg",
    "/reviews/photo14.jpg",
  ];

  // shuffle
  const shuffled = [...images].sort(() => Math.random() - 0.5);

  return (
    <section id="interviews" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Student Reviews</h2>
            <p className="text-muted-foreground text-lg mx-auto">
              See how our students benefited from our support services and achieved their study abroad goals
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true,  el: ".custom-swiper-pagination",    }}
            autoplay={{ delay: 2500 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className="w-full h-60  object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-pagination mt-4 flex justify-center"></div>


          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to share your success story? We'd love to feature you!
            </p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Contact Us to Share Your Story
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
