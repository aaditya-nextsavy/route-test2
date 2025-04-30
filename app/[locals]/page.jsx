export const revalidate = 10

import { fetchBlogsData, fetchCategory, fetchContactData, fetchLocations, fetchMetaInfoDetails, fetchPopulerTours } from '@/lib/apis';
import { getTranslation } from '../../i18n/server';
import Locations from '@/components/Locations';
import Image from 'next/image';

export default async function Page({ params }) {
  // Ensure params is being received correctly
  const theParams = await params;
  console.log('theParams:', theParams); // This will log { locale: 'your-locale' }

  if (!theParams || !theParams.locals) {
    return <div>Loading...</div>; // or handle error if params or locale is missing
  }


  const { locals } = theParams;
  const { t } = await getTranslation(locals);

  const locations = await fetchLocations({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
  });

  const categories = await fetchCategory({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
  });

  const populerTours = await fetchPopulerTours({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
  });

  const contactData = await fetchContactData({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
  });

  const blogs = await fetchBlogsData({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
  });

  const metaInfo = await fetchMetaInfoDetails({
    selectedLanguageCode: locals,
    userAgent: 'MyApp/1.0',
    deviceId: 'abc123',
    slug: 'home-page',
  });

  console.log("All Data", [{
    "Locations": locations.data,
    "categories": categories.data,
    "populerTours": populerTours.data,
    "contactData": contactData.data,
    "blogs": blogs.data,
    "metaInfo": metaInfo.data,
  }])

  return (
    <main>

<div className="tour-detail-image-wrapper">
           <Image
             src="https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5"
             alt="image from the web"
             width={400}
             height={200}
             quality={90}
           />
         </div>



      <h1>{t('welcome')}{locals}</h1>

      {categories.data.map((data, index) => (
        <h5 key={index + data.id * 423 + 50}>{data.id} {data.title}</h5>
      ))}

      {populerTours.data.map((data, index) => (
        <h5 key={index + data.id * 422}>{data.id} {data.title}</h5>
      ))}

      {contactData.data.map((data, index) => (
        <h5 key={index + data.id * 420}>{data.id} {data.email_address}</h5>
      ))}

      {blogs.data.map((data, index) => (
        <h5 key={index + data.id * 421}>{data.id} {data.title}</h5>
      ))}


      {/* <h5 key={metaInfo.data.id}>{metaInfo.data.id} {metaInfo.data.title}</h5> */}


      <Locations locations={locations.data} />

    </main>
  );
}
