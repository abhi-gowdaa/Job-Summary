import { useEffect, useState } from 'react';
import './App.css';
import { usePapaParse } from 'react-papaparse';
import { Csvtype ,DataSource,} from './modal';
import LineGraph from './components/LineGraph';
import WebChat from './components/WebChat';
import MainTable from './MainTable';


function App() {
  const [data, setData] = useState<Csvtype[]>([]); 
  const { readRemoteFile } = usePapaParse();
 
  useEffect(() => {
    const fetchCsv = async () => {
      readRemoteFile('https://raw.githubusercontent.com/abhi-gowdaa/Job-Summary/main/src/assets/salaries.csv', {
        download: true,  
        header: true,
        complete: (results) => {
          const parsedData = results.data as Csvtype[];
          console.log('Parsed Data:', parsedData);
          setData(parsedData);
        },
        error: (error) => {
          console.error('Error fetching the CSV:', error);
        },
      });
    };
    fetchCsv();
  }, [readRemoteFile]);

  const dataSource:DataSource[] = data.map((item, index) => ({
    key: index + 1,
    work_year: item.work_year,
    experience_level: item.experience_level,
    employment_type: item.employment_type,
    job_title: item.job_title,
    salary: item.salary,
    salary_currency: item.salary_currency,
    salary_in_usd: item.salary_in_usd,
    employee_residence: item.employee_residence,
    remote_ratio: item.remote_ratio,
    company_location: item.company_location,
    company_size: item.company_size,
  }));


  return (
      <>
        <h2 className='title'>Job Role Summary by Year
        </h2>
        <div className='container'>
        <LineGraph dataSource={dataSource}/>
        <MainTable dataSource={dataSource}/>
        <WebChat/>
         </div>
      </>
    
  );
}

export default App;
