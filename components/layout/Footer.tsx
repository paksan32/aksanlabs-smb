export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Aksan Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="https://aksanlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            aksanlabs.com
          </a>
        </div>
      </div>
    </footer>
  )
}
