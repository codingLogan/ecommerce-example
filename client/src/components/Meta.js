import React from 'react'
import Helmet from 'react-helmet'

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Product Shop',
  description: 'We sell great products',
  keywords: 'great products, electronics',
}

export default Meta
