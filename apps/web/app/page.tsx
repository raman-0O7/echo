"use client"

import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const handleAdd = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>app/web</p>
          <UserButton />
          <Button onClick={() => handleAdd()}>Add</Button>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>You must have to sign In!</p>
        <SignInButton>
          Sign In
        </SignInButton>
      </Unauthenticated>
    </>
  )
}
