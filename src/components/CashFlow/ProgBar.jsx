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

    const xScale = d3.scaleBand().domain(months).range([0, w]).padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.in + d.out)])
      .range([h, 0]);

    const colors = {
      in: "green",
      out: "orange",
    };

    svg
      .selectAll(".bar-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bar-group")
      .attr("transform", (d) => `translate(${xScale(d.month)}, 0)`);

    svg
      .selectAll(".bar-group")
      .append("rect")
      .attr("class", "bar in")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.in))
      .attr("width", xScale.bandwidth() * 0.3) // Adjusted bar width
      .attr("height", (d) => h - yScale(d.in))
      .attr("rx", 5) // Add border radius to the bars
      // .attr("ry", 5)
      .style("fill", colors.in);

    svg
      .selectAll(".bar-group")
      .append("rect")
      .attr("class", "bar out")
      .attr("x", 0)
      .attr("y", (d) => yScale(d.in + d.out))
      .attr("width", xScale.bandwidth() * 0.3) // Adjusted bar width
      .attr("height", (d) => h - yScale(d.out))
      .attr("rx", 3) // Add border radius to the top
      // .attr("ry", 5) // Keep the bottom corners sharp
      .style("fill", colors.out);

    svg
      .selectAll(".month-label")
      .data(months)
      .enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d) => xScale(d) + xScale.bandwidth() / 2)
      .attr("y", h + 20)
      .text((d) => d)
      .style("text-anchor", "middle");

    svg
      .selectAll(".axis-label")
      // .data(["In", "Out"])
      .enter()
      .append("text")
      .attr("class", "axis-label")
      .attr("x", (d, i) => (i === 0 ? 20 : w - 20))
      .attr("y", (d, i) => h) // Adjusted the vertical position
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
