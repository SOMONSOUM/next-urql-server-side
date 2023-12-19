"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select } from "./ui/select";
import ReactSelect from "react-select";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./ui/button";

const options = [
  {
    label: "Khmer",
    value: "kh",
  },
  {
    label: "United State",
    value: "US",
  },
];

export const Search: React.FC = () => {
  const { control } = useForm();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryParams = Object.fromEntries(
    searchParams.entries()
  ) as Partial<any>;
  const params = new URLSearchParams(searchParams.toString());
  console.log(params);

  const handleChange = () => {
    params.delete("page");
    console.log(
      Object.entries(params).forEach(([key, value]: any) => {
        console.log(value);

        if (value === undefined || value === null || "") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      })
    );
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`);
  };

  return (
    <>
      {" "}
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            defaultValue={value}
            menuPlacement="top"
            isMulti={false}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#297FB8",
              },
            })}
            styles={{
              input: (base) => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
            }}
            placeholder="Select status..."
            onChange={onChange}
            options={options}
          />
        )}
      />
      <Button onClick={handleChange}>Click</Button>
    </>
  );
};
