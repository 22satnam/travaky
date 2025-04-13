// import { useMDXComponents } from '@/mdx-components'
// import { generateStaticParamsFor, importPage } from 'nextra/pages'

// export const generateStaticParams = generateStaticParamsFor('mdxPath')

// export async function generateMetadata(props: PageProps) {
//   const params = await props.params
//   const { metadata } = await importPage(params.mdxPath, params.lang)
//   return metadata
// }

// type PageProps = Readonly<{
//   params: Promise<{
//     mdxPath: string[]
//     lang: string
//   }>
// }>
// const Wrapper = useMDXComponents().wrapper

// export default async function Page(props: PageProps) {
//   // eslint-disable-next-line react/prefer-destructuring-assignment
//   const params = await props.params
//   const result = await importPage(params.mdxPath, params.lang)
//   const { default: MDXContent, toc, metadata } = result


//   return (
//     <Wrapper toc={toc} metadata={metadata}>
//       <MDXContent {...props} params={params} />
//     </Wrapper>
//   )
// }
import { useMDXComponents } from '@/mdx-components'
import { generateStaticParamsFor, importPage } from 'nextra/pages'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

type PageParams = {
  mdxPath: string[]
  lang: string
}

type PageProps = Readonly<{
  params: Promise<PageParams>
}>

// Metadata function — must await props.params because it's a Promise
export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath, params.lang)
  return metadata
}

// Entry page component — also awaits params
export default async function Page(props: PageProps) {
  const params = await props.params
  const result = await importPage(params.mdxPath, params.lang)
  const { default: MDXContent, toc, metadata } = result

  const Wrapper = useMDXComponents().wrapper

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
