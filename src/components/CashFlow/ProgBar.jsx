import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./cashflow.css";

function ProgBar({ thirdData }) {
  const data = thirdData;
  const svgRef = useRef();

  useEffect(() => {
    const w = 400;
    const h = 200;
    const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    const xScale = d3.scaleBand().domain(months).range([0, w]).padding(0.1); // Reduce padding

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.in + d.out)])
      .range([h, 0]);

    const colors = {
      in: "#02bb7d",
      out: "#47b747",
    };

    const barWidth = xScale.bandwidth() * 0.3; // Reduce bar width
    const borderRadius = 5; // Set border radius

    svg
      .selectAll(".bar-group")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "bar in")
      .attr(
        "d",
        (d) =>
          `M${xScale(d.month) + (xScale.bandwidth() - barWidth) / 2},${yScale(
            d.in
          )} 
        h${barWidth} 
        a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius} 
        v${h - yScale(d.in)} 
        a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} 
        h-${barWidth} Z`
      )
      .style("fill", colors.in);

    svg
      .selectAll(".bar-group")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "bar out")
      .attr(
        "d",
        (d) =>
          `M${xScale(d.month) + (xScale.bandwidth() - barWidth) / 2},${yScale(
            d.in + d.out
          )} 
        h${barWidth} 
        a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius} 
        v${h - yScale(d.out)} 
        a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} 
        h-${barWidth} Z`
      )
      .style("fill", colors.out);

    svg
      .selectAll(".month-label")
      .data(months)
      .enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d) => xScale(d) + xScale.bandwidth() / 2)
      .attr("y", h + 25)
      .text((d) => d)
      .style("text-anchor", "middle");

    svg
      .selectAll(".axis-label")
      // .data(["In", "Out"])
      .enter()
      .append("text")
      .attr("class", "axis-label")
      .attr("x", (d, i) => (i === 0 ? 20 : w - 20))
      .attr("y", (d, i) => h)
      .text((d) => d)
      .style("text-anchor", (d, i) => (i === 0 ? "start" : "end"));
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default ProgBar;
