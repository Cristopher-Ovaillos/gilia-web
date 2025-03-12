/**
 * linea-investigacion controller
 */


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::linea-investigacion.linea-investigacion', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // Consulta con 'populate' para obtener imagen, publicaciones y proyectos
    const lineaInvestigacion = await strapi.db.query('api::linea-investigacion.linea-investigacion').findOne({
      where: { id },
      populate: ['imagen', 'publicacions', 'proyectos'],  // Agregar campos relacionados
    });

    if (!lineaInvestigacion) {
      return ctx.notFound('Linea de investigación no encontrada');
    }

    return ctx.send(lineaInvestigacion);
  }
}));
