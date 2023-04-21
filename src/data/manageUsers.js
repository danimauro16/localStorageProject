export const manageUsers = {
  key: "users",

  writeInfo(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  save(data) {
    // TODO
  },

  getAll() {
    // TODO
  },

  findById(id) {
    // TODO.
  },

  deleteById(id) {
    // TODO
  },
};
