const BASE_URL = 'https://www.semiconsteelandalloys.com'

export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/quality`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/metal-scraps`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/product/ferro-alloy`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/product/high-nickel-alloys-scrap`, priority: 0.9, changeFrequency: 'weekly' },
  ]

  const productSlugs = [
    'inco_600_scrap',
    'inco_601_scrap',
    'inco_625_scrap',
    'inco_825_scrap',
    'monel_400_scrap',
    'hastelloy_c276_scrap',
    'hastelloy_c22_scrap',
    'alloy_20_scrap',
  ]

  const productPages = productSlugs.map((slug) => ({
    url: `${BASE_URL}/product/metal-scraps/${slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }))

  return [...staticPages, ...productPages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
