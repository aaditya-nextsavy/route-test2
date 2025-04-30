import { getTranslation } from '@/i18n/server';
import React from 'react'

const tourPage = async ({ params }) => {
  const theParams = await params;

  if (!theParams || !theParams.locals) {
    return <div>Loading...</div>; // or handle error if params or locale is missing
  }

  const { locals } = theParams;

  const { t } = await getTranslation(locals);
  return (
    <div>{t("tourPage")}</div>
  )
}

export default tourPage