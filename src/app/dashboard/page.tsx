import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  // if (!user || user.id ) redirect

  return <div>{user.id}</div>;
};

export default Page;
