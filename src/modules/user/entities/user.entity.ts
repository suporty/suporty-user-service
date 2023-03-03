import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '사용자 코드' })
  seq: number;

  @Column({ type: 'varchar', length: 20, unique: true, comment: '아이디' })
  id: string;

  @Column({ type: 'varchar', length: 200, comment: '비밀번호' })
  password: string;

  @Column({
    name: 'profile_image_url',
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '프로필 사진 URL',
  })
  profileImageUrl: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '이메일' })
  email: string;

  @Column({ type: 'varchar', length: 20, unique: true, comment: '닉네임' })
  nickname: string;

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'SLEEP', 'WITHDRAWAL'],
    default: 'ACTIVE',
    comment: '상태 {ACTIVE(활동)|SLEEP(휴면)|WITHDRAWAL(탈퇴)}',
  })
  status: string;

  @CreateDateColumn({
    name: 'reg_datetime',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '등록일시',
  })
  regDatetime: Date;

  @UpdateDateColumn({
    name: 'update_datetime',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '수정일시',
  })
  updateDatetime: Date;
}
