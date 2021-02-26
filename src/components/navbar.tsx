import React, { Dispatch, SetStateAction, useState } from 'react';
import './navbar.css';

interface SideProps {
  sidebarOpen: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const mainItems = [
  { link: '/contacts', name: 'Контакты', title: 'Контакты' },
  { link: '/companies', name: 'Организации', title: 'Организации' },
  { link: '/sirens', name: 'Сирены', title: 'Сирены' }
];

const dropdownItems = [
  { link: '/departments', name: 'Отделы', title: 'Отделы' },
  { link: '/educations', name: 'Обучение', title: 'Обучение' },
  { link: '/kinds', name: 'Типы тренировок', title: 'Типы тренировок' },
  { link: '/posts', name: 'Должности', title: 'Должности' },
  { link: '/practices', name: 'Учения', title: 'Учения' },
  { link: '/ranks', name: 'Чины', title: 'Чины' },
  { link: '/scopes', name: 'Сферы', title: 'Сферы' },
  { link: '/certificates', name: 'Удостоверения', title: 'Удостоверения' },
  { link: '/sirentypes', name: 'Типы сирен', title: 'Типы сирен' }
];

const MainItems = (): JSX.Element => (
  <>
    {mainItems.map((item) => (
      <a
        className="py-2 sm-4 sm:py-2 sm:px-4 text-gray-800 sm:text-secondary opacity-75 hover:opacity-100"
        href={item.link}
        key={`main-items-${item.name}`}
        title={item.title}
      >
        {item.name}
      </a>
    ))}
  </>
);

const DropdownItems = (): JSX.Element => (
  <div
    className="absolute left-0 hidden opacity-0 pointer-events-none sm:block dropdown"
    key="navbar-dropdown"
  >
    <div className="flex flex-col bg-white border border-gray-200 rounded shadow-lg">
      {dropdownItems.map((item) => (
        <a
          className="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
          href={item.link}
          key={`navbar-dropdown-${item.name}`}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

export const SideBar = (props: SideProps): JSX.Element => {
  const { sidebarOpen, setSidebar } = props;
  return (
    <>
      <div
        v-cloak
        className={`${
          sidebarOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'
        }fixed top-0 right-0 z-50 w-64 h-screen pt-6 transition duration-300 transform bg-secondary sm:hidden`}
      >
        <button
          onClick={() => setSidebar(!sidebarOpen)}
          title="tailwindcss"
          className="absolute right-0 pr-6 nav-toggle pin-0 focus:outline-none"
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20">
            <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
          </svg>
        </button>

        <nav className="relative flex-col items-center justify-end flex-1 mt-12 main-nav sm:flex sm:mt-0 sm:flex-row">
          <div className="relative flex flex-col items-center justify-end flex-1 sm:flex-row">
            <MainItems />

            <div className="relative user">
              <a
                title="Справочники"
                href="#directory"
                className="block py-2 sm:py-4 sm:px-4 text-gray-800 sm:text-secondary opacity-75 hover:opacity-100"
              >
                Справочники
              </a>

              <DropdownItems />
            </div>
          </div>

          <div className="flex flex-col items-center mt-2 sm:mt-0 sm:flex-row sm:border-l sm:border-gray-300">
            <div className="items-center hidden sm:flex">
              <div className="relative flex pl-4 cursor-pointer user items-cente">
                <img
                  className="object-cover w-8 h-8 mr-2 rounded-full"
                  src="https://avatars.githubusercontent.com/u/837026?v=4"
                  alt="serbe"
                />
                <div className="absolute right-0 mt-8 opacity-0 pointer-events-none dropdown">
                  <div className="flex flex-col items-end mt-2 bg-white border border-gray-200 rounded shadow-lg">
                    <a
                      title="My components"
                      href="/u/serbe"
                      className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                    >
                      My components
                    </a>
                    <a
                      title="Profile Settings"
                      href="/u/serbe/edit"
                      className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                    >
                      Profile Settings
                    </a>
                    <form
                      id="logout-form"
                      className="leading-none"
                      action="https://tailwindcomponents.com/logout"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="GhuaWJsTFXBse7SMRMJIIfOhffFp5Ad0fUusXGzQ"
                      />{' '}
                      <button className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap focus:outline-none">
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 border-t border-gray-700 sm:hidden">
              <p className="pt-4 font-bold text-gray-800">serbe</p>
              <a
                title="My Tailwind components"
                href="/u/serbe"
                className="py-2 text-gray-800 opacity-75 sm:py-4"
              >
                My components
              </a>
              <a
                title="Profile Settings"
                href="/u/serbe/edit"
                className="py-2 text-gray-800 opacity-75 sm:py-4"
              >
                Profile Settings
              </a>

              <form
                id="logout-form"
                className="leading-none"
                action="https://tailwindcomponents.com/logout"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="GhuaWJsTFXBse7SMRMJIIfOhffFp5Ad0fUusXGzQ"
                />{' '}
                <button className="py-2 text-gray-800 opacity-75 sm:py-4 focus:outline-none">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export const NavBar = (): JSX.Element => {
  const [sidebarOpen, setSidebar] = useState(false);
  return (
    <>
      <SideBar sidebarOpen={sidebarOpen} setSidebar={setSidebar} />
      <div className="flex flex-col min-h-screen">
        <header className="top-0 lef-0 w-full z-40 bg-white fixed border-b border-gray-200">
          <div className="container flex items-center justify-between h-16 px-6 mx-auto">
            <a title="Home" href="/">
              <svg className="h-6 w-6" viewBox="0 0 20 20">
                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
              </svg>
            </a>

            <div className="hidden sm:block">
              <nav className="relative flex-col items-center justify-end flex-1 mt-12 main-nav sm:flex sm:mt-0 sm:flex-row">
                <div className="relative flex flex-col items-center justify-end flex-1 sm:flex-row">
                  <MainItems />

                  <div className="relative user">
                    <a
                      title="Справочники"
                      href="#directory"
                      className="block py-2 sm:py-4 sm:px-4 text-gray-800 sm:text-secondary opacity-75 hover:opacity-100"
                    >
                      Справочники
                    </a>

                    <DropdownItems />
                  </div>
                </div>

                <div className="flex flex-col items-center mt-2 sm:mt-0 sm:flex-row sm:border-l sm:border-gray-300">
                  <div className="items-center hidden sm:flex">
                    <div className="relative flex pl-4 cursor-pointer user items-cente">
                      <img
                        className="object-cover w-8 h-8 mr-2 rounded-full"
                        src="https://avatars.githubusercontent.com/u/837026?v=4"
                        alt="serbe"
                      />
                      <div className="absolute right-0 mt-8 opacity-0 pointer-events-none dropdown">
                        <div className="flex flex-col items-end mt-2 bg-white border border-gray-200 rounded shadow-lg">
                          <a
                            title="My components"
                            href="/u/serbe"
                            className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                          >
                            My components
                          </a>
                          <a
                            title="Profile Settings"
                            href="/u/serbe/edit"
                            className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                          >
                            Profile Settings
                          </a>
                          <form
                            id="logout-form"
                            className="leading-none"
                            action="https://tailwindcomponents.com/logout"
                            method="POST"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              value="GhuaWJsTFXBse7SMRMJIIfOhffFp5Ad0fUusXGzQ"
                            />{' '}
                            <button className="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap focus:outline-none">
                              Logout
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center mt-8 border-t border-gray-700 sm:hidden">
                    <p className="pt-4 font-bold text-gray-800">serbe</p>
                    <a
                      title="My Tailwind components"
                      href="/u/serbe"
                      className="py-2 text-gray-800 opacity-75 sm:py-4"
                    >
                      My components
                    </a>
                    <a
                      title="Profile Settings"
                      href="/u/serbe/edit"
                      className="py-2 text-gray-800 opacity-75 sm:py-4"
                    >
                      Profile Settings
                    </a>

                    <form
                      id="logout-form"
                      className="leading-none"
                      action="https://tailwindcomponents.com/logout"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="GhuaWJsTFXBse7SMRMJIIfOhffFp5Ad0fUusXGzQ"
                      />{' '}
                      <button className="py-2 text-gray-800 opacity-75 sm:py-4 focus:outline-none">
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <button
            onClick={() => setSidebar(!sidebarOpen)}
            className="absolute top-0 right-0 z-20 flex px-6 py-5 sm:hidden nav-toggle focus:outline-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </header>
      </div>
    </>
  );
};
