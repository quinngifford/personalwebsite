export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Quinn Gifford. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
