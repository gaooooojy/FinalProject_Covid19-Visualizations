import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './line-chart.css'

function LineChart() {

    const ref = useRef(null)
    useEffect(() => {
        new CovidLine(ref.current)
    }, [])

    return (
        <section id="linecharts">
            <p style={{paddingBottom:"20px", textAlign:"center", fontWeight:"550", fontSize: "20px"}}>
                A Line Chart</p>
            <div ref={ref}></div>
        </section>
    )
}

class CovidLine {
    constructor(div, title) {
        this.div = div;
        this.title = title
        this.add_tip();
        this.handleData();
    }
    // add_title() {
    //     // title_text
    //     this.svg
    //         .append("text")
    //         .attr("x", 5)
    //         .attr("y", 35)
    //         .attr("class", "chart_title")
    //         .text(this.title)
    //         .style("font-size", "1.2rem");
    //     //title_image
    //
    //     this.svg
    //         .append("rect")
    //         .attr("x", 0)
    //         .attr("y", 45)
    //         .attr("width", "100%")
    //         .attr("height", 0.2)
    //         .attr("stroke", "lightgray")
    //         .attr("class", "chart_title_rect");
    // }
    async handleData() {

        let covid = await d3.json("./data.json");
        covid.forEach((d) => (d.date = d3.timeParse("%Y-%W")(d.year_week)));
        let cases = covid.filter((d) => d.indicator === "cases");

        this.lineData = d3
            .rollups(
                cases,
                (d) => d3.sum(d, (v) => +v.cumulative_count),
                (d) => d.date
            )
            .sort((a, b) => {
                return a[0] > b[0] ? 1 : -1;
            });

        this.initSvg();
        //this.add_title();
        this.draw_chart();
    }
    add_tip() {

        d3.select("body").selectAll('.d3-tip').data([0])
            .join("div")
            .attr("class", "d3-tip")
            .style("display", "none");

    }
    initSvg() {
        this.init_margin();
        this.init_chart_area();
        this.init_label();
        this.init_scale();
        this.init_axis();
    }

    init_margin() {
        let div = d3.select(this.div);
        this.getWH(div);
        this.margin = { left: 100, right: 20, top: 60, bottom: 60 };
        this.innerW = this.width - this.margin.left - this.margin.right;
        this.innerH = this.height - this.margin.top - this.margin.bottom;
        div.selectAll("*").remove();
        this.svg = div
            .append("svg")
            .attr("width", "1050px")
            .attr("height", "720px");
    }
    getWH(node) {
        this.width = node.node().getBoundingClientRect().width;
        this.height = node.node().getBoundingClientRect().height;
    }

    init_chart_area() {
        this.ChartArea = this.svg
            .append("g")
            .attr("width", "900px")
            .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
        this.DrawArea = this.ChartArea.append("g");
        this.add_guide_line()
    }

    init_label() {
        this.ChartArea.append("text")
            .attr("transform", `translate(${this.innerW / 2},${this.innerH + 30})`)
            .text("date")
            .attr("class", "AxisXDate");
        this.ChartArea.append("text")
            .attr(
                "transform",
                `translate(${-this.margin.left + 10},${this.innerH / 4}) rotate(90)`
            )
            .text("Cumulative Cases");
    }

    init_scale() {
        this.x = d3
            .scaleTime()
            .range([0, this.innerW])
            .domain(d3.extent(this.lineData, (d) => d[0]));
        this.y = d3
            .scaleLinear()
            .range([this.innerH, 0])
            .domain([0, d3.max(this.lineData, (d) => d[1])]);
    }

    init_axis() {
        this.AxisY = this.ChartArea.append("g");
        this.AxisX = this.ChartArea.append("g").attr(
            "transform",
            `translate(0,${this.innerH}) `
        );

        this.AxisX.call(d3.axisBottom(this.x).ticks(20));//.tickFormat(d3.timeFormat('%x')).
        this.AxisY.call(d3.axisLeft(this.y));
    }

    draw_chart() {
        this.draw_line()
        this.draw_circle()
        this.draw_area()
    }
    draw_line() {
        this.line = d3
            .line()
            .x((d) => this.x(d[0]))
            .y((d) => this.y(d[1]));
        this.DrawArea.append("path")
            .datum(this.lineData)
            .attr("d", this.line)
            .attr("stroke", "red")
            .attr("stroke-width", 3)
            .attr("fill", "none");

    }
    draw_circle() {

        this.DrawArea.selectAll("circle")
            .data(this.lineData)
            .join("circle")
            .attr("cx", (d) => this.x(d[0]))
            .attr("cy", (d) => this.y(d[1]))
            .attr("r", 1)
            .attr("stroke", "red")
            .attr("stroke-width", 1)
            .attr("fill", "blue")
            .on("mouseover", (e, v) => {
                // add mouseover event reference: https://www.d3-graph-gallery.com/graph/interactivity_tooltip.html
                d3.select(".tip")
                    .style("display", "block")
                    .style("position", "absolute")
                    .style("top", e.pageY + "px")
                    .style("left", e.pageX + "px")
                    .style("background-color", "white")
                    .style("padding", "5px")
                    .html(
                        `<li>${d3.timeFormat("%x")(v[0])}</li><li><strong>${d3.format(
                            ".1f"
                        )(v[1])}</strong></li>`
                    );
            })
            // add mouseout event
            .on("mouseout", () => {
                d3.select(".tip").style("display", "none");
            })
    }
    draw_area() {
        const area = d3.area()
            .x(d => this.x(d[0]))
            .y1(d => this.y(d[1]))
            .y0(this.y(0));
        this.DrawArea.append("path")
            .datum(this.lineData)
            .attr("d", area)
            .attr("stroke", "red")
            .attr("fill", "red")
            .attr('opacity', 0.1)
            .on('mousemove', (e, d) => {
                let time_format = d3.timeFormat('%Y-%W')
                let x_position = e.offsetX - this.margin.left
                let date = time_format(this.x.invert(x_position))
                let value = d.find(d => time_format(d[0]) === date)?.[1]
                this.tips_show(e, [date, value])
                // this.guide_line
                this.guide_line.attr('x1', x_position).attr('x2', x_position)
                    .attr('y1', this.innerH).attr('y2', this.y(value))
                    .attr('stroke', 'gray')
                    .attr('stroke-width', 0.4)

            })
            .on('mouseout', () => {
                    d3.select(".d3-tip").style("display", "none");
                    this.guide_line.attr('stroke-width', 0)
                }
            )

    }
    tips_show(e, [date, value]) {
        d3.select(".d3-tip")
            .style("display", "block")
            .style("position", "absolute")
            .style("top", `${e.y > this.height * 0.8 ? this.height * 0.8 : e.y}px`)
            .style("left", `${e.x}px`)
            .html(
                () => ` <section>
          <div class="popuppage">
          <p>date:${date}</p>
              <p>cases:<strong>${value}</strong></p>
            </div>
          </section>`
            );
    }

    add_guide_line() {
        this.guide_line = this.DrawArea.append('line')
    }

}

export default LineChart
