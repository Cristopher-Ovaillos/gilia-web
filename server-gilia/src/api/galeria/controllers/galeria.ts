/**
 * galeria controller
 * Controlador para la entidad "galeria", con métodos para obtener todas las galerías o una específica por su ID.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::galeria.galeria', ({ strapi }) => ({
  
  // Método para obtener una sola galería por su ID
  async findOne(ctx) {
    const { id } = ctx.params;

    // Realizamos la consulta para obtener la galería
    const gallery = await strapi.db.query('api::galeria.galeria').findOne({
      where: { id },
      populate: {
        imagenes: { // Incluimos todas las imágenes en la respuesta
          fields: ['url'],
        },
      },
    });

    // Si no se encuentra la galería, retornamos un error 404
    if (!gallery) {
      return ctx.notFound('Gallery not found');
    }

    // Si se encuentra, retornamos la galería con las imágenes
    return ctx.send(gallery);
  },

  // Método para obtener todas las galerías
  async find(ctx) {
    const galleries = await strapi.db.query('api::galeria.galeria').findMany({
      populate: {
        imagenes: { // Incluimos todas las imágenes en la respuesta
          fields: ['url'],
        },
      },
    });

    return ctx.send(galleries);
  },

}));
