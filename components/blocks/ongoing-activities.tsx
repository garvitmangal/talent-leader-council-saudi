import Activity from "./activity";

export default function OngoingActivities() {
    return (
        <div className="flex-none bg-gradient-to-r from-[#F79D67] via-[#F69327] to-[#F06282] p-4 md:p-8 rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl mt-4 md:mt-0">
            <h4 className="font-neuething-sans text-white text-xl md:text-2xl leading-normal font-bold">
                Ongoing activities
            </h4>

            <div className="flex flex-col gap-4 mt-5">
                <div className="flex flex-col gap-4 md:gap-6">
                    <Activity icon={
                        <svg width="40" height="40" className="md:w-[56px] md:h-[54px]" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.14 42.6904H3.84998V2.62988C3.84998 1.83988 4.49003 1.2002 5.28003 1.2002H39.49C40.28 1.2002 40.92 1.83988 40.92 2.62988V26.5898" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.900024 7.26953H6.79004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.900024 14.79H6.79004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.900024 22.3096H6.79004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.900024 29.8203H6.79004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.900024 37.3398H6.79004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.79 14.79H27.97" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.79 19.9004H27.97" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30.88 48.9006L30.75 52.3098L33.59 50.4104C36.2 48.6704 38.35 46.3406 39.88 43.6106L53.9301 18.5598C54.5001 17.5498 54.14 16.2704 53.13 15.7004L50.3101 14.1203C49.3001 13.5503 48.02 13.9102 47.45 14.9202L33.4 39.97C31.87 42.7 31.01 45.7599 30.88 48.8899V48.9006Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M44.83 19.6104L54.97 25.2998L48.41 36.9902" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.83997 42.6904V47.0801C3.83997 47.8701 4.48002 48.5098 5.27002 48.5098H30.9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    } title="CO-AUTHOR <br /> ARTICLES" />

                    <Activity icon={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="42" viewBox="0 0 60 42" fill="none">
                        <path d="M51.7 34.5098C33.59 34.5098 29.83 40.3701 29.83 40.3701V6.61035C29.83 6.61035 33.58 0.75 51.7 0.75V34.5098Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.96997 6.62012H0.97998V40.3799H58.7V6.62012H51.7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.4 14.2803C37.63 13.4403 40.69 12.6698 44.83 12.2598" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.4 20.4805C37.63 19.6405 40.69 18.87 44.83 18.46" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.4 26.6797C37.63 25.8397 40.69 25.0702 44.83 24.6602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.84 6.62012C29.84 6.62012 26.09 0.759766 7.96997 0.759766V34.5195" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.96997 34.5098C26.08 34.5098 29.84 40.3701 29.84 40.3701" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.27 14.2803C22.04 13.4403 18.98 12.6698 14.84 12.2598" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.27 20.4805C22.04 19.6405 18.98 18.87 14.84 18.46" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.27 26.6797C22.04 25.8397 18.98 25.0702 14.84 24.6602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>} title="EXCLUSIVE RESEARCH <br /> AND CASE STUDIES" />

                    <Activity icon={<svg xmlns="http://www.w3.org/2000/svg" width="68" height="50" viewBox="0 0 68 50" fill="none">
                        <path d="M20.96 27.1699L26.13 24.1904" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.25 31.3799L33.42 28.4004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.61 29.2803L29.78 26.29" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31.9 33.4902L37.0699 30.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M39.13 16.6797L45.6899 12.9004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M39.13 16.6797L50.0699 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M50.0699 23L56.63 19.21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45.6899 12.9004L56.63 19.21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.3 24.3604L40.42 9.84961" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.35999 20.9297L34.49 6.42969" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.24 21.8203L35.41 18.8301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M37.53 26.0303L42.7 23.04" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.89 23.9199L39.0601 20.9297" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M41.1801 28.1299L46.35 25.1396" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.4399 43.1104L64.23 24.75C67.51 22.85 65.71 19.8504 64 18.8604L33.83 1.44043L0.75 20.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M66.45 30.1602L33.37 49.2598L2.89001 31.6602C0.0400147 30.0202 0.0400147 25.0797 2.89001 26.7197L30.92 42.9004C33.77 44.5404 33.77 39.6 30.92 37.96L0.75 20.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>} title="MONTHLY INTERNATIONAL <br /> INSIGHTS" />

                    <Activity icon={<svg xmlns="http://www.w3.org/2000/svg" width="58" height="49" viewBox="0 0 58 49" fill="none">
                        <path d="M43.52 17.4199V16.5303" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.95 17.4199V16.5303" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.12 41.8701H23.35C19.95 41.8701 17.1899 44.6303 17.1899 48.0303H41.29C41.29 44.6303 38.53 41.8701 35.13 41.8701H35.12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M38.39 22.21C38.39 27.38 34.11 31.5504 28.9 31.3604C23.94 31.1804 20.08 26.9502 20.08 21.9902V9.99023C20.08 4.93023 24.18 0.830078 29.24 0.830078C34.3 0.830078 38.4 4.93023 38.4 9.99023V22.21H38.39Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.23 36.4902V41.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.0699 21.9902H25.84" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.0699 12.0498H25.84" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.62 21.9902H38.39" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.0699 17.0195H25.84" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.62 17.0195H38.39" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.62 12.0498H38.39" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M43.52 22.21C43.52 30.09 37.11 36.4902 29.24 36.4902C29.07 36.4902 28.9 36.4902 28.72 36.4902C21 36.2202 14.95 29.85 14.95 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.45996 24.96C7.36996 22.94 6.06995 20.1097 6.06995 16.9697C6.06995 13.8297 7.36996 11.0005 9.45996 8.98047M4.77002 6.28027C2.30002 9.15027 0.800049 12.8897 0.800049 16.9697C0.800049 21.0497 2.30002 24.7902 4.77002 27.6602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.78003 27.6699C2.30003 24.7999 0.810059 21.0605 0.810059 16.9805C0.810059 12.9005 2.31003 9.16004 4.78003 6.29004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.45996 8.99023C7.36996 11.0102 6.06995 13.8405 6.06995 16.9805C6.06995 20.1205 7.36996 22.9497 9.45996 24.9697" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M48.33 24.96C50.42 22.94 51.72 20.1097 51.72 16.9697C51.72 13.8297 50.42 11.0005 48.33 8.98047M53.02 6.28027C55.49 9.15027 56.99 12.8897 56.99 16.9697C56.99 21.0497 55.49 24.7902 53.02 27.6602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M53.02 27.6699C55.5 24.7999 56.99 21.0605 56.99 16.9805C56.99 12.9005 55.49 9.16004 53.02 6.29004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M48.33 8.99023C50.42 11.0102 51.72 13.8405 51.72 16.9805C51.72 20.1205 50.42 22.9497 48.33 24.9697" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>} title="FEATURE IN UNPLUGGED <br /> PODCAST SERIES" />

                    <Activity icon={<svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <path d="M40.39 40.8301H46.9L51.7 50.79H1.12L5.92004 40.8301H12.4301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.92004 40.8301V13.3604H18.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.22 13.3604H46.9V40.8301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.01 27.0898C15.88 23.6198 18.82 20.9299 22.46 20.6299" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M37.8101 27.0898C36.9401 23.6198 34 20.9299 30.36 20.6299" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.34 30.71C12.9 26.98 14.79 26.6104 21.03 26.6104H31.79C38.03 26.6104 39.92 26.98 40.48 30.71" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40.66 38.1504C40.44 43.9304 39.07 44.4297 31.79 44.4297H21.03C13.75 44.4297 12.38 43.9304 12.16 38.1504" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.6 35.5195L23.38 31.3496V39.6904L30.6 35.5195ZM30.6 35.5195L23.38 31.3496V39.6904L30.6 35.5195Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.67004 34.4297C9.67004 32.3797 10.34 30.71 12.29 30.71C14.24 30.71 15.83 32.3797 15.83 34.4297C15.83 36.4797 14.25 38.1504 12.29 38.1504C10.33 38.1504 9.67004 36.4797 9.67004 34.4297Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M43.15 34.4297C43.15 32.3797 42.48 30.71 40.53 30.71C38.58 30.71 36.99 32.3797 36.99 34.4297C36.99 36.4797 38.57 38.1504 40.53 38.1504C42.49 38.1504 43.15 36.4797 43.15 34.4297Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.1999 11.5804C18.4699 9.62036 16.59 3.6702 20.53 3.6702C20.53 3.6702 22.3599 -2.62984 33.0999 3.38016C36.1099 5.06016 34.0999 10.0307 33.4599 11.4407" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.02 11.21C32.84 11.15 32.6599 11.1296 32.4699 11.1396C32.2799 10.2096 32.0099 9.42047 31.6899 8.73047C30.5699 9.13047 28.9199 9.11961 27.2199 8.59961C25.3399 8.01961 23.8799 6.98016 23.2499 5.91016C22.1499 6.83016 20.8999 8.42965 20.3399 11.1396C20.1599 11.1296 19.97 11.15 19.79 11.21C18.78 11.54 18.3099 12.8702 18.7399 14.2002C19.0099 15.0502 19.5899 15.6802 20.2299 15.9502C20.7999 18.7902 23.1799 22.6797 25.8299 22.6797H26.9699C29.6199 22.6797 31.9999 18.7902 32.5699 15.9502C33.2099 15.6902 33.79 15.0502 34.06 14.2002C34.49 12.8702 34.02 11.54 33.01 11.21H33.02Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>} title="EXCLUSIVE CONVERSATIONS <br /> ON INSPIREON SERIES" />

                    <Activity icon={<svg xmlns="http://www.w3.org/2000/svg" width="37" height="52" viewBox="0 0 37 52" fill="none">
                        <path d="M6.93994 39.3496H4.56995C2.44995 39.3496 0.73999 41.0697 0.73999 43.1797C0.73999 45.2897 2.45995 47.0098 4.56995 47.0098H10.63" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.71 44.6396V51.2305L14.6801 49.0195L10.64 51.2305V44.6396" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.12 15.1396H26.99" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.12 20.21H26.99" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.33 39.3496C34.33 39.3496 33.05 41.0697 33.05 43.1797C33.05 45.2897 34.33 47.0098 34.33 47.0098" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.93994 1.05957H4.56995C2.44995 1.05957 0.73999 2.77965 0.73999 4.88965" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.73999 43.1904V4.90039" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.71 47.0195H35.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.6 1.05957H6.93994V39.3496H35.6V1.05957Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>} title="CONTRIBUTIONS TO THE <br /> NATIONAL TALENT <br /> STRATEGY PLAYBOOK" />

                    <Activity icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                            <path d="M42.58 30.25L48.96 20.6904L37.14 12.79L30.75 22.3398L36.2 25.9805" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.9301 41.21L18.65 45.6104C18.33 46.2304 18.52 46.9899 19.11 47.3799L22.97 49.96C23.55 50.35 24.33 50.2402 24.78 49.7002L27.58 46.3799" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M40.15 10.5593C40.15 10.5593 40.15 10.4897 40.15 10.4597C40.19 9.27969 40.54 8.08977 41.25 7.03977L43.36 3.88938C45.47 0.739377 49.77 -0.120037 52.92 1.98996C56.07 4.09996 56.9299 8.39953 54.8199 11.5495L52.71 14.6999C52.01 15.7499 51.05 16.5293 49.97 17.0193C49.94 17.0293 49.91 17.0493 49.88 17.0593" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.73 33.5303H18.5L20.08 39.2998C20.53 40.9398 21.56 42.3703 22.97 43.3203L29.75 47.8604C30.78 48.5504 32.18 48.2702 32.87 47.2402C33.56 46.2102 33.28 44.8101 32.25 44.1201L33.6899 45.0801C34.9199 45.9101 36.6 45.5698 37.42 44.3398C38.25 43.1098 37.9101 41.4304 36.6801 40.6104L36.95 40.79C38.27 41.67 40.06 41.32 40.95 40L41.05 39.8496C41.93 38.5296 41.58 36.7396 40.26 35.8496L40.9 36.2803C42.26 37.1903 44.11 36.83 45.02 35.46C45.93 34.09 45.57 32.2498 44.2 31.3398L40.04 28.5498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.24 21.0003H23.47L28.33 18.3802C29.43 17.7802 30.74 17.7498 31.85 18.2698C32.27 18.4698 32.65 18.7303 32.96 19.0403" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M41.45 22.5801L38.27 20.46" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 48.6504L16.9 54.79" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.68994 36.8604H12.73V17.5303H1.68994" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    } title="EDITORIAL INTERVIEWS <br /> AND ARTICLES" />

                    <Activity icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="46" viewBox="0 0 66 46" fill="none">
                            <path d="M29.22 45.0198C28.76 45.3698 28.15 44.8598 28.41 44.3498C30.62 39.9998 35.27 30.6601 34.2 31.0901C32.81 31.6501 16 33.83 16.22 33.51C16.45 33.19 0.579956 23.0698 1.06996 22.3098C1.54996 21.5398 11.11 6.07028 11.86 5.79028C12.61 5.51028 42.1501 1.10024 43.5601 1.50024C44.9801 1.90024 64.19 14.6599 64.37 15.1799C64.55 15.6999 59.08 29.73 57.89 30.72C56.7 31.71 52.14 27.2699 50.28 28.6799C48.76 29.8299 34.48 40.93 29.23 45.01L29.22 45.0198Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>} title="EXCLUSIVE ACCESS TO <br /> TECHHR SINGAPORE/INDIA" />

                    <Activity icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="48" viewBox="0 0 53 48" fill="none">
                            <path d="M42.1011 41.9502C41.1111 43.3802 40.1111 44.8102 39.1211 46.2402C39.5511 46.3602 39.9909 46.4698 40.4209 46.5898C40.1409 41.4298 39.8508 36.2596 39.5708 31.0996C39.2208 31.2996 38.871 31.5002 38.521 31.7002C43.001 34.2902 47.4712 36.8797 51.9512 39.4697C52.0112 39.0397 52.0611 38.6204 52.1211 38.1904C49.8411 38.5104 47.551 38.8196 45.271 39.1396C44.821 39.1996 44.6411 39.8201 44.8511 40.1601C46.3311 42.5701 47.8111 44.9804 49.2911 47.4004C49.7611 48.1604 50.9713 47.4602 50.4913 46.7002C49.0113 44.2902 47.5308 41.8799 46.0508 39.4599C45.9108 39.7999 45.7709 40.1404 45.6309 40.4804C47.9109 40.1604 50.201 39.8502 52.481 39.5302C53.101 39.4402 53.1209 38.53 52.6509 38.25C48.1709 35.66 43.7012 33.0704 39.2212 30.4804C38.7812 30.2304 38.1409 30.54 38.1709 31.08C38.4509 36.24 38.741 41.4103 39.021 46.5703C39.061 47.2803 39.9208 47.4899 40.3208 46.9199C41.3108 45.4899 42.3108 44.0598 43.3008 42.6298C43.8108 41.8898 42.6011 41.1896 42.1011 41.9296V41.9502Z" fill="white" />
                            <path d="M51.0308 12.0397C46.2908 14.9297 41.551 17.8099 36.811 20.6999C34.691 21.9899 32.6009 23.3497 30.4409 24.5797C29.2009 25.2897 27.3408 24.42 26.0508 24.11C19.5008 22.53 12.9509 20.94 6.40087 19.36C5.63087 19.17 4.86107 18.9995 4.10107 18.7995C2.37107 18.3595 1.13074 16.7996 1.51074 14.9596C1.91074 13.0296 3.83111 12.1297 5.64111 12.5397C6.52111 12.7397 7.39099 12.9594 8.27099 13.1794C14.631 14.7194 20.9808 16.2497 27.3408 17.7897C27.8608 17.9097 28.3711 18.0596 28.8911 18.1696C30.0011 18.3896 30.7911 17.9293 31.6811 17.3893C34.2011 15.8493 36.721 14.3199 39.251 12.7799C42.221 10.9699 45.1909 9.15928 48.1709 7.34928C48.9509 6.86928 49.751 6.40959 50.521 5.91959C51.511 5.27959 51.5009 3.9794 50.2109 3.7194C48.2509 3.3294 46.1909 3.18959 44.2109 2.91959C40.5809 2.43959 36.9508 1.96014 33.3208 1.48014C31.0208 1.18014 28.7209 0.81924 26.4209 0.55924C24.9009 0.39924 23.1508 1.61967 21.8408 2.24967C15.9108 5.09967 9.98078 7.94924 4.05078 10.8092C3.59078 11.0292 3.13089 11.2494 2.67089 11.4694C1.86089 11.8594 2.57109 13.0596 3.37109 12.6696C8.34109 10.2796 13.321 7.88967 18.291 5.49967C20.601 4.38967 22.8909 3.26959 25.2109 2.16959C26.4209 1.59959 28.2708 2.19979 29.5308 2.36979C36.0008 3.22979 42.4611 4.0901 48.9311 4.9401C49.2511 4.9801 49.6412 5.09975 49.9712 5.07975C50.0212 5.07975 50.1509 5.13002 50.1909 5.11002C50.3409 5.02002 50.1907 4.61928 50.0107 4.59928C49.8807 4.58928 49.5309 4.88963 49.4209 4.95963L48.1811 5.70963C45.3311 7.44963 42.4809 9.17959 39.6309 10.9196C36.9209 12.5696 34.211 14.2198 31.501 15.8698C30.921 16.2198 30.241 16.8 29.541 16.82C28.951 16.83 28.331 16.5896 27.771 16.4596C21.381 14.9096 14.9808 13.37 8.59082 11.82C6.13082 11.23 3.47111 10.2593 1.39111 12.3893C-0.188892 13.9993 -0.358794 16.5793 0.991206 18.3893C1.74121 19.3993 2.81097 19.9196 4.00097 20.2096C10.071 21.6796 16.1512 23.1498 22.2212 24.6198C24.3912 25.1498 26.561 25.7299 28.751 26.1999C30.531 26.5799 32.1008 25.2097 33.5308 24.3297C39.1608 20.8997 44.7909 17.4795 50.4209 14.0495C50.8609 13.7795 51.3012 13.5097 51.7412 13.2497C52.5112 12.7797 51.811 11.5795 51.041 12.0495L51.0308 12.0397Z" fill="white" />
                            <path d="M26.4411 5.26022C30.0711 5.74022 33.691 6.22065 37.321 6.70065C38.211 6.82065 38.201 5.42026 37.321 5.30026C33.691 4.82026 30.0711 4.34081 26.4411 3.86081C25.5511 3.74081 25.5611 5.14022 26.4411 5.26022Z" fill="white" />
                            <path d="M32.8806 8.01022C29.2506 7.53022 25.6307 7.05077 22.0007 6.57077C21.1107 6.45077 21.1207 7.85018 22.0007 7.97018C25.6307 8.45018 29.2506 8.93061 32.8806 9.41061C33.7706 9.53061 33.7606 8.13022 32.8806 8.01022Z" fill="white" />
                            <path d="M17.1609 34.5103C17.9509 34.1603 18.7507 33.8104 19.5407 33.4604C19.3607 33.4804 19.1807 33.5108 19.0007 33.5308C18.8607 33.5108 18.7707 33.3208 19.0007 33.5308C19.1007 33.6208 19.1907 33.7103 19.2907 33.8003C19.6007 34.0903 19.9207 34.3804 20.2307 34.6704C20.6207 35.0304 21.1006 35.68 21.6506 35.77C21.9706 35.82 22.2506 35.7307 22.4406 35.4507C22.7206 35.0207 22.6106 34.3901 22.6106 33.8901V31.1606C22.6106 30.0406 22.9606 28.6606 21.6106 28.3306C20.1106 27.9706 18.5705 27.441 17.0505 27.231C15.5205 27.011 15.9309 29.1003 15.9309 30.0503V33.1304C15.9309 33.8304 15.9108 34.5408 16.8108 34.6108C17.7008 34.6808 17.7008 33.2904 16.8108 33.2104C16.7708 33.2104 16.7306 33.2107 16.6906 33.2007C16.8906 33.3207 17.0907 33.4303 17.2907 33.5503C17.4407 33.8203 17.3108 33.7903 17.3308 33.5103C17.3408 33.3203 17.3308 33.1204 17.3308 32.9204V28.9507C17.3308 28.7307 17.3408 28.5105 17.3308 28.2905C17.3108 28.0405 17.4405 27.9503 17.2805 28.2603C17.1405 28.3703 17.0006 28.4706 16.8606 28.5806C16.5706 28.6406 16.5708 28.5308 16.8108 28.6108C16.9908 28.6708 17.1806 28.7007 17.3606 28.7407C17.9506 28.8807 18.5408 29.0204 19.1208 29.1704C19.6808 29.3104 20.2508 29.4406 20.8108 29.5806C21.0008 29.6306 21.1906 29.6702 21.3806 29.7202C21.7006 29.8002 21.5006 29.8202 21.4206 29.7202C21.3506 29.5602 21.2809 29.391 21.2209 29.231V34.0405C21.2209 34.2605 21.2209 34.4807 21.2209 34.7007C21.2209 35.0107 21.1209 34.9305 21.2409 34.7505C21.5009 34.6405 21.7705 34.5402 22.0305 34.4302C22.2605 34.4702 22.2005 34.6602 22.0705 34.4702C21.9905 34.3602 21.8507 34.2604 21.7507 34.1704C21.4807 33.9204 21.2209 33.6802 20.9509 33.4302C20.5709 33.0802 20.1609 32.5503 19.7009 32.3003C19.1609 32.0103 18.5708 32.4006 18.0808 32.6206C17.5408 32.8606 17.0109 33.0906 16.4709 33.3306C15.6509 33.6906 16.3606 34.8908 17.1706 34.5308L17.1609 34.5103Z" fill="white" />
                            <path d="M35.3507 37.5903C34.2407 38.2603 33.1403 38.9408 32.0303 39.6108C31.2103 40.1108 30.1707 41.0306 29.1607 40.8706C27.2007 40.5606 25.2406 39.9204 23.3106 39.4604C17.2406 37.9904 11.1804 36.53 5.11042 35.06C4.31042 34.87 3.43056 34.7407 2.75056 34.2407C0.100556 32.3107 1.79071 28.3206 4.91071 28.4106C5.81071 28.4406 5.81071 27.0402 4.91071 27.0102C2.35071 26.9302 0.130341 28.8702 0.0303411 31.4702C-0.0496589 33.6702 1.48061 35.5508 3.56061 36.1108C5.57061 36.6508 7.62069 37.0905 9.64069 37.5805C15.9207 39.1005 22.2006 40.6701 28.5006 42.1401C28.8906 42.2301 29.2605 42.3202 29.6705 42.3002C30.4505 42.2602 31.0808 41.8104 31.7208 41.4204C33.1608 40.5404 34.6104 39.6607 36.0504 38.7807C36.8204 38.3107 36.1207 37.1105 35.3507 37.5805V37.5903Z" fill="white" />
                            <path d="M51.021 28.0495C49.201 29.1595 47.3708 30.2696 45.5508 31.3796C44.7808 31.8496 45.481 33.0498 46.251 32.5798C48.071 31.4698 49.9012 30.3597 51.7212 29.2497C52.4912 28.7797 51.791 27.5795 51.021 28.0495Z" fill="white" />
                            <path d="M13.8307 29.1606C11.1007 28.5006 8.38054 27.8402 5.65054 27.1802C4.44054 26.8902 3.0606 26.7302 2.2106 25.7202C0.330597 23.5002 2.14056 20.3206 4.92056 20.4106C5.82056 20.4406 5.82056 19.0402 4.92056 19.0102C2.71056 18.9402 0.650792 20.3903 0.160792 22.5903C-0.279208 24.5803 0.650851 26.7309 2.47085 27.6909C3.35085 28.1609 4.4105 28.3103 5.3605 28.5503C6.9605 28.9403 8.57056 29.3304 10.1706 29.7104C11.2706 29.9804 12.3606 30.2402 13.4606 30.5102C14.3306 30.7202 14.7007 29.3806 13.8307 29.1606Z" fill="white" />
                            <path d="M51.021 20.0496C44.181 24.2096 37.4112 28.5196 30.4912 32.5496C29.8312 32.9296 29.251 32.8895 28.521 32.7195C27.351 32.4395 26.171 32.1499 25.001 31.8699C24.131 31.6599 23.7609 32.9995 24.6309 33.2195C25.7009 33.4795 26.7709 33.7398 27.8409 33.9998C28.9209 34.2598 29.8612 34.5202 30.9112 33.9402C32.0512 33.3202 33.1412 32.58 34.2412 31.91C38.8212 29.12 43.4112 26.3298 47.9912 23.5398C49.2312 22.7798 50.4812 22.0193 51.7212 21.2693C52.4912 20.7993 51.791 19.6001 51.021 20.0701V20.0496Z" fill="white" />
                        </svg>
                    } title="TLC STUDY CIRCLE" />
                </div>
            </div>
        </div>
    )
}