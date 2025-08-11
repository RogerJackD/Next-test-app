import { Navbar } from '@/components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (

    <>
      <Navbar/>
      <main className="flex flex-col text-center p-24">
          <span className="text-lg">text layout (general)</span>
          { children }
      </main>
    </>
  );
}