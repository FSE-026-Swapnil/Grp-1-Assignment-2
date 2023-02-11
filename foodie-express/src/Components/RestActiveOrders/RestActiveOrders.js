import React, { Component, useState,useEffect } from 'react';
import { getUser } from '../Common/Common';
import { BASE_URL } from '../../Constants/APIConstants'

const RestActiveOrders = () =>{
    const [activeData,setActiveData] = useState([]);
    const user = getUser();

    const fetchUserDetails = (data) => {
        fetch(BASE_URL + 'users?id=' + data[0].orderedBy, {
          method: "GET"
        }).then((response) => {
          return response.json();
        })
        .then((resp) => {
          if(resp.length > 0){
            data[0].orderedBy = resp[0].email;
            setActiveData(data);
          }
        });
      }  

  const fetchActiveOrder = () => {
    fetch(BASE_URL + 'orders?fulfilledBy=' + user.name + '&status=accepted', {
        method: "GET"
      }).then((response) => {
        return response.json();
      })
      .then((resp) => {
        if(resp.length > 0){
          //setActiveData(resp);
          fetchUserDetails(resp);
        }
      });
  }

  useEffect(() => {
    fetchActiveOrder();
  },[])

    return(
        <div>
            {activeData.length > 0 && 
            <div>
                <h1 style={{'marginLeft':'25px'}}>Active Orders</h1>
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col" style={{width:'5%'}}>#</th>
                    <th scope="col" style={{width:'5%'}}>Ordered By</th>
                    <th scope="col" style={{width:'20%'}}>Order Items</th>
                    <th scope="col" style={{width:'10%'}}>Price</th>
                    <th scope="col" style={{width:'10%'}}>status</th>
                    </tr>
                </thead>
                <tbody>
                    {activeData.map((item,index)=>{
                        return(
                            <tr>
                                <th scope="row" key={item.id}>{item.id}</th>
                                <td>{item.orderedBy}</td>
                                <td>{item.items.length}</td>
                                <td>{item.totalAmount}</td>
                                <td>{item.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
            }

            {activeData.length == 0 && <h3 style={{margin:'25px'}}>No Active Orders !!!</h3>}
        </div>
    );
}

export default RestActiveOrders;