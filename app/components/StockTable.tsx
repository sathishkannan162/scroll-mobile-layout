import { cn } from "@/lib/utils";

interface StockData {
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
  const stockData: StockData[] = [
    {
      symbolMain: "RELIANCE 30SEP FUT",
      symbolSub: "NFO",
      ltpValue: "1378.00",
      ltpChange: "+12.10 (+0.88%)",
      premDis: "+3.00",
      oi: "12,23,24,000",
      oiChangeValue: "-10,95,000",
      oiChangePercent: "(-0.89%)",
      high: "1384.50",
      low: "1362.70",
      volume: "1,04,32,000",
      open: "1370.00",
      close: "1365.00",
      avgPrice: "1372.50",
      turnover: "1,43,00,00,000",
      trades: "12,000",
      deliveryQty: "2,00,000",
      deliveryPercent: "15.2%",
      vwap: "1375.20",
    },
    {
      symbolMain: "RELIANCE 28OCT FUT",
      symbolSub: "NFO",
      ltpValue: "1385.00",
      ltpChange: "+12.20 (+0.88%)",
      premDis: "+10.00",
      oi: "97,94,500",
      oiChangeValue: "-21,000",
      oiChangePercent: "(-0.21%)",
      high: "1390.40",
      low: "1370.00",
      volume: "7,13,500",
      open: "1378.00",
      close: "1372.00",
      avgPrice: "1380.10",
      turnover: "98,00,00,000",
      trades: "8,500",
      deliveryQty: "1,10,000",
      deliveryPercent: "13.7%",
      vwap: "1382.00",
    },
    {
      symbolMain: "RELIANCE 25NOV FUT",
      symbolSub: "NFO",
      ltpValue: "1391.90",
      ltpChange: "+12.40 (+0.89%)",
      premDis: "+16.90",
      oi: "7,52,500",
      oiChangeValue: "+34,000",
      oiChangePercent: "(+4.73%)",
      high: "1397.00",
      low: "1376.80",
      volume: "1,42,500",
      open: "1382.00",
      close: "1380.00",
      avgPrice: "1388.20",
      turnover: "12,00,00,000",
      trades: "2,100",
      deliveryQty: "40,000",
      deliveryPercent: "28.1%",
      vwap: "1390.00",
    },
  ];

  const headers = [
    "Symbol",
    "LTP",
    "Prem/Dis",
    "OI",
    "OI Change",
    "High",
    "Low",
    "Volume",
    "Open",
    "Close",
    "Avg Price",
    "Turnover",
    "Trades",
    "Delivery Qty",
    "Delivery %",
    "VWAP",
  ];

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
    "text-left min-w-[200px] pl-0 font-semibold border-r border-tr-gray-200 sticky left-0 bg-white"
  );
  const firstHeaderClassNames = cn(
    "text-left min-w-[200px] pl-0 border-r border-tr-gray-200 sticky left-0 bg-white"
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
