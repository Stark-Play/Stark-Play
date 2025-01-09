import type { Abi } from "abi-wan-kanabi";
import {
  type Contract,
  type ContractName,
  getFunctionsByStateMutability,
} from "~~/utils/scaffold-stark/contract";
import { WriteOnlyFunctionForm } from "./WriteOnlyFunctionForm";

export const ContractWriteMethods = ({
  onChange,
  deployedContractData,
}: {
  onChange: () => void;
  deployedContractData: Contract<ContractName>;
}) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = getFunctionsByStateMutability(
    (deployedContractData.abi || []) as Abi,
    "external",
  ).map((fn) => {
    return {
      fn,
    };
  });

  if (!functionsToDisplay.length) {
    return <>No write methods</>;
  }

  return (
    <>
      {functionsToDisplay.map(({ fn }, idx) => (
        <WriteOnlyFunctionForm
          abi={deployedContractData.abi as Abi}
          key={`${fn.name}-${idx}}`}
          abiFunction={fn}
          onChange={onChange}
          contractAddress={deployedContractData.address}
          //   inheritedFrom={inheritedFrom}
        />
      ))}
    </>
  );
};
