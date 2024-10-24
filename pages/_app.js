// pages/_app.js
import { AppWrapper } from '@/context';
import { ToastContainer } from "react-toastify";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Redirect from '../app/components/Redirect';
import Sound from '../app/components/Sound';
import LogStatus from '../app/components/LogStatus';

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <LogStatus />  {/* Tracks user log in and out */}
            <ToastContainer />
            <Redirect />
            <Sound />
            <TonConnectUIProvider manifestUrl={`${process.env.NEXT_PUBLIC_MANIFEST_URL}`}>
                <Component {...pageProps} />
            </TonConnectUIProvider>
        </AppWrapper>
    );
}

export default MyApp;
