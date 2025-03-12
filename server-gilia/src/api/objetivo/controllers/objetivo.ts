/**
 * objetivo controller
 * Controlador para manejar las solicitudes de la colección "objetivos"
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::objetivo.objetivo', ({ strapi }) => ({
  
  // Método para obtener un solo objetivo por su ID
  async findOne(ctx) {
    const { id } = ctx.params;

    // Realizamos la consulta para obtener el objetivo
    const objetivo = await strapi.db.query('api::objetivo.objetivo').findOne({
      where: { id },
    });

    // Si no se encuentra el objetivo, retornamos un error 404
    if (!objetivo) {
      return ctx.notFound('Objetivo no encontrado');
    }

    // Si se encuentra, retornamos el objetivo
    return ctx.send(objetivo);
  },

  // Método para obtener todos los objetivos
  async find(ctx) {
    const objetivos = await strapi.db.query('api::objetivo.objetivo').findMany();

    return ctx.send(objetivos);
  },

}));
