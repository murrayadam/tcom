"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

builder.init(process.env.BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
