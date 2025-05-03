const uids = [1, 2, 3, 4, 5];

// Updated: Using Promise.all to handle asynchronous operations
async function fetchUsers() {
    try {
        const userPromises = uids.map((uid, idx) => fetchUserById(uid, idx * 1000));
        const u = await Promise.all(userPromises);
        //console.log(u);
        u.forEach(user => console.log(user));
    } catch (error) {
        console.log(error);
    }
    console.log("in fetchUsers");
}

async function fetchUserById(id, addDelay) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000 + addDelay);

        if (id === 3) {
            setTimeout(() => {
                reject({ id, delay, name: `User ${id}` });
            }, delay);
        }
        setTimeout(() => {
            resolve({ id, delay, name: `User ${id}` });
        }, delay);
    });
}

fetchUsers();
console.log("UI Thread - after fetchUsers");