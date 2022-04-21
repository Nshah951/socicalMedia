import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { mediaBaseEntity } from 'src/common/base.entity';

@Entity('users')
export class UserEntity extends mediaBaseEntity{

    @Column({nullable:false})
    username: string

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    number: number

    @Column()
    password : string
    
    @BeforeInsert()
    async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}
    // @Column('string', { name: 'follower_count', default: 0 })
    // followerCount: number;

    // @Column ('string', { name: 'followee_count', default: 0 })
    // followeeCount: number;
    
}
