const { errors } = require("@feathersjs/errors");

module.exports = function (options = {}) {
  return async (context) => {
    const { params, service } = context;
    const { query } = params;
    const { searchField } = options;

    if (!query || !query[searchField]) {
      throw new errors.BadRequest("Search query must include a search term.");
    }

    const searchTerm = query[searchField];

    const result = await service.find({
      query: {
        $search: searchTerm,
      },
      paginate: false,
    });

    context.result = result;

    return context;
  };
};
