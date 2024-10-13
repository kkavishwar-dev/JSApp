async function getData(){
  let statuses = [];
  let osResult = await axios.get("http://localhost:3000/api/orderStatuses");
  statuses = osResult.data;

  return osResult.data.map( o => {
    return {
        ...o,
        orderStatus: statuses.find((d) => d.id === o.orderStatusId).description,
    }
  });
}

async function display(){
    try {
      let orders = await getData();
      console.log(orders);
    } catch (error) {
      console.log(error);
      //showError("#order-list", error);
    }
    finally{
      console.log(`in finally block`);
      //setTimeout(hideWaiting, 1500);
    }
}

display();