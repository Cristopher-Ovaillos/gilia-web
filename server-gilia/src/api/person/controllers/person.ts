/**
 * person controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::person.person', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const person = await strapi.db.query('api::person.person').findOne({
        where: { id },
        populate:['image']
      });
  
      if (!person) {
        return ctx.notFound('about-us not found');
      }
  
      return ctx.send(person);
    }
  }));