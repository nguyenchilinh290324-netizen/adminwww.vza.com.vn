export type StorefrontProduct = {
  id: string
  handle: string
  title: string
  description: string
  vendor: string
  productType: string
  availableForSale: boolean
  featuredImage: { url: string; altText: string | null } | null
  variants: {
    id: string
    title: string
    sku: string | null
    availableForSale: boolean
    price: { amount: string; currencyCode: string }
  }[]
}

type ProductResponse = {
  data?: {
    products?: {
      nodes?: StorefrontProduct[]
    }
  }
  errors?: { message: string }[]
}

const STOREFRONT_API_VERSION = '2025-10'

function getStorefrontConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim()
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

  if (!domain || !token) return null

  const hostname = domain.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return { hostname, token }
}

export async function getProducts(searchQuery = ''): Promise<StorefrontProduct[]> {
  const config = getStorefrontConfig()
  if (!config) return []

  const query = `
    query StorefrontProducts($first: Int!, $search: String) {
      products(first: $first, query: $search, sortKey: RELEVANCE) {
        nodes {
          id
          handle
          title
          description
          vendor
          productType
          availableForSale
          featuredImage {
            url
            altText
          }
          variants(first: 1) {
            nodes {
              id
              title
              sku
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch(
      `https://${config.hostname}/api/${STOREFRONT_API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': config.token,
        },
        body: JSON.stringify({
          query,
          variables: {
            first: 12,
            search: searchQuery || null,
          },
        }),
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      throw new Error(`Shopify Storefront API returned ${response.status}`)
    }

    const result = (await response.json()) as ProductResponse
    if (result.errors?.length) {
      throw new Error(result.errors.map((error) => error.message).join('; '))
    }

    return (result.data?.products?.nodes ?? []).filter(
      (product) => product.variants.length > 0,
    )
  } catch (error) {
    console.error('[shopify] Failed to load products:', error)
    return []
  }
}

export function getShopifyStoreUrl() {
  const config = getStorefrontConfig()
  return config ? `https://${config.hostname}` : null
}

export function formatPrice(price: StorefrontProduct['variants'][number]['price']) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currencyCode,
    maximumFractionDigits: 2,
  }).format(Number(price.amount))
}

export function getVariantNumericId(variantId: string) {
  return variantId.split('/').at(-1) ?? ''
}

export function getRfqEmail() {
  return process.env.NEXT_PUBLIC_RFQ_EMAIL?.trim() || ''
}

export function getStoreName() {
  return process.env.NEXT_PUBLIC_STORE_NAME?.trim() || 'Northstar Industrial'
}

export function getStorefrontHost() {
  return getStorefrontConfig()?.hostname ?? ''
}

export function getCatalogSearchUrl(searchQuery: string) {
  const params = new URLSearchParams()
  if (searchQuery) params.set('q', searchQuery)
  return `/?${params.toString()}#products`
}

export function getProductImageAlt(product: StorefrontProduct) {
  return product.featuredImage?.altText || product.title
}

export function getProductSku(product: StorefrontProduct) {
  return product.variants[0]?.sku || 'SKU available on request'
}

export function getProductPrice(product: StorefrontProduct) {
  const variant = product.variants[0]
  return variant ? formatPrice(variant.price) : 'Request pricing'
}

export function getProductVariantId(product: StorefrontProduct) {
  return product.variants[0]?.id ?? ''
}

export function getProductHref(product: StorefrontProduct) {
  const storeUrl = getShopifyStoreUrl()
  return storeUrl ? `${storeUrl}/products/${product.handle}` : '#rfq'
}

export function getProductAvailability(product: StorefrontProduct) {
  return product.variants[0]?.availableForSale ? 'In stock' : 'Request availability'
}

export function getProductCollectionLabel(product: StorefrontProduct) {
  return product.productType || product.vendor || 'Industrial supply'
}

export function getCartAddUrl() {
  const storeUrl = getShopifyStoreUrl()
  return storeUrl ? `${storeUrl}/cart/add` : '#rfq'
}

export function getRfqActionUrl() {
  const storeUrl = getShopifyStoreUrl()
  return storeUrl ? `${storeUrl}/contact#rfq` : '#rfq'
}

export function getShopifyDomain() {
  return getStorefrontConfig()?.hostname ?? ''
}

export function isStorefrontConfigured() {
  return Boolean(getStorefrontConfig())
}

export function isNumericShopifyId(value: string) {
  return /^\d+$/.test(value)
}

export function getProductVariantNumericId(product: StorefrontProduct) {
  return getVariantNumericId(getProductVariantId(product))
}

export function getProductCartable(product: StorefrontProduct) {
  return Boolean(getProductVariantNumericId(product))
}

export function getStorefrontBaseUrl() {
  return getShopifyStoreUrl() ?? ''
}

export function getStorefrontCurrency(product: StorefrontProduct) {
  return product.variants[0]?.price.currencyCode ?? 'USD'
}

export function getProductVendor(product: StorefrontProduct) {
  return product.vendor || 'Industrial supply'
}

export function getProductShortDescription(product: StorefrontProduct) {
  const text = product.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > 138 ? `${text.slice(0, 135).trimEnd()}…` : text
}

export function getProductImageUrl(product: StorefrontProduct) {
  return product.featuredImage?.url ?? ''
}

export function getProductCategoryLabel(product: StorefrontProduct) {
  return product.productType || 'Industrial components'
}

export function getProductHrefWithVariant(product: StorefrontProduct) {
  const url = getProductHref(product)
  const variantId = getProductVariantNumericId(product)
  return variantId ? `${url}?variant=${variantId}` : url
}

export function getQuoteMailto(product?: StorefrontProduct) {
  const email = getRfqEmail()
  if (!email) return '#rfq'
  const subject = product ? `Quote request: ${product.title}` : 'Industrial supply quote request'
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
}

export function getProductQuoteText(product: StorefrontProduct) {
  return `Please quote ${product.title} (${getProductSku(product)}).`
}

export function getProductQuoteSubject(product: StorefrontProduct) {
  return `Quote request: ${product.title}`
}
