import React from "react";
import { TextareaField } from "./Textarea";
import figma from "@figma/code-connect";

/**
 * Cleaned Code Connect mapping for TextareaField.
 * Note: Do NOT map "Name" unless it exists as a Figma Component Property.
 */

figma.connect(
  TextareaField,
  "https://www.figma.com/design/LHY012YNsXScv2iTu5qaoz/Simple-Design-System?node-id=9762%3A3088",
  {
    props: {
      label: figma.string("Label"),
      description: figma.string("Description"),

      isDisabled: figma.enum("State", {
        Default: false,
        Error: false,
        Disabled: true,
      }),

      hasError: figma.enum("State", {
        Default: false,
        Error: true,
        Disabled: false,
      }),

      error: figma.string("Error"),

      value: figma.string("Value"),
      defaultValue: figma.string("Value"),

      hidden: figma.enum("State", {
        Default: false,
        Error: false,
        Disabled: true,
      }),
    },

    example: (props) => (
      <TextareaField
        label={props.label}
        description={props.description}
        value={props.value}
        defaultValue={props.defaultValue}
        hidden={props.hidden}
        isDisabled={props.isDisabled}
        hasError={props.hasError}
        error={props.error}
      />
    ),
  }
);
