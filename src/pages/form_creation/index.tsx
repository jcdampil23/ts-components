import { type NextPage } from "next";
import { fakeData, users } from "~/components/dashboard/data";

const Dashboard: NextPage<{
  users: Array<{ id: number; name: string; userRole: number }>;
  fakeData: Array<{ data: string; id: number; author: number }>;
}> = ({ users, fakeData }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <ul>
            </ul>
          </h1>
        </div>
      </main>
    </>
  );
};
export function getServerSideProps() {
  // Fetch data from external API
  // await fetch("localhost/test");
  // Pass data to the page via props
  return { props: { users, fakeData } };
}
export default Dashboard;
