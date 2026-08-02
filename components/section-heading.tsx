interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function SectionHeading({ index, title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-base text-muted-foreground max-w-xl text-pretty">{subtitle}</p>}
        </div>
        {action}
      </div>
    </div>
  )
}
