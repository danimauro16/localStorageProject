export const manageOrders = {
  key: "orders",

  writeData(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  save(order) {
    const orders = this.getAll();
    localStorage.setItem(this.key, JSON.stringify([...orders, order]));
  },

  getAll() {
    return JSON.parse(localStorage.getItem(this.key));
  },

  findById(id) {
    const order = this.getAll().find((order) => order.id == id);
    return !order ? null : order;
  },

  deleteById(id) {
    if (this.findById(id)) {
      const newOrders = this.getAll().filter((order) => order.id !== id);
      this.writeData(newOrders);
    }
    throw new Error(`The order with id "${id}" does not exist`);
  },
};
