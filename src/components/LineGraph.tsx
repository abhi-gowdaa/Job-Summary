import { Line } from "@ant-design/charts";
import { DataSource } from "../modal";
 import './LineGraph.css'
 
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


//   const dataa = [
//     { year: '1991', value: 3 },
//     { year: '1992', value: 4 },
//     { year: '1993', value: 3.5 },
//     { year: '1994', value: 5 },
//     { year: '1995', value: 4.9 },
//     { year: '1996', value: 6 },
//     { year: '1997', value: 7 },
//     { year: '1998', value: 9 },
//     { year: '1999', value: 13 },
//   ];

  const transformedData = Object.entries(dictionary).map(([year, value]) => ({
    year: year,
    avg_salary: value,
  }));

  console.log(transformedData,"hi");

  const config = {
    data: transformedData,
    height: 250,
    width: 400,
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
    
        colorField:"#5c5",
        color:"#fff",
        axis: {
            x: {title:"Year                          ",titleFill:"white", labelFill: '#ffff' },
            y: { title:"Salary", titleFill:"white",labelFill: '#fff' },
        }
      
       
  };
  return <div className="chart-container">
    <h2>Salary Average per year</h2>
  <Line {...config} />
</div>;
};

export default LineGraph;
