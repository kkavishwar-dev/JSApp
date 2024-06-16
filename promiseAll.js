
function getMultiplePayloads(){
  const statusReq = axios.get("http://localhost:3000/api/orderStatuses");
  const addressReq = axios.get("http://localhost:3000/api/addresses");

  let statuses = [];
  let addresses = [];
  Promise.all([statusReq, addressReq]).then(([statusRes, addressRes]) => {
      statuses = statusRes.data;
      addresses = addressRes.data;

      return axios.get("http://localhost:3000/api/orders");
  }).then(({data}) => {
      let orders =  data.map(o => {
        const addr = addresses.find(a => a.id === o.shippingAddress);

        return {
            ...o,
            orderStatus: statuses.find(s => s.id === o.orderStatusId).description,
            shippingAddressText: `${addr.street} ${addr.city} ${addr.state} ${addr.zipCode}`,
        }
      });

      showOrderList("#order-List", orders);
  }).catch(err => {
        console.log(err);
        return(false);
  });
}

