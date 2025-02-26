/**
 * post controller
 * El controlador, aniadimos operaciones
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const post = await strapi.db.query('api::post.post').findOne({
      where: { id },
      populate:['image']
    });

    if (!post) {
      return ctx.notFound('Post not found');
    }

    return ctx.send(post);
  }
}));
