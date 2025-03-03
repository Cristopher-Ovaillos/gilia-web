/**
 * about controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about', ({ strapi }) => ({
  async find(ctx) {
    const about = await strapi.db.query('api::about.about').findOne({
      populate: {
        people: {
          populate: {
            photo: {
              fields: ['url'], // Aseguramos que solo queremos la URL de la imagen
            },
          },
        },
        image: {
          fields: ['url'],  // Para la imagen de "about"
        },
      },
    });

    return ctx.send(about);
  },
}));
