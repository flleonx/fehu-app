import { Table, Column, Model, AllowNull } from 'sequelize-typescript';

@Table({ underscored: true })
export class User extends Model {
  @AllowNull(false)
  @Column
  firstname: string;

  @AllowNull(false)
  @Column
  lastname: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;
}
