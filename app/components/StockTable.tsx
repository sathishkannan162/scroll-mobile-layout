import { cn } from "@/lib/utils";
import { headers, stockData } from "./data";

export interface StockData {
  symbolMain: string;
  symbolSub: string;
  ltpValue: string;
  ltpChange: string;
  premDis: string;
  oi: string;
  oiChangeValue: string;
  oiChangePercent: string;
  high: string;
  low: string;
  volume: string;
  open: string;
  close: string;
  avgPrice: string;
  turnover: string;
  trades: string;
  deliveryQty: string;
  deliveryPercent: string;
  vwap: string;
}

export default function StockTable() {
  const displayFormat = [
    (stock: StockData) => (
      <>
        <div className="text-xs">{stock.symbolMain}</div>
        <div className="text-[11px]">{stock.symbolSub}</div>
      </>
    ),
    (stock: StockData) => (
      <>
        <div className="text-xs">{stock.ltpValue}</div>
        <div className="text-[11px] text-tr-green">{stock.ltpChange}</div>
      </>
    ),
    (stock: StockData) => stock.premDis,
    (stock: StockData) => stock.oi,
    (stock: StockData) => (
      <>
        <div className="text-xs">{stock.oiChangeValue}</div>
        <div className="text-[11px] text-tr-red">{stock.oiChangePercent}</div>
      </>
    ),
    (stock: StockData) => stock.high,
    (stock: StockData) => stock.low,
    (stock: StockData) => stock.volume,
    (stock: StockData) => stock.open,
    (stock: StockData) => stock.close,
    (stock: StockData) => stock.avgPrice,
    (stock: StockData) => stock.turnover,
    (stock: StockData) => stock.trades,
    (stock: StockData) => stock.deliveryQty,
    (stock: StockData) => stock.deliveryPercent,
    (stock: StockData) => stock.vwap,
  ];

  const firstCellClassNames = cn(
    "text-left min-w-[200px] pl-0 font-semibold border-r border-tr-gray-200 sticky left-0 bg-white shadow-tr-1"
  );
  const firstHeaderClassNames = cn(
    "text-left min-w-[200px] pl-0 border-r border-tr-gray-200 sticky left-0 bg-white shadow-tr-1"
  );

  return (
    <table className="table table-auto border-separate border-spacing-0">
      <thead>
        <tr className="">
          {headers.map((header, index) => (
            <th
              key={index}
              className={cn(
                "min-w-[100px] font-normal text-right px-2 py-1 whitespace-nowrap border-t border-gray-200 text-tr-gray-800 text-sm",
                index === 0 && firstHeaderClassNames
              )}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stockData.map((stock, index) => (
          <tr key={index}>
            {displayFormat.map((format, idx) => (
              <td
                key={idx}
                className={cn(
                  "min-w-[100px]  text-right px-2 py-1 whitespace-nowrap border-t border-gray-200 text-sm font-medium",
                  idx === 0 && firstCellClassNames
                )}
              >
                {format(stock)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
