import { UserEntity } from "src/user/user.entity";
import {mediaBaseEntity} from "../common/base.entity"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity('passwords')
export class PasswordEntity extends mediaBaseEntity{
    @JoinColumn()
    @OneToOne(()=> UserEntity)
    user: UserEntity

    @Column({nullable: false})
    password:string
}