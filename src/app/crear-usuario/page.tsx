import React from 'react';
import { RenderUsers } from './renderUsers';
import type { ParamsProps } from './crear-usuario.types';

const ACCESS = 'administradores';
const LIMIT = 20;

export default function SignUp({ searchParams }: ParamsProps) {
  let { search, page, userId } = searchParams;
  search = search ?? undefined
  page = page ?? 0
  return (
    <>
      {RenderUsers({ search, page, limit: LIMIT, access: ACCESS, userId })}
    </>
  );
}
