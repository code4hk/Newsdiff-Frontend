
'use strict'

// extract id from a news item
export function NewsIdOf (item) {
  return item._id.$oid;
}
