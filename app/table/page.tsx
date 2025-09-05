import StockTable from "../components/StockTable";
export default function Page() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="py-4">
        <div>Stock Table</div>
        <div className="w-full overflow-x-auto scrollbar-small">
          <StockTable />
        </div>
      </div>
    </div>
  );
}
