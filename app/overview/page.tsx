export default function Overview() {
  return (
    <div className="bg-white">
      <div>
        <div className="w-full bg-gray-200 h-10 sticky top-0">Header</div>
        <div className="w-full bg-gray-100 h-10">Breadcrumbs</div>
        <div className="w-full bg-gray-300 h-24 sticky top-0">
          Stock Content
        </div>
        <div className="w-full bg-gray-100 h-24 sticky top-24">
          Scrollable headings
        </div>
        <div className="w-full bg-gray-400 h-[1000px]">Content</div>
      </div>
    </div>
  );
}
