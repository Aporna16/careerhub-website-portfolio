import React, { useEffect, useState } from 'react';

const ViewDetail = () => {
const [details, setDetails] = useState([]);

useEffect(()=>{
  fetch('features.json')
  .then(data=>console.log(details))
  .catch(error=>console.log(error))

},[])
    return (
        <div>
          <h2>This is viewDetail</h2>
        </div>
    );
};

export default ViewDetail;