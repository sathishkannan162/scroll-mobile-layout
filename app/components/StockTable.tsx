export default function StockTable() {
  const stockData = [
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
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stockData.map((stock, index) => (
          <tr key={index}>
            <td>
              {stock.symbolMain}
              <br />
              {stock.symbolSub}
            </td>
            <td>
              {stock.ltpValue}
              <br />
              {stock.ltpChange}
            </td>
            <td>{stock.premDis}</td>
            <td>{stock.oi}</td>
            <td>
              {stock.oiChangeValue}
              <br />
              {stock.oiChangePercent}
            </td>
            <td>{stock.high}</td>
            <td>{stock.low}</td>
            <td>{stock.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
