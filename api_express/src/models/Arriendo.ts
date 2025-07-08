import {
  Column,
  DataType,
  Table,
  Model,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
} from "sequelize-typescript";

@Table({ tableName: "arriendos" })
class Arriendo extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: "id",
  })
  declare id: number;

  @Column({ type: DataType.DATE })
  declare fecha_inicio: Date;

  @Column({ type: DataType.DATE })
  declare fecha_fin: Date;

  @Column({ type: DataType.STRING(6) })
  declare patente_vehiculo: string;

  @Column({ type: DataType.STRING(20) })
  declare tipo_vehiculo: string;

  @Column({ type: DataType.STRING(10) })
  declare rut_cliente: string;

  @Column({ type: DataType.STRING(50) })
  declare nombre_cliente: string;
}

export default Arriendo;
