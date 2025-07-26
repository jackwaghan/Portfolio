import { resumeLink } from "@/utils/db";
import { redirect } from "next/navigation";

export const runtime = "edge";

const Page = () => {
  return redirect(resumeLink);
};

export default Page;
