// import { createEvent, createStore, sample } from 'effector';
// import { persist } from '@effector-storage/react-native-async-storage';

// type Tokens = {
//   accessToken: string;
// };

// export const setTokens = createEvent<Tokens>();

// export const $tokens = createStore<Tokens | null>(null);

// sample({
//   clock: setTokens,
//   target: $tokens,
// });

// persist({ store: $tokens, key: 'auth' });
