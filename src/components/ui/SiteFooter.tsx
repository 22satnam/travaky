'use client'

export function SiteFooter() {
  return (
    <footer
      className="mt-8 border-t"
      style={{
        background:
          'radial-gradient(1000px 420px at 90% -10%, hsl(var(--primary-100) / .35), transparent 60%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Travaky. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="/support" className="text-muted-foreground hover:text-foreground">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
