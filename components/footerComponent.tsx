import React from "react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div
      data-testid="footer"
      className="h-14 max-sm:h-20 w-full flex max-sm:justify-between max-sm:pl-12 max-sm:py-2 items-center justify-end pr-12 space-x-6"
    >
      <span>
        By <strong>Muzenzeka Claver</strong> (+243 81 73 72 196 -{" "}
        <a
          href="mailto:mgeniclaver@gmail.com"
          className="text-coorporate-orange underline"
        >
          mgeniclaver@gmail.com
        </a>
        )
      </span>
      <Link href="https://www.linkedin.com/in/claver-muzenzeka-7379526b/">
        <img className="h-6" src="/images/logo-in.svg" alt="logo LinkedIn" />
      </Link>
      <Link href="https://github.com/clavatar-muzenzeka">
        <img className="h-6" src="/images/logo-gh.svg" alt="logo LinkedIn" />
      </Link>
    </div>
  );
};

export default FooterComponent;
