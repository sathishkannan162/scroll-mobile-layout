export default function StockTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>LTP</th>
          <th>Prem/Dis</th>
          <th>OI</th>
          <th>OI Change</th>
          <th>High</th>
          <th>Low</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            RELIANCE 30SEP FUT
            <br />
            NFO
          </td>
          <td>
            1378.00
            <br />
            +12.10 (+0.88%)
          </td>
          <td>+3.00</td>
          <td>12,23,24,000</td>
          <td>
            -10,95,000
            <br />
            (-0.89%)
          </td>
          <td>1384.50</td>
          <td>1362.70</td>
          <td>1,04,32,000</td>
        </tr>
        <tr>
          <td>
            RELIANCE 28OCT FUT
            <br />
            NFO
          </td>
          <td>
            1385.00
            <br />
            +12.20 (+0.88%)
          </td>
          <td>+10.00</td>
          <td>97,94,500</td>
          <td>
            -21,000
            <br />
            (-0.21%)
          </td>
          <td>1390.40</td>
          <td>1370.00</td>
          <td>7,13,500</td>
        </tr>
        <tr>
          <td>
            RELIANCE 25NOV FUT
            <br />
            NFO
          </td>
          <td>
            1391.90
            <br />
            +12.40 (+0.89%)
          </td>
          <td>+16.90</td>
          <td>7,52,500</td>
          <td>
            +34,000
            <br />
            (+4.73%)
          </td>
          <td>1397.00</td>
          <td>1376.80</td>
          <td>1,42,500</td>
        </tr>
      </tbody>
    </table>
  );
}
