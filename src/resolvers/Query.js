const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),

  // async items(parent, args, ctx, info) {
  //   console.log('asdasd', await ctx.db.query);
  //   const item = await ctx.db.query.items();

  //   //we will api request here to the db

  //   return item;
  // },
};

module.exports = Query;
