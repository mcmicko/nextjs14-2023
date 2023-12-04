'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session }) => {
  return <SessionProvider>{session}</SessionProvider>;
};

export default Provider;
