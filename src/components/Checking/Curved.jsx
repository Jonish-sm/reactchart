import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Curved({ data, dates }) {
  const svgRef = useRef();

  useEffect(() => {
    const w = 450;
    const h = 120;
    const gap = -30;

    // Select the existing SVG and remove its children
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => dates[i]); // Use dates[i] to label the ticks

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h + 50})`)
      .selectAll("line")
      .style("stroke", "black")
      .style("display", "none");

    svg.selectAll(".domain").style("display", "none");

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaleLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaleLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47b747")
      .attr("stroke-width", 2)
      // .style("margin-bottom", "50px")
      .attr("transform", `translate(0,${gap})`);
  }, [data, dates]);

  return <div>{<svg ref={svgRef}></svg>}</div>;
}

export default Curved;
