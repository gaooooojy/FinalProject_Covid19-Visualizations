import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './map-deaths.css'

function MapDeaths() {

    const ref = useRef(null)
    useEffect(() => {
        new WorldCovidDeaths(ref.current)
    }, [])

    return (
        <section id="map">
            <p style={{paddingBottom:"20px", textAlign:"center", fontWeight:"550", fontSize: "20px", fontFamily: "sans-serif"}}>
                World Map Data of Coronavirus (COVID-19) (Deaths)</p>
            <div ref={ref}>            </div>
        </section>
    )
}

class WorldCovidDeaths {

    constructor(div) {
        this.div = div
        this.getWH(d3.select(this.div))
        this.addTip()
        this.initMap();
    }
    getWH(node) {
        this.width = node.node().getBoundingClientRect().width;
        this.height = node.node().getBoundingClientRect().height;
    }
    addTip() {
        d3.select("body").selectAll('.d3-tip').data([0])
            .join("div")
            .attr("class", "d3-tip")
            .style("display", "none");
    }
    // 处理数据,获取最大日期的数据
    async initData() {
        this.world = await d3.json("./world.json");
        let covid = await d3.json("./data.json");

        covid.forEach((d) => (d.date = d3.timeParse("%Y-%W")(d.year_week)));
        let cases = covid.filter((d) => d.indicator === "cases");
        let deaths = covid.filter((d) => d.indicator !== "cases");

        let maxDate = d3.groups(cases, (d) => d.country);
        maxDate.forEach((d) => {
            d[2] = d3.max(d[1], (v) => v.date);
        });
        this.totalCovid_cases = cases.filter((d) => {
            return maxDate.find((v) => v[0] === d.country && v[2] === d.date);
        });

        // 求deaths的最大日期数据
        maxDate = d3.groups(deaths, (d) => d.country);
        maxDate.forEach((d) => {
            d[2] = d3.max(d[1], (v) => v.date);
        });
        this.totalCovid_deaths = deaths.filter((d) => {
            return maxDate.find((v) => v[0] === d.country && v[2] === d.date);
        });
        this.add_covid_to_map();
    }
    // 将数据添加到地图里
    add_covid_to_map() {
        //联合covid和map数据
        this.world.features.forEach((d) => {
            let values = this.totalCovid_cases.find((v) => d.id === v.country_code);
            if (values) {
                d.cumulative_count = values.cumulative_count ?? 0;
            }
        });

        this.world.features.forEach((d) => {
            let values = this.totalCovid_deaths.find((v) => d.id === v.country_code);
            if (values) {
                d.deaths = values.cumulative_count ?? 0;
            }
        });
    }

    // 初始化svg容器
    initSvg() {
        this.svg = d3.select(this.div).append("svg");
        this.svg.attr("width", "100%").attr("height", "720px");
    }
    // 初始化地图生成器
    async initMap() {
        await this.initData();
        this.initSvg();
        let worldGeoFeatures = this.world.features.filter(d => d.properties.name!=='Antarctica')
        // 去掉南极洲后的世界json数据
        let worldNoATAGeo = {
            type: "FeatureCollection",
            features: worldGeoFeatures
        }
        let projection = d3.geoMercator()
            // .fitSize([this.width*0.7, this.height*0.7], this.world)
            // .scale(100);
            .fitExtent([
                [50,50],
                [1000, 950]
            ], worldNoATAGeo)
            .scale(160);
        // const projection = d3
        //     .geoMercator()
        //     .fitSize([this.width*0.7, this.height*0.7], this.world)
        //     .scale(200);
        this.path = d3.geoPath().projection(projection);
        this.map = this.svg.append("g");
        this.drawMap();
        this.add_legend();
    }

    // 画地图
    drawMap() {
        let mapPath = this.map
            .selectAll("path")
            .data(this.world.features)
            .join("path")
            .attr("d", (d) =>
                d.properties.name === "Bermuda" ? "M 0,0" : this.path(d)
            );

        let max = d3.max(this.totalCovid_cases, (d) => +d.cumulative_count)
        this.color = d3
            .scaleThreshold(d3.schemeYlOrRd[9]) //这个是颜色
            // .domain(d3.range(100000, max, max/9))
            .domain([0, 5000, 50000, 500000, 5000000, max])//---116行代码换成这个也可以,更加灵活

        mapPath
            .attr("fill", (d) => this.color(d.cumulative_count ?? 0))
            .attr("stroke", "gray")
            .attr("class", (d) => d.properties.name)
            .on("mouseenter", (e, d) => {
                this.tips_show(e, d);
            })
            .on("mouseleave", this.tips_hide);
    }

    tips_show(e, d) {
        d3.select(".d3-tip")
            .style("display", "block")
            .style("position", "absolute")
            .style("top", `${e.y > this.height * 0.8 ? this.height * 0.8 : e.y}px`)
            .style("left", `${e.x}px`)
            .html(
                () => ` <section>
          <div class="popup-page">
              <p><strong>${d.properties.name}</strong></p>
              <p style="font-size: 18px">Deaths: <strong style="color: #F05951">${d.deaths}</strong></p>
              <p>Confirmed cases: <strong style="color: #388FD5">${d.cumulative_count}</strong></p>
              
            </div>
          </section>`
            );
    }
    tips_hide() {
        d3.select(".d3-tip").style("display", "none");
    }

    add_legend() {
        let legend = this.map.append('g').attr('transform', `translate(${this.width - 100},0)`)
        let r = d3.range(0, 6, 1)
        let rects = legend.selectAll('rect').data(r).join('rect')
        rects.attr('y', (d, i) => 20 + i * 30)
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', (d, i) => this.color.range()[i])

        let texts = legend.selectAll('.mytext').data(r).join('text').attr('class', 'mytext')
        texts.attr('y', (d, i) => 20 + i * 30 + 20)
            .attr('x', 35)
            .text((d, i) => d3.format(".1s")(this.color.domain()[i]))

    }
}



export default MapDeaths

// export default class Map extends Component {
//     render() {
//         return (<h1>
//             欢迎，这里是map!!!!!!!!!!
//         </h1>)
//     }
// }

