import { getTranslation } from "@/i18n/server";
import Image from "next/image";
import image1 from "../../../../../public/assets/images/image1.jpg";
import image2 from "../../../../../public/assets/images/image2.jpg";

const TourDetailsPage = async ({ params }) => {
  const theParams = params;

  if (!theParams || !theParams.locals) {
    return <div>Loading...</div>;
  }

  const { locals } = await theParams;
  const { t } = await getTranslation(locals);

  return (
    <div className="tourpage-wrapper">
      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <img
            src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
            alt="image from the web"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>

      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5"
            alt="image from the web"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>

      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <Image
            src="https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5"
            alt="image from the web"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>

      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <Image
            src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
            alt="image from the web"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>

      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <img
            src={image1}
            alt="image from the import image 1"
            width={300}
            height={400}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>

      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <img
            src={"/assets/images/image1.jpg"}
            alt="image from second import"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>
      <div className="tour-details-wrapper">
        <div className="tour-detail-image-wrapper">
          <Image
            src={"/assets/images/image1.jpg"}
            alt="image from second import"
            width={400}
            height={200}
            quality={90}
          />
        </div>
        {t("tourDetailsPage")}
        <h4>{theParams.id}</h4>
        <h4>{theParams.slug}</h4>
      </div>
    </div>
  );
};

export default TourDetailsPage;
