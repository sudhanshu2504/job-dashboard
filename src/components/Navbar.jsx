'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar className="py-4 w-full mx-0" maxWidth="full" isBordered shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit py-4 px-6 text-sm bg-[#e7e7e7] h-full text-orange-600">Logo</p>
      </NavbarBrand>
 
      <NavbarContent className="hidden sm:flex gap-8 border border-[#D1D1D1] p-2 rounded-full" justify="center">
        <div className="bg-[#DC4A2D] text-lg text-white px-3 h-full justify-center items-center flex rounded-full">
          <a href="#" className="flex gap-1 items-center">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            Jobs
          </a>
        </div>
        <div className="text-lg text-white px-3 h-full justify-center items-center flex rounded-full">
          <a href="#" className="text-[#b0b0b0] flex gap-1 items-center" aria-current="page"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            Messages
          </a>
        </div>
        <div className="text-lg text-white px-3 h-full justify-center items-center flex rounded-full">
          <a href="#" className="text-[#b0b0b0] flex gap-1 items-center">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5295 7.85186C11.9571 8.25995 11.2566 8.5 10.5 8.5C8.567 8.5 7 6.933 7 5C7 3.067 8.567 1.5 10.5 1.5C11.753 1.5 12.8522 2.15842 13.4705 3.14814M5 19.5872H7.61029C7.95063 19.5872 8.28888 19.6277 8.61881 19.7086L11.3769 20.3789C11.9753 20.5247 12.5988 20.5388 13.2035 20.4214L16.253 19.8281C17.0585 19.6712 17.7996 19.2854 18.3803 18.7205L20.5379 16.6217C21.154 16.0234 21.154 15.0524 20.5379 14.4531C19.9832 13.9134 19.1047 13.8527 18.4771 14.3103L15.9626 16.1449C15.6025 16.4081 15.1643 16.5498 14.7137 16.5498H12.2855L13.8311 16.5498C14.7022 16.5498 15.4079 15.8633 15.4079 15.0159V14.7091C15.4079 14.0055 14.9156 13.392 14.2141 13.2219L11.8286 12.6417C11.4404 12.5476 11.0428 12.5 10.6431 12.5C9.67833 12.5 7.93189 13.2988 7.93189 13.2988L5 14.5249M19 6C19 7.933 17.433 9.5 15.5 9.5C13.567 9.5 12 7.933 12 6C12 4.067 13.567 2.5 15.5 2.5C17.433 2.5 19 4.067 19 6ZM1 14.1L1 19.9C1 20.4601 1 20.7401 1.10899 20.954C1.20487 21.1422 1.35785 21.2951 1.54601 21.391C1.75992 21.5 2.03995 21.5 2.6 21.5H3.4C3.96005 21.5 4.24008 21.5 4.45399 21.391C4.64215 21.2951 4.79513 21.1422 4.89101 20.954C5 20.7401 5 20.4601 5 19.9V14.1C5 13.5399 5 13.2599 4.89101 13.046C4.79513 12.8578 4.64215 12.7049 4.45399 12.609C4.24008 12.5 3.96005 12.5 3.4 12.5L2.6 12.5C2.03995 12.5 1.75992 12.5 1.54601 12.609C1.35785 12.7049 1.20487 12.8578 1.10899 13.046C1 13.2599 1 13.5399 1 14.1Z" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
Payments
          </a>
        </div>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6666 27H10.3333M20.9999 9.66669C20.9999 7.54496 20.1571 5.51012 18.6568 4.00983C17.1565 2.50954 15.1217 1.66669 12.9999 1.66669C10.8782 1.66669 8.84338 2.50954 7.34309 4.00983C5.8428 5.51012 4.99994 7.54496 4.99994 9.66669C4.99994 13.7869 3.96057 16.608 2.7995 18.4739C1.82011 20.0479 1.33042 20.8348 1.34838 21.0544C1.36826 21.2975 1.41976 21.3902 1.61564 21.5355C1.79256 21.6667 2.59006 21.6667 4.18508 21.6667H21.8148C23.4098 21.6667 24.2073 21.6667 24.3842 21.5355C24.5801 21.3902 24.6316 21.2975 24.6515 21.0544C24.6695 20.8348 24.1798 20.0479 23.2004 18.4739C22.0393 16.608 20.9999 13.7869 20.9999 9.66669Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <Avatar
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/61337dbbaa94de001dabdd6e/0x0.png"
            />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">abcd@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        

      </NavbarContent>
    </Navbar>
  );
}
