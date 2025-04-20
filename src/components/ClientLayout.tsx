// "use client"

// import { Layout } from 'nextra-theme-docs'
// import CustomNavbar from '@/components/ui/CustomNavbar'
// import { CustomFooter } from '@/components/CustomFooter'
// import { Search } from 'nextra/components'

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <Layout
//       navbar={<CustomNavbar />}
//       footer={<CustomFooter />}
//       search={<Search />}
//       pageMap={[{ kind: 'MdxPage', name: 'index', route: '/', frontMatter: {} }]}
//       editLink={null}
//     >
//       {children}
//     </Layout>
//   )
// } 
"use client"

import { Layout } from 'nextra-theme-docs'
import CustomNavbar from '@/components/ui/CustomNavbar'
import { CustomFooter } from '@/components/CustomFooter'
import { Search } from 'nextra/components'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      navbar={<CustomNavbar />}
      footer={<CustomFooter />}
      search={<Search />}
      pageMap={[{ kind: 'MdxPage', name: 'index', route: '/', frontMatter: {} }]}
      editLink={null}
    >
      <div className="pt-20">
        {children}
      </div>
    </Layout>
  )
}
