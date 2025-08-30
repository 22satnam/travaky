import Link from 'next/link'

export default function LegalNav({ active }: { active: string }) {
  const items = [
    ['privacy','Privacy'],
    ['terms','Terms'],
    ['cookies','Cookies'],
    ['refund','Refunds'],
    ['disclaimer','Disclaimer'],
  ] as const

  return (
    <nav className="mb-6 flex flex-wrap gap-2">
      {items.map(([slug, label]) => (
        <Link
          key={slug}
          href={`/legal/${slug}`}
          className={`rounded-full px-3 py-1 text-sm ring-1 ring-black/5 ${
            active===slug
              ? 'bg-primary text-white'
              : 'bg-white hover:bg-primary/5'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
