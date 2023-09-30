import { format } from "../utils/currency";

interface CalcProps {
  grossSalary: number;
  maritalStatus: string;
  dependents: string;
}

interface IPTKPRate {
  [key: string]: number;
}

const NUMBER_OF_MONTHS_IN_A_YEAR = 12;
const POSITION_COST_PERCENTAGE = 0.05;

const PERCENTAGE_OF_BPJS_HEALTH_COVERED_BY_EMPLOYEES = 0.01;
const PERCENTAGE_OF_BPJS_HEALTH_COVERED_BY_COMPANY = 0.04;

const PERCENTAGE_OF_BPJS_EMPLOYEMENT_COVERED_BY_EMPLOYEES = 0.02;
const PERCENTAGE_OF_BPJS_EMPLOYEMENT_COVERED_BY_COMPANY = 0.037;

const PTKP_RATE = {
  "TK/0": 54_000_000,
  "TK/1": 58_500_000,
  "TK/2": 63_000_000,
  "TK/3": 67_500_000,
  "K/0": 58_500_000,
  "K/1": 63_000_000,
  "K/2": 67_500_000,
  "K/3": 7_200_0000,
} as IPTKPRate;

function calcBPJSHealth(salary: number, percentage: number): number {
  if (salary < 12_000_000) {
    return salary * percentage;
  }
  return 12_000_000 * percentage;
}

function getTax21Percentage(pkp: number): number {
  if (pkp <= 60_000_000) {
    return 0.05;
  } else if (pkp <= 250_000_000) {
    return 0.15;
  } else if (pkp <= 500_000_000) {
    return 0.25;
  } else if (pkp <= 5_000_000_000) {
    return 0.3;
  } else {
    return 0.35;
  }
}

function calcPositionCost(
  annualizedSalary: number,
  positionCostPercentage: number
): number {
  let positionCost = annualizedSalary * positionCostPercentage;
  if (positionCost > 6_000_000) {
    positionCost = 6_000_000;
  } else if (positionCost > 500_000) {
    positionCost = 500_000;
  }
  return positionCost;
}

function Calc({ grossSalary, maritalStatus, dependents }: CalcProps) {
  const annualizedSalary = grossSalary * NUMBER_OF_MONTHS_IN_A_YEAR;
  const ptkp = PTKP_RATE[`${maritalStatus}/${dependents}`];
  const pkp = annualizedSalary - PTKP_RATE[`${maritalStatus}/${dependents}`];
  const positionCost = calcPositionCost(
    annualizedSalary,
    POSITION_COST_PERCENTAGE
  );
  const tax21 = pkp > 0 ? getTax21Percentage(pkp) * pkp - positionCost : 0;
  const monthlyIncomeTax = tax21 / 12;

  const bpjsHealthCoveredByEmployees = calcBPJSHealth(
    grossSalary,
    PERCENTAGE_OF_BPJS_HEALTH_COVERED_BY_EMPLOYEES
  );
  const bpjsHealthCoveredByCompany = calcBPJSHealth(
    grossSalary,
    PERCENTAGE_OF_BPJS_HEALTH_COVERED_BY_COMPANY
  );

  const bpjsEmployementCoveredByEmployees =
    grossSalary * PERCENTAGE_OF_BPJS_EMPLOYEMENT_COVERED_BY_EMPLOYEES;
  const bpjsEmployementCoveredByCompany =
    grossSalary * PERCENTAGE_OF_BPJS_EMPLOYEMENT_COVERED_BY_COMPANY;

  const bpjsEmploymentCost =
    bpjsEmployementCoveredByEmployees + bpjsEmployementCoveredByCompany;
  const bpjsHealthCost =
    bpjsHealthCoveredByEmployees + bpjsHealthCoveredByCompany;
  const nettoSalary =
    grossSalary - (monthlyIncomeTax + bpjsEmploymentCost + bpjsHealthCost);

  return (
    <section className="w-full min-h-[300px] items-end flex flex-col gap-4">
      <div className="bg-[#f4f6fb] rounded-md p-4 flex flex-col w-full">
        <div className="flex flex-row justify-between mb-1">
          <h1 className="text-slate-900 text-base">Gaji Disetahunkan</h1>
          <h1 className="text-slate-900 text-base font-bold text-right w-[250px] md:w-fit">
            Rp {format(annualizedSalary)}
          </h1>
        </div>

        <div className="flex flex-row justify-between mb-1">
          <p className="text-slate-500 font-thin text-xs">
            Penghasilan Tidak Kena Pajak (PTKP)
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(ptkp)}
          </p>
        </div>

        <div className="flex flex-row justify-between mb-4">
          <p className="text-slate-500 font-thin text-xs">
            Penghasilan Kena Pajak (PKP)
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(pkp)}
          </p>
        </div>

        <div className="h-[0.5px] bg-gray-500 w-full mb-4" />

        <div className="flex flex-row justify-between mb-1">
          <h1 className="text-slate-900 text-base">
            Pajak Penghasilan Tahunan (PPh 21)
          </h1>
          <h1 className="text-slate-900 text-base font-bold text-right w-[250px] md:w-fit">
            Rp {format(tax21)}
          </h1>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-slate-500 font-thin text-xs">
            Pajak Penghasilan Bulanan
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(monthlyIncomeTax)}
          </p>
        </div>

        <div className="flex flex-row justify-between mb-1">
          <h1 className="text-slate-900 text-base">BPJS Kesehatan</h1>
          <h1 className="text-slate-900 text-base font-bold text-right w-[250px] md:w-fit">
            Rp {format(bpjsHealthCost)}
          </h1>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-slate-500 font-thin text-xs">
            Iuran ditanggung Karyawan
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(bpjsHealthCoveredByEmployees)}
          </p>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-slate-500 font-thin text-xs">
            Iuran ditanggung Perusahaan
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(bpjsHealthCoveredByCompany)}
          </p>
        </div>

        <div className="flex flex-row justify-between mb-1">
          <h1 className="text-slate-900 text-base">BPJS Ketenagakerjaan</h1>
          <h1 className="text-slate-900 text-base font-bold text-right w-[250px] md:w-fit">
            Rp {format(bpjsEmploymentCost)}
          </h1>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-slate-500 font-thin text-xs">
            Iuran ditanggung Karyawan
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(bpjsEmployementCoveredByEmployees)}
          </p>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-slate-500 font-thin text-xs">
            Iuran ditanggung Perusahaan
          </p>
          <p className="text-slate-500 font-thin text-xs text-right w-[250px] md:w-fit">
            Rp {format(bpjsEmployementCoveredByCompany)}
          </p>
        </div>
      </div>

      <div className="bg-lime-100 rounded-md p-6 flex flex-col w-full">
        <div className="flex flex-col">
          <h1 className="text-slate-900 text-sm mb-2">
            Gaji bersih bulanan (Take Home Pay)
          </h1>
          <h1 className="text-slate-950 font-bold text-3xl">
            Rp {format(nettoSalary)}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Calc;
