import * as React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  wrapperClassName?: string;
}

function Collapse(props: CollapseProps) {
  return (
    <Disclosure as="div" className={`border-b border-b-gray-300 ${props.wrapperClassName || ""}`}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between text-left text-lg font-bold text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-opacity-75">
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-8 w-8 text-gray-500 transition-transform`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-gray-900">
            {props.children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Collapse;
