"use client";

import { useParams } from "next/navigation";

type Params = {
  id: string;
};

const Page = () => {
  const { id } = useParams<Params>();

  return <>ID: {id}</>;
};

export default Page;
