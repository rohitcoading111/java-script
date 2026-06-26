const queue = [];

function takeToken(name) {
  queue.push(name);
  console.log(`${name} got Token ${queue.length}`);
}

function serveCustomer() {
  if (queue.length === 0) {
    console.log("No Customers");
    return;
  }

  const customer = queue.shift();
  console.log(`${customer} Served`);
}

takeToken("Rohit");
takeToken("Aman");
takeToken("Raj");

serveCustomer();
serveCustomer();

console.log(queue);