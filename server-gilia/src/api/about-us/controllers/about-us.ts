/**
 * about-us controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::about-us.about-us', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const aboutus = await strapi.db.query('api::about-us.about-us').findOne({
        where: { id },
        populate:['image']
      });
  
      if (!aboutus) {
        return ctx.notFound('about-us not found');
      }
  
      return ctx.send(aboutus);
    }
  }));