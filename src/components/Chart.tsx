// Recharts
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
// Types
import { PlotData } from "../types/measure";
//============================================================================//

function Chart({ measurement }: { measurement: PlotData[] }) {
  console.log(measurement);

  return (
    <ResponsiveContainer height={400} width={"100%"}>
      <LineChart
        data={measurement}
        margin={{ top: 40, bottom: 5 }}
        compact={true}
      >
        <Line
          //dot={false}
          type="monotone"
          dataKey="mv"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <YAxis
          type={"number"}
          dataKey={"mv"}
          tickCount={measurement.length}
          domain={["dataMin", "dataMax"]}
          padding={{ bottom: 20 }}
        />
        <XAxis dataKey={"ms"} tickCount={measurement.length} minTickGap={1} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
