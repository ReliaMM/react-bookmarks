import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide
} from "bizcharts";
import DataSet from "@antv/data-set";
const { DataView } = DataSet;
const { Html } = Guide;
const data = [
  {
    item: "事例四",
    count: 1
  },
  {
    item: "事例五",
    count: 1
  }
];
const dv = new DataView();
dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};

const ChartPie = () => {
  return (
    <div>
      <Chart
         width={360} height={350}
        data={dv}
        scale={cols}
        padding={[10, 10, 10, 10]}
        forceFit
      >
        <Coord type={"theta"} radius={0.5} innerRadius={0.45} />
        <Axis name="percent" />
        <Legend
          position="top"
          offsetY={10}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Guide>
          <Html
            position={["50%", "50%"]}
            html="<div style=&quot;color:#8c8c8c;font-size:12px;text-align: center;width: 10em;&quot;>主机<br><span style=&quot;color:#262626;font-size:16px&quot;>200</span>台</div>"
            alignX="middle"
            alignY="middle"
          />
        </Guide>
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            "item*percent",
            (item, percent) => {
              percent = percent * 100 + "%";
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.item + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
}

export default ChartPie;