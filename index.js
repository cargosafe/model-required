
/**
 * Expose `required`.
 */

module.exports = required;

/**
 * Use with required attributes.
 *
 * @param {String} attr
 * @return {Function}
 */

function required(attr){
  return function(Model){
    Model.validate(function(model){
      if (!model.has(attr)) model.error(attr, 'field required');
    });
  }
}

