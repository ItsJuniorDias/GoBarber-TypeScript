// import AppError from '@shared/errors/AppError';

import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to udpate the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '121212',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Bianca Valverde',
      email: 'juniordias_@live.com',
    });

    expect(updateUser.name).toBe('Bianca Valverde');
    expect(updateUser.email).toBe('juniordias_@live.com');
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '121212',
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@example.com',
      password: '1245241',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Ale Junior',
        email: 'junin@live.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Bianca Valverde',
      email: 'juniordias_@live.com',
      old_password: '123456',
      password: '121212',
    });

    expect(updateUser.password).toBe('121212');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Bianca Valverde',
        email: 'juniordias_@live.com',
        password: '121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Bianca Valverde',
        email: 'juniordias_@live.com',
        old_password: 'wrong-old-password',
        password: '121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
