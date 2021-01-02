import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const authenticateUser = new AuthenticateUserService(fakeUsersRepository);
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Junin',
      email: 'junin@live.com',
      password: '121212',
    });

    const response = await authenticateUser.execute({
      email: 'junin@live.com',
      password: '121212',
    });

    expect(response).toHaveProperty('token');
  });
});
