import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Ale Junior',
      email: 'junin@live.com',
      password: '121212',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Lush Boy',
      email: 'lush@live.com',
      password: '121212',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Lush Boy',
      email: 'lush@live.com',
      password: '121212',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
