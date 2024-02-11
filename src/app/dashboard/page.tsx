import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <div>{user?.email}</div>;
};

export default Page;
