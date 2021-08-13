// Globals
import React from "react";
import { setData } from "../../_internal/action/globalAction"
import { useSelector, useDispatch } from 'react-redux';

// Components
import { Record } from "components/Record";
import { mockFetch } from "../../util/mockFetch";

// Misc
// import { data } from "components/Record/data";

// Component
 function GlobalRecords() {
  const data=useSelector(state=>{return state.records.data});
  const dispatch = useDispatch()

  React.useEffect(async() => {
    if(!data.length)
    try{
      console.log("data 2",data)
      dispatch(setData(await mockFetch()))
    }
    catch(e){
        console.log("error",e)
    }
    
  }, [])

  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {!!data.length?data.map((record) => {
          return <Record key={record.id} data={record} />;
        })
        :
        <h2>Loading, please wait or try again in sometime.</h2>}
      </div>
    </div>
  );
}

export { GlobalRecords } ;
