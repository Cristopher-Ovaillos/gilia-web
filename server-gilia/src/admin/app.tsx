import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['es'],
    theme: {
      colors: {
        neutral0: '#ffffff', // Fondo blanco
        primary100: '#f5f5f5', // Color de fondo de ciertos paneles
        primary600: '#212121', // Color principal del admin
        primary700: '#000000', // Texto de botones y encabezados
      }
    },    
    auth: {
      logo: '/icono_gilia.png', 
    },
    menu: {
      logo: '/icono_gilia.png', // Cambia el logo en el menú lateral
    },
  },
  bootstrap(app: StrapiApp) {
    console.log("Strapi Admin cargado", app);
  },
};