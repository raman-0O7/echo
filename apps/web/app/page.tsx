"use client"

import {useMutation, useQuery} from "convex/react";
import {api} from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const handleAdd = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <Button onClick={() => handleAdd()}>Add</Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
