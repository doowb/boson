module.exports = function (config) {
  config = config || {};
  opts = config.options || {};

  var helpers = {
    foo: function (context, options) {
      var ctx = _.extend({}, config.context, opts.example, context, options.hash || {});
      return options.fn(this, { data: ctx });
    }
  };
  return helpers;
};