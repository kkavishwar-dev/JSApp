const uids = [1,2,3,4,5];

//Bug: forEach loop is synchronous (meaning it doesn't wait
//for the inner async function to complete) - causing data out of order
async function fetchUsers() {
    uids.forEach(async (uid) => {
        try {
          const user = await fetchUserById(uid);
          console.log(user);
        } catch (error) {
          console.log(error);        
        }
    });

    // for(const uid of uids) {
    //     try {
    //         const user = await fetchUserById(uid);
    //         console.log(user);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    console.log("in fetchUsers");    
};

async function fetchUserById(id) {
    return new Promise(resolve => {
       const delay = Math.floor(Math.random() * 1000 + 2000);
        setTimeout(() => {
            resolve({id, delay, name: `User ${id}`});
        }, delay);
    });
}

fetchUsers();
console.log("UI Thread - after fetchUsers");