import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function Bar({ secoundData }) {
  const [data, setData] = useState(secoundData);
  const svgRef = useRef();

  useEffect(() => {
    setData(secoundData);
  }, [secoundData]);

  useEffect(() => {
    const w = 400;
    const h = 200;
    const months = [
      "Older",
      "Jan 01 - 08",
      "Jan 09 - 16",
      "Jan 17 - 24",
      "Jan 25 - 31",
      "Future",
    ];

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    const xScale = d3.scaleBand().domain(months).range([0, w]).padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).tickSize(0);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h - 10})`)
      .selectAll("line")
      .style("stroke", "#f6f7f9")
      .style("display", "none");

    svg.selectAll(".domain").style("display", "none");

    // Select the text elements representing the months and change their fill color
    svg.selectAll("g.tick text").style("fill", "gray"); // Change the fill color to gray

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(months[i]))
      .attr("y", yScale)
      .attr("width", "15px")
      .attr("height", (val) => h - 20 - yScale(val))
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", "#47b747");
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Bar;
