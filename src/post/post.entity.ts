import { mediaBaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity('POSTS')
export class PostEntity extends mediaBaseEntity{
    @Column()
    content: string

    @Column('json',{default:[]})
    content_img: Array<string>

    @Column({default:0})
    likeCount: number

    @Column()
    location: string
}