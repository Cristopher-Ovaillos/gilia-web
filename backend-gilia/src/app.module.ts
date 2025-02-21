import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Para cargar las variables de entorno desde el archivo .env
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, 
    }),
    // cnfigura la conexion con la base de datos usando TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres', // definimos la base de datos utilizada
      host: process.env.DB_HOST, // Host de la base de datos 
      port: Number(process.env.DB_PORT), // Puerto de la base de datos 
      username: process.env.DB_USER, // Usuario de la base de datos 
      password: process.env.DB_PASSWORD, // Contraseña de la base de datos 
      database: process.env.DB_NAME, // Nombre de la base de datos 
      autoLoadEntities: true, // Carga las entidades automaticamente
      synchronize: true, // Solo en desarrollo. En produccion usa migraciones
    }),
    UsersModule, 
    AuthModule,  
  ],
})
export class AppModule {}
