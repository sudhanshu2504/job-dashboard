import {NextUIProvider} from "@nextui-org/react";
import Navigation from '@/components/Navbar';
import Main from '@/components/Main';

export default function Home() {
  return (<>
    <NextUIProvider>
      <Navigation/>
      <Main/>
    </NextUIProvider>
  </>
  );
}
