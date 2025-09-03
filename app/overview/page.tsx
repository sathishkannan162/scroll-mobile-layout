export default function Overview() {
  return (
    <div className="bg-white">
      <div>
        {/* Header (will take over top when scrolled) */}
        <div className="w-full bg-gray-200 h-10 sticky top-0 z-30">Header</div>

        {/* Breadcrumbs (normal flow, scrolls away) */}
        <div className="w-full bg-gray-100 h-10">Breadcrumbs</div>

        {/* Stock Content (sticks at top until header pushes it down) */}
        <div className="w-full bg-gray-300 h-24 sticky top-0 z-20">
          Stock Content
        </div>

        {/* Scrollable headings (always under stock content) */}
        <div className="w-full bg-gray-100 h-24 sticky top-10 z-10">
          Scrollable headings
        </div>

        {/* Page content */}
        <div className="w-full bg-gray-400 h-[1000px]">Content</div>
      </div>
    </div>
  );
}
