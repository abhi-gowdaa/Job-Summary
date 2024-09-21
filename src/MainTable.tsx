import { Table, ConfigProvider } from "antd";
import { DataSource, col, RowSel } from "./modal";
import { useState } from "react";
import SubTable from "./components/SubTable";

type Datasource = {
  dataSource: DataSource[];
};

const MainTable = ({ dataSource }: Datasource) => {
  const [year, setYear] = useState<number>(0);
  const [isTrue, setTrue] = useState(false);

  const years = dataSource
    .map((data) => {
      return data.work_year;
    })
    .filter((co, index, self) => co && self.indexOf(co) == index);

  const dictionary: { [key: number]: { count: number; no: number } } = {};
  for (let i = 0; i < years.length; i++) {
    let count = 0;
    let noOf = 0;

    dataSource.forEach((data) => {
      if (parseInt(data.work_year) === parseInt(years[i])) {
        count = count + parseInt(data.salary_in_usd);
        noOf = noOf + 1;
      }
    });
    dictionary[parseInt(years[i])] = { count: count / noOf, no: noOf };

    //console.log(years[i]);
  }
  //console.log(dictionary);

  const transformedData = Object.entries(dictionary).map(([year, value]) => ({
    key: year,
    year: year,
    no: value.no,
    avg: value.count.toFixed(2),
  }));

  const onSelectChange = (newSelectedRowKeys: RowSel) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    const year = parseInt(newSelectedRowKeys.year);
    setYear(year);
    if (year) {
      setTrue(true);
    }
  };
  console.log(dataSource);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className="table">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "",
              borderRadius: 5,
              colorText: "#fff",
              colorBgContainer: "rgba(0,0,0,0.5)",
              colorBgBlur: "50px",
            },
          }}
        >
          <Table
            dataSource={transformedData}
            columns={col}
            pagination={false}
            onRow={(record) => ({
              onClick: () => {
                onSelectChange({ ...record, key: record.year } as RowSel);
              },
            })}
          />
        </ConfigProvider>
      </div>
      {isTrue && <SubTable dataSource={dataSource} year={year} />}
    </div>
  );
};

export default MainTable;
