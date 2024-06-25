"use client";
import React from "react";

const TabNavigation = () => {
  return (
    <div className="border-b px-8">
      <div className="flex container flex-row gap-8 mx-auto">
        <button className="border-b-2 border-[#DC4A2D] text-[#DC4A2D] font-semibold w-fit py-4">
          Job Preview
        </button>
        <button className="text-[#888888] font-medium w-fit py-4">
          Applicants
        </button>
        <button className="text-[#888888] font-medium w-fit py-4">
          Match
        </button>
        <button className="text-[#888888] font-medium w-fit py-4">
          Messages
        </button>
      </div>
    </div>
  );
};
const Section = () => {
  return (
    <div className="w-full h-auto flex flex-wrap flex-row">
      {/* left section  */}
      <div className="w-full lg:w-3/4 h-auto mx-auto">
        <div className="py-8 px-8 lg:px-28 border-b flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="font-semibold text-3xl">
              Senior Product Designer
            </div>
            <div className="font-normal text-xs text-[#888888] flex items-center gap-3">
              <svg
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2.5" r="2" fill="#D1D1D1" />
              </svg>
              <span>posted 2 days ago</span>
              <span className="border-2 px-2.5 py-1 rounded-full text-[#067647] bg-[#ABEFC6] bg-opacity-40 border-[#ABEFC6] flex items-center gap-2 font-medium">
                <svg
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3.5" r="3" fill="#17B26A" />
                </svg>
                Open
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="font-medium text-lg text-[#888888] flex items-center gap-3">
              <span className="flex items-center gap-2">
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z"
                    stroke="#5D5D5D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 21.5C13 17.5 17 13.9183 17 9.5C17 5.08172 13.4183 1.5 9 1.5C4.58172 1.5 1 5.08172 1 9.5C1 13.9183 5 17.5 9 21.5Z"
                    stroke="#5D5D5D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Delaware, USA
              </span>

              <svg
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2.5" r="2" fill="#D1D1D1" />
              </svg>
              <span className="flex items-center gap-2">
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3.5C12 4.60457 9.53757 5.5 6.5 5.5C3.46243 5.5 1 4.60457 1 3.5M12 3.5C12 2.39543 9.53757 1.5 6.5 1.5C3.46243 1.5 1 2.39543 1 3.5M12 3.5V5M1 3.5V15.5C1 16.6046 3.46243 17.5 6.5 17.5M6.5 9.5C6.33145 9.5 6.16468 9.49724 6 9.49185C3.19675 9.39999 1 8.54328 1 7.5M6.5 13.5C3.46243 13.5 1 12.6046 1 11.5M21 10C21 11.1046 18.5376 12 15.5 12C12.4624 12 10 11.1046 10 10M21 10C21 8.89543 18.5376 8 15.5 8C12.4624 8 10 8.89543 10 10M21 10V17.5C21 18.6046 18.5376 19.5 15.5 19.5C12.4624 19.5 10 18.6046 10 17.5V10M21 13.75C21 14.8546 18.5376 15.75 15.5 15.75C12.4624 15.75 10 14.8546 10 13.75"
                    stroke="#5D5D5D"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                $300 - $400
              </span>
            </div>
          </div>
        </div>
        <div className="py-8 px-8 lg:px-28 border-b flex flex-row flex-wrap justify-normal gap-12">
          <div className="flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Skills Required</h2>
            <span className="font-normal rounded-lg border-2 border-[#D0D5DD] px-[4px] py-[2px] text-[10px] flex items-center gap-1"><img src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-2.png" alt="Figma" className="h-5 w-auto"/>Figma</span>
            <span className="font-normal rounded-lg border-2 border-[#D0D5DD] px-[4px] py-[2px] text-[10px] flex items-center gap-1"><img src="https://www.imagensempng.com.br/wp-content/uploads/2020/12/illustrator.png" alt="Adobe Illustrator" className="h-5 w-5"/>Adobe Illustrator</span>
            <span className="font-normal rounded-lg border-2 border-[#D0D5DD] px-[4px] py-[2px] text-[10px] flex items-center gap-1"><img src="https://www.fluxconsulting.com/wp-content/uploads/2021/03/XD_lockup.png" alt="Adobe XD" className="h-5 w-5"/>Adobe XD</span>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Preferred Language</h2>
            <h2 className="font-semibold">English</h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Type</h2>
            <h2 className="font-semibold">Full-Time</h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Years of Experience</h2>
            <h2 className="font-semibold">3+ Years of Experience</h2>
          </div>
        </div>
        <div className="py-8 px-8 lg:px-28 border-b flex flex-row flex-wrap justify-normal">
          <div className="flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-sm text-[#888888]">About the job</h2>
            <p className="font-normal text-sm">1. Handle the UI/UX research design</p>  
            <p className="font-normal text-sm">2. Work on researching the latest web applications design and trends</p>  
            <p className="font-normal text-sm">3. Work on conceptualizing and visualizing</p>  
            <p className="font-normal text-sm">4. Work on creating graphics content and other graphic related works</p>  
            <span className="font-normal text-sm">Benefits: 
              <li className="ml-2">Health Insurance</li>  
              <li className="ml-2">Provident Funds</li>
            </span>  
            <span className="font-normal text-sm">Schedule: 
              <li className="ml-2">Day Shift</li>  
            </span>  
            <span className="font-normal text-sm">Supplement pay types: 
              <li className="ml-2">Performance bonus</li>  
              <li className="ml-2">Yearly bonus</li>  
            </span>  
            <p className="font-normal text-sm">Work Location : In person</p>  
          </div>
        </div>
        <div className="py-8 px-8 lg:px-28 border-b flex flex-col flex-wrap justify-normal">
          <div className="flex gap-2 justify-start items-center"> <img src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/65788-6be6737b1863abf0839ccf75db32c8f9-medium_jpg.jpg?buster=1527088802" alt="Atlassian" className="h-10 w-auto rounded-md"/>
            <h2 className="font-medium text-lg ">Atlassian</h2>
          </div>
          <div className="w-full flex flex-row justify-start items-start gap-28 text-sm my-4">
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Company Size</h2>
            <h2 className="font-semibold">1k-2k Employees</h2>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Type</h2>
            <h2 className="font-semibold">Private</h2>
          </div>
          </div>
          <div className="w-full flex flex-row justify-start items-start gap-28 text-sm my-4">
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Sector</h2>
            <h2 className="font-semibold">Information Technology, Infrastructure</h2>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Funding</h2>
            <h2 className="font-semibold">Bootstrapped</h2>
          </div>
          </div>
          <div className="w-full flex flex-row justify-start items-start gap-28 text-sm my-4">
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Founded In</h2>
            <h2 className="font-semibold">2019</h2>
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start gap-2 text-sm">
            <h2 className="font-medium text-[#888888]">Founded by</h2>
            <h2 className="font-semibold">Scott Farquhar, Mike Cannon-Brookes</h2>
          </div>
          </div>
        </div>
      </div>
      {/* right section  */}
      <div className="w-full lg:w-1/4 bg-[#fcfcfc] drop-shadow-xl h-auto flex flex-col py-9 px-6">
        <div className="w-full flex justify-center items-center gap-4">
          <button className="text-[#dc4a2d] border-[#dc4a2d] border px-6 py-3 text-base flex rounded-xl justify-center items-center gap-2 bg-orange-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
                stroke="#DC4A2D"
                strokeLinecap="round"
                strokLinejoin="round"
              />
            </svg>
            Delete Job
          </button>
          <button className="text-white border-[#dc4a2d] border px-6 py-3 text-base flex rounded-xl justify-center items-center gap-2 bg-[#dc4a2d]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokLinejoin="round"
              />
            </svg>
            Edit Job
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-6 mt-6 gap-3">
          <div className="w-full flex flex-row justify-between items-center py-4 font-normal border-b">
            <span className="flex flex-row gap-3 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3334 17.5V15.8333C18.3334 14.2801 17.271 12.9751 15.8334 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43443 15 5.83333C15 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.913 14.5577C13.5746 13.741 12.9257 13.092 12.109 12.7537C11.4964 12.5 10.7198 12.5 9.16669 12.5H6.66669C5.11355 12.5 4.33698 12.5 3.72441 12.7537C2.90765 13.092 2.25874 13.741 1.92042 14.5577C1.66669 15.1703 1.66669 15.9469 1.66669 17.5M11.25 5.83333C11.25 7.67428 9.75764 9.16667 7.91669 9.16667C6.07574 9.16667 4.58335 7.67428 4.58335 5.83333C4.58335 3.99238 6.07574 2.5 7.91669 2.5C9.75764 2.5 11.25 3.99238 11.25 5.83333Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokLinejoin="round"
                />
              </svg>
              Applicants
            </span>
            <span>400</span>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-4 font-normal border-b">
            <span className="flex flex-row gap-3 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.9167H6.25002C5.08705 12.9167 4.50557 12.9167 4.0324 13.0602C2.96707 13.3834 2.13339 14.217 1.81022 15.2824C1.66669 15.7555 1.66669 16.337 1.66669 17.5M13.3334 15L15 16.6667L18.3334 13.3333M12.0834 6.25C12.0834 8.32107 10.4044 10 8.33335 10C6.26229 10 4.58335 8.32107 4.58335 6.25C4.58335 4.17893 6.26229 2.5 8.33335 2.5C10.4044 2.5 12.0834 4.17893 12.0834 6.25Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Matches
            </span>
            <span>100</span>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-4 font-normal border-b">
            <span className="flex flex-row gap-3 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4001 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9001 15 13.5 15H8.06979C7.54975 15 7.28972 15 7.04101 15.051C6.82036 15.0963 6.60683 15.1712 6.40624 15.2737C6.18014 15.3892 5.9771 15.5517 5.57101 15.8765L3.58313 17.4668C3.23639 17.7442 3.06302 17.8829 2.91712 17.8831C2.79022 17.8832 2.67019 17.8255 2.59102 17.7263C2.5 17.6123 2.5 17.3903 2.5 16.9463V6.5Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Messages
            </span>
            <span>147</span>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-4 font-normal border-b">
            <span className="flex flex-row gap-3 items-center">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.01677 7.59432C0.90328 7.41462 0.846535 7.32477 0.81477 7.18618C0.79091 7.08209 0.79091 6.91792 0.81477 6.81383C0.846535 6.67524 0.90328 6.58539 1.01677 6.40569C1.95461 4.92071 4.74617 1.16667 9.00034 1.16667C13.2545 1.16667 16.0461 4.92071 16.9839 6.40569C17.0974 6.58539 17.1541 6.67524 17.1859 6.81383C17.2098 6.91792 17.2098 7.08209 17.1859 7.18618C17.1541 7.32477 17.0974 7.41462 16.9839 7.59432C16.0461 9.0793 13.2545 12.8333 9.00034 12.8333C4.74617 12.8333 1.95461 9.0793 1.01677 7.59432Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00034 9.5C10.381 9.5 11.5003 8.38072 11.5003 7C11.5003 5.61929 10.381 4.50001 9.00034 4.50001C7.61962 4.50001 6.50034 5.61929 6.50034 7C6.50034 8.38072 7.61962 9.5 9.00034 9.5Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Views
            </span>
            <span>800</span>
          </div>
        </div>
      </div>
    </div>
  );
};
function Main() {
  return (
    <>
      <TabNavigation />
      <Section />
    </>
  );
}

export default Main;
