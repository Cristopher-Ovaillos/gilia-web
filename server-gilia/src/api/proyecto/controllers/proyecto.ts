/**
 * proyecto controller
 * Controlador para manejar las solicitudes de la colección "proyectos"
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::proyecto.proyecto', ({ strapi }) => ({
  
  // Método para obtener un solo proyecto por su ID
  async findOne(ctx) {
    const { id } = ctx.params;

    // Realizamos la consulta para obtener el proyecto
    const proyecto = await strapi.db.query('api::proyecto.proyecto').findOne({
      where: { id },
      populate: {
        imagen: { fields: ['url'] },  // Solo obtenemos la URL de la imagen
        linea_investigacion: { populate: ['nombre'] },  // Solo mostramos el nombre de la línea de investigación
        linea_extension: { populate: ['nombre'] },  // Solo mostramos el nombre de la línea de extensión
      },
    });

    // Si no se encuentra el proyecto, retornamos un error 404
    if (!proyecto) {
      return ctx.notFound('Proyecto no encontrado');
    }

    // Si se encuentra, retornamos el proyecto con los datos relacionados
    return ctx.send(proyecto);
  },

  // Método para obtener todos los proyectos
  async find(ctx) {
    const proyectos = await strapi.db.query('api::proyecto.proyecto').findMany({
      populate: {
        imagen: { fields: ['url'] },  // Solo obtenemos la URL de la imagen
        linea_investigacion: { populate: ['nombre'] },  // Solo mostramos el nombre de la línea de investigación
        linea_extension: { populate: ['nombre'] },  // Solo mostramos el nombre de la línea de extensión
      },
    });

    return ctx.send(proyectos);
  },

}));
