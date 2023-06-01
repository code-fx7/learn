'use strict';

const markTodoAsDone = function ({ store }) {
  return async function (req, res) {
    // Destructuring { id }
    const { id } = req.params;

    try {
      await store.markTodoAsDone ({ id });
    } catch {
      return res.status(404).end();
    }

    res.json({});
  };
};

module.exports = { markTodoAsDone };