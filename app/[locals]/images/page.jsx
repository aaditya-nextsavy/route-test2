import ServerImage from '@/components/ServerImage';
import image2 from '@/public/assets/images/image2.jpg';
import Image from 'next/image';
export default function Page() {
  return (
    <div className="tourpage-wrapper">
      {/* External images */}
      <div className="tour-details-wrapper">
        {/* <ServerImage */}
        <Image
          src="https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5"
          alt="image from the web"
          width={400}
          height={200}
          quality={10}
        />
      </div>

      <div className="tour-details-wrapper">
           {/* <ServerImage */}
           <Image
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
          alt="image from the web"
          width={400}
          height={200}
        />
      </div>

      {/* Local images */}
      <div className="tour-details-wrapper">
          {/* <ServerImage */}
          <Image
          src="/assets/images/image1.jpg"
          alt="local image"
          width={400}
          height={200}
          quality={10}
        />
      </div>

      <div className="tour-details-wrapper">
           {/* <ServerImage */}
           <Image
          src="/assets/images/image1.jpg"
          alt="imported local image"
          width={400}
          height={200}
          quality={99}
        />
      </div>
    </div>
  );
}