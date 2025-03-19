import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::linea-extension.linea-extension', ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.entityService.findMany('api::linea-extension.linea-extension', {
        fields: ['nombre', 'descripcion'],
        populate: { imagen: true },
      });

      return ctx.send({ data });
    } catch (error) {
      ctx.throw(500, 'Error al obtener las líneas de extensión');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;

      const data = await strapi.db.query('api::linea-extension.linea-extension').findOne({
        where: { id },
        populate: { imagen: true, proyectos: true, instituciones: true, imagenes: true , publicacions:true},
      });

      if (!data) {
        return ctx.notFound('Línea de extensión no encontrada');
      }

      return ctx.send({ data });
    } catch (error) {
      ctx.throw(500, 'Error al obtener la línea de extensión');
    }
  }
}));
