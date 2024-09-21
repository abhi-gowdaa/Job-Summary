import type { TableColumnsType } from 'antd';

export type Csvtype = {
  company_location: "string";
  company_size: "string";
  employee_residence: "string";
  employment_type: "string";
  experience_level: "string";
  job_title: "string";
  remote_ratio: "string";
  salary: "string";
  salary_currency: "string";
  salary_in_usd: "string";
  work_year: "string";
};

export type DataSource= {
  key: number;
  work_year: string;
  experience_level: string;
  employment_type: string;
  job_title: string;
  salary: string;
  salary_currency: string;
  salary_in_usd: string;
  employee_residence: string;
  remote_ratio: string;
  company_location: string;
  company_size: string;
}


export const col: TableColumnsType=[
  {
    title:'year',
    dataIndex:"year",
    key:"year",
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.year - b.year,
  },
  {
    title:'Number of total jobs for that year',
    dataIndex:"no",
    key:"no",
    sorter: (a, b) => a.no - b.no,
  },
  {
    title:'Average salary in USD',
    dataIndex:"avg",
    key:"avg",
    sorter: (a, b) => a.avg- b.avg,
  }

]

export const miniColumn:TableColumnsType=[
  
  
  {
    title:'Job Title',
    dataIndex:'job',
    key:'job'
  },
  {
    title:'No Of Jobs',
    dataIndex:'no',
    key:'no',
    sorter: (a, b) => a.no- b.no,
  },
  
]

export const columns = [
  {
    title: 'Work Year',
    dataIndex: 'work_year',
    key: 'work_year',
  },
  {
    title: 'Experience Level',
    dataIndex: 'experience_level',
    key: 'experience_level',
  },
  {
    title: 'Employment Type',
    dataIndex: 'employment_type',
    key: 'employment_type',
  },
  {
    title: 'Job Title',
    dataIndex: 'job_title',
    key: 'job_title',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: 'Salary Currency',
    dataIndex: 'salary_currency',
    key: 'salary_currency',
  },
  {
    title: 'Salary (USD)',
    dataIndex: 'salary_in_usd',
    key: 'salary_in_usd',
  },
  {
    title: 'Employee Residence',
    dataIndex: 'employee_residence',
    key: 'employee_residence',
  },
  {
    title: 'Remote Ratio',
    dataIndex: 'remote_ratio',
    key: 'remote_ratio',
  },
  {
    title: 'Company Location',
    dataIndex: 'company_location',
    key: 'company_location',
  },
  {
    title: 'Company Size',
    dataIndex: 'company_size',
    key: 'company_size',
  },
];


export type RowSel = {
  key: string;
  year: string;
  no: number;
  avg: string;
};
 