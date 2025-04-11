
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::proyecto.proyecto', ({ strapi }) => ({
  

  async findOne(ctx) {
    const { id } = ctx.params;
    
    const proyecto = await strapi.db.query('api::proyecto.proyecto').findOne({
      where: { id },
      populate: {
        imagen: { fields: ['url'] },  
        linea_investigacion: { populate: ['nombre'] },  
        linea_extension: { populate: ['nombre'] },  
      },
    });


    if (!proyecto) {
      return ctx.notFound('Proyecto no encontrado');
    }

 
    return ctx.send({proyecto});
  },


  async find(ctx) {
    const proyectos = await strapi.db.query('api::proyecto.proyecto').findMany({
      populate: {
        imagen: { fields: ['url'] },  
        linea_investigacion: { populate: ['nombre'] },  
        linea_extension: { populate: ['nombre'] }, 
      },
    });

    return ctx.send({proyectos});
  },

}));
