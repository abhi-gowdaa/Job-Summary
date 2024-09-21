import { DataSource, miniColumn } from "../modal";
import { ConfigProvider, Table } from "antd";

type Subtable = {
  dataSource: DataSource[];
  year: number;
};

const SubTable = ({ dataSource, year }: Subtable) => {
  const dictionary: { [key: number]: { job: string; count: number }[] } = {};

  dataSource.forEach((data) => {
    if (parseInt(data.work_year) === year) {
      const job = data.job_title;
      if (!dictionary[year]) {
        dictionary[year] = [];
      }
      const jobEntry = dictionary[year].find((entry) => entry.job === job);

      if (jobEntry) {
        jobEntry.count += 1;
      } else {
        dictionary[year].push({ job, count: 1 });
      }
    }
  });

  const transformedDat = Object.entries(dictionary).flatMap(([year, jobs]) =>
    jobs.map((jobEntry, index) => ({
      key: `${year}-${index}`,
      year: year,
      job: jobEntry.job,
      no: jobEntry.count,
    }))
  );

  return (
    <div style={{maxWidth:"941px", color:"black"}}>
      <h2>Jobs in {year}</h2>
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: "",
              borderRadius: 5,
              colorText: "#fff",
              colorBgContainer: "rgba(0,0,0,0.4)",
              colorBgBlur: "50px",
            },
          }}
        >
          <Table dataSource={transformedDat} columns={miniColumn} />
        </ConfigProvider>
     
    </div>
  );
};

export default SubTable;
