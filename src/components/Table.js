import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = [
    {
     name: "source",
     label: "Original Text",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "target",
     label: "Translation",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
        name: "score",
        label: "Score",
        options: {
         filter: true,
         sort: true,
        }
       },
];

const options = {
    selectableRows: false,
  };

const CountryDetails = ({ data }) => {

    return (
        <div className='container'>
            <MUIDataTable
                title={`Search Terms (${data.length})`}
                data={data}
                columns={columns}
                options={options}
            />
        </div>  
    );
};

export default CountryDetails;

