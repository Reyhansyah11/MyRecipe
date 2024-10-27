import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../types/type";
import { Link } from "react-router-dom";

export default function CategoryWrapper() {
  const [Categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://recipe.sinaukode.my.id/api/categories")
      .then((response) => {
        setCategories(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error Loading data: {error}</p>;
  }

  return (
    <>
      <section id="Categories" className="mt-[30px]">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-bold">By Categories</h2>
        </div>
        <div className="swiper w-full mt-3">
          <Swiper
            className="w-full mt-3"
            direction="horizontal"
            spaceBetween={16}
            slidesPerView="auto"
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
          >
            {Categories.map((category) => (
              <SwiperSlide key={category.id} className="!w-fit pb-[30px]">
                <Link to={`/category/${category.slug}`}>
                  <CategoryCard category={category} />
                </Link>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide className="swiper-slide !w-fit pb-[30px]">
              <a href="category.html" className="card">
                <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center transition-all duration-300 shadow-[0_10px_20px_0_#FF4C1C80] bg-[#FF4C1C] text-white">
                  <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                    <img
                      src="/assets/images/icons/healthy.png"
                      className="object-contain w-full h-full"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-sm leading-[21px]">
                    Healthy
                  </h3>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit pb-[30px]">
              <a href="category.html" className="card">
                <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                  <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                    <img
                      src="/assets/images/icons/sweet.png"
                      className="object-contain w-full h-full"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-sm leading-[21px]">
                    Sweet
                  </h3>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit pb-[30px]">
              <a href="category.html" className="card">
                <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                  <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                    <img
                      src="/assets/images/icons/steam.png"
                      className="object-contain w-full h-full"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-sm leading-[21px]">
                    Steam
                  </h3>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit pb-[30px]">
              <a href="category.html" className="card">
                <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                  <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                    <img
                      src="/assets/images/icons/grill.png"
                      className="object-contain w-full h-full"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-sm leading-[21px]">
                    Grill
                  </h3>
                </div>
              </a>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
