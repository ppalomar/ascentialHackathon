import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = [
    {
     name: "origin_text",
     label: "Original Text",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "translated_text",
     label: "Translation",
     options: {
      filter: true,
      sort: true,
     }
    },
];

const options = {
    // filterType: 'checkbox',
  };

const CountryDetails = ({ data }) => {

    return (
        <div className='container'>
            <MUIDataTable
                title={"Search Terms"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>  
    );
};

export default CountryDetails;

