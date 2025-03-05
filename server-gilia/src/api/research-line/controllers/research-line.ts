/**
 * research-line controller
 */

import { factories } from '@strapi/strapi'

//export default factories.createCoreController('api::research-line.research-line');

export default factories.createCoreController('api::research-line.research-line', ({ strapi }) => ({
    // metodo para obtener una sola research-linea por ID
    async findOne(ctx) {
      const { id } = ctx.params;
      const researchline = await strapi.db.query('api::research-line.research-line').findOne({
        where: { id },
        populate: {
          image: {
            fields: ['url'],  // Especificamos que solo queremos la URL de la imagen
          },
          image2: {
            fields: ['url'],  // Especificamos que solo queremos la URL de la imagen
          },
        },
      });
  
      if (!researchline) {
        return ctx.notFound('research-line not found');
      }
  
      return ctx.send(researchline);
    },
  

  }));
  