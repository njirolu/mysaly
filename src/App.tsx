import React from "react";
import InputCurrency from "./components/ui/input-currency";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Footer from "./components/footer";
import Calc from "./components/calc";
import CoWorkersIllustration from "./components/ui/co-workers-illustration";
import Info from "./components/info";

const MARITAL_STATUS = [
  { label: "Belum Kawin", value: "TK" },
  { label: "Kawin", value: "K" },
];

const DEPENDENTS = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
];

interface SelectState {
  label: string;
  value: string;
}

interface FormState {
  grossSalary: number;
  maritalStatus: SelectState;
  dependents: SelectState;
}

function App() {
  const [grossSalary, setGrossSalary] = React.useState<number>(0);
  const [maritalStatusSelected, setMaritalStatusSelected] =
    React.useState<SelectState>(MARITAL_STATUS[0]);
  const [dependentsSelected, setDependentsSelected] =
    React.useState<SelectState>(DEPENDENTS[0]);

  const [form, setForm] = React.useState<FormState>({
    grossSalary: 0,
    maritalStatus: { label: "Belum Kawin", value: "TK" },
    dependents: { label: "0", value: "0" },
  });

  function submit() {
    setGrossSalary(form.grossSalary);
    setMaritalStatusSelected(form.maritalStatus);
    setDependentsSelected(form.dependents);
  }

  return (
    <div className="min-h-screen flex flex-col pt-10">
      <main>
        <section className="flex flex-col lg:max-w-[1200px] max-w-[100%] px-6 md:mx-auto items-center justify-center gap-4 mb-20">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            MySaly
          </h1>
          <p className="text-sm md:text-xl text-center md:text-left font-normal">
            Kalkulator Gaji ini bikin gampang banget buat ngitung gaji bersih
            bulanan kamu, jadi nggak perlu repot lagi!
          </p>
        </section>

        <section className="flex flex-col md:flex-row lg:max-w-[1200px] md:mx-auto max-w-[100%] px-6 mb-10 md:gap-10">
          <div className="w-full md:w-[45%] flex flex-col gap-4 mb-6 md:mb-0">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Gaji Kotor Bulanan</label>
              <InputCurrency
                onChange={(value) =>
                  setForm((prevState) => ({ ...prevState, grossSalary: value }))
                }
                value={form.grossSalary}
              />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-bold text-sm">Status perkawinan</label>
                <Listbox
                  value={form.maritalStatus.value}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      maritalStatus: e as unknown as SelectState,
                    }))
                  }
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default py-2 pl-3 pr-10 text-left rounded-md bg-white ring-1 ring-gray-300 px-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
                      <span className="block truncate">
                        {form.maritalStatus.label}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {MARITAL_STATUS.map(
                          (maritalStatus, maritalStatusIdx) => (
                            <Listbox.Option
                              key={maritalStatusIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-gray-200 text-black"
                                    : "text-gray-900"
                                }`
                              }
                              value={maritalStatus}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {maritalStatus.label}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          )
                        )}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label className="font-bold text-sm">Jumlah Tanggungan</label>
                <Listbox
                  value={form.dependents.value}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      dependents: e as unknown as SelectState,
                    }))
                  }
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default py-2 pl-3 pr-10 text-left rounded-md bg-white ring-1 ring-gray-300 px-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
                      <span className="block truncate">
                        {form.dependents.label}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {DEPENDENTS.map((dependent, dependentIdx) => (
                          <Listbox.Option
                            key={dependentIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-gray-200 text-black"
                                  : "text-gray-900"
                              }`
                            }
                            value={dependent}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {dependent.label}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <button
              onClick={submit}
              className="inline-flex md:self-end items-center justify-center rounded-full text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white hover:bg-gray-700 h-9 px-7 py-5 shadow-md"
            >
              Hitung Gaji
            </button>
          </div>
          <div className="flex-1 grow flex md:justify-end justify-center">
            {grossSalary > 0 ? (
              <Calc
                grossSalary={grossSalary}
                maritalStatus={maritalStatusSelected.value}
                dependents={dependentsSelected.value}
              />
            ) : (
              <CoWorkersIllustration />
            )}
          </div>
        </section>

        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
