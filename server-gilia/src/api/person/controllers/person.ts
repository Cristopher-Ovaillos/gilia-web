/**
 * person controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::person.person', ({ strapi }) => ({
  // Método para obtener una sola persona por ID
  async findOne(ctx) {
    const { id } = ctx.params;
    const person = await strapi.db.query('api::person.person').findOne({
      where: { id },
      populate: {
        photo: {
          fields: ['url'],  // Especificamos que solo queremos la URL de la imagen
        },
      },
    });

    if (!person) {
      return ctx.notFound('Person not found');
    }

    return ctx.send(person);
  },

  // Método para obtener todas las personas
  async find(ctx) {
    const people = await strapi.db.query('api::person.person').findMany({
      populate: {
        photo: {
          fields: ['url'],  // Especificamos que solo queremos la URL de la imagen
        },
      },
    });

    return ctx.send(people);
  },
}));
