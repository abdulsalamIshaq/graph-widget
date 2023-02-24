import React, { useState } from "react";
import Graph from "./components/Graph";
import "./style/main.scss";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2700,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1998,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 7780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 9890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 2800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 1300,
    amt: 2100,
  },
];
const App = () => {
  const [graph, setGraph] = useState(data2);

  return (
    <div className="graph">
      <div className="graph-header">
        <div>
          <h1>Graph Widget</h1>
        </div>
        <div>
          <form>
            <select
              onChange={(e) => {
                setGraph(data1);
              }}
            >
              <option>Last 7 days</option>
              <option>Last 15 days</option>
              <option>Last month</option>
            </select>
          </form>
        </div>
      </div>

      <div className="graph-body">
        <Graph data={graph} />
      </div>
    </div>
  );
};
export default App;
