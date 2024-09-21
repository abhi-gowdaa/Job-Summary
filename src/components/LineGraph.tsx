import { Line } from "@ant-design/charts";
import { DataSource } from "../modal";
import "./LineGraph.css";

type LineGraphProps = {
  dataSource: DataSource[];
};

const LineGraph = ({ dataSource }: LineGraphProps) => {
  const dictionary: { [key: number]: number } = {};
  const years = dataSource
    .map((data) => {
      return data.work_year;
    })
    .filter((co, index, self) => co && self.indexOf(co) == index);

  for (let i = 0; i < years.length; i++) {
    let count = 0;
    let noOf = 0;
    dataSource.forEach((data) => {
      if (parseInt(data.work_year) === parseInt(years[i])) {
        count = count + parseInt(data.salary_in_usd);
        noOf = noOf + 1;
      }
    });
    dictionary[parseInt(years[i])] = count / noOf;
  }

  const transformedData = Object.entries(dictionary).map(([year, value]) => ({
    year: year,
    avg_salary: value,
  }));

  console.log(transformedData, "hi");

  const config = {
    data: transformedData,
    height: 250,
    width: 500,
    xField: "year",
    yField: "avg_salary",

    smooth: true,
    point: {
      size: 5,
      shape: "circle",
    },
    // label: {
    //     visible: true,
    //     position: "top",
    //     style: {
    //       fill: 'white',
    //     },
    //   },

    colorField: "#5c5",
    color: "#fff",
    axis: {
      x: {
        title: "Year                          ",
        titleFill: "white",
        labelFill: "#ffff",
      },
      y: { title: "Salary (in USD)", titleFill: "white", labelFill: "#fff" },
    },
  };
  return (
    <div className="chart-container">
      <h2>Salary Average per year</h2>
      <Line {...config} />
    </div>
  );
};

export default LineGraph;
