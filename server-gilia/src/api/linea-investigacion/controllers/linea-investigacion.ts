/**
 * linea-investigacion controller
 */


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::linea-investigacion.linea-investigacion', ({ strapi }) => ({
  async findOne(ctx) {

    try {

      const { id } = ctx.params;

      // Consulta con 'populate' para obtener imagen, publicaciones y proyectos
      const data = await strapi.db.query('api::linea-investigacion.linea-investigacion').findOne({
        where: { id },

        populate: { imagen: true, proyectos: true, instituciones: true, people: true, publicacions: true },
      });

      if (!data) {
        return ctx.notFound('Linea de investigación no encontrada');
      }
      return ctx.send({ data });
    } catch (error) {
      ctx.throw(500, 'Error al obtener la línea de investigacion');

    }



  }
}));
