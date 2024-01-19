import React from "react";
import HeaderLink from "./HeaderLink";

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
export function Header() {
  return (
    <header className="flex mt-10 py-2 items-center justify-center w-dvw">
      <div className="text-4xl flex ">
        <span className="text-primary  font-extrabold ">Z</span>
        <span className="font-extralight">Mivechi</span>.
      </div>

      <section className="flex gap-10 px-[200px]">
        <HeaderLink href={"/"}>صفحه اصلی</HeaderLink>
        <HeaderLink href={"/"}>پروژه های من</HeaderLink>
        <HeaderLink href={"/"}>تماس با من</HeaderLink>
      </section>

      <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-hoverBg hover:duration-300">
        <h5>دانلود رزومه من</h5>
      </button>
    </header>
  );
}
