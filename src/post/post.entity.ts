import { mediaBaseEntity } from "src/common/base.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('posts')
export class PostEntity extends mediaBaseEntity{
    @Column()
    content: string

    @ManyToOne(()=> UserEntity)
    @JoinColumn({name:'UserID'})
    userID: UserEntity

    @Column('json',{default:[]})
    content_img: Array<string>

    @Column({default:0})
    likeCount: number

    @Column()
    location: string
}