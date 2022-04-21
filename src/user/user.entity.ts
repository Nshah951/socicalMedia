import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('USER')
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number

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
