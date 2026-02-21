import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/primitives/Button/Button";
import { IconButton } from "../ui/primitives/IconButton/IconButton";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const imgOnboardingModal =
  "https://www.figma.com/api/mcp/asset/15789cfb-7485-48e8-a7dc-da4241e3f4d6";

interface OnboardingModalProps {
  onDismiss?: () => void;
  onSignUp?: () => void;
}

function OnboardingModal({ onDismiss, onSignUp }: OnboardingModalProps) {
  return (
    <div
      data-name="Onboarding Modal"
      className="relative flex flex-col gap-[var(--sds-size-space-600,24px)] items-start p-[var(--sds-size-space-800,32px)] size-full border-t border-[var(--sds-color-border-default-default,#d9d9d9)] border-solid shadow-[0px_var(--sds-size-depth-400,16px)_var(--sds-size-depth-800,32px)_0px_var(--sds-color-black-200,rgba(12,12,13,0.1)),0px_var(--sds-size-depth-100,4px)_var(--sds-size-depth-100,4px)_0px_var(--sds-color-black-100,rgba(12,12,13,0.05))] overflow-hidden"
    >
      {/* Background image + gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={imgOnboardingModal}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)]" />
      </div>

      {/* Close button */}
      <div className="absolute top-[var(--sds-size-space-400,16px)] right-[var(--sds-size-space-400,16px)] z-10">
        <IconButton
          variant="subtle"
          size="small"
          aria-label="Dismiss onboarding modal"
          onClick={onDismiss}
        />
      </div>

      {/* Text content */}
      <div
        data-name="Text"
        className="relative flex flex-col flex-[1_0_0] gap-[var(--sds-size-space-300,12px)] items-center justify-center min-h-[160px] min-w-px w-full text-center text-[color:var(--sds-color-text-brand-on-brand,#f5f5f5)] not-italic whitespace-pre-wrap"
      >
        <p className="relative shrink-0 w-full font-[family-name:var(--sds-typography-heading-font-family,'Inter',sans-serif)] font-[var(--sds-typography-heading-font-weight,600)] text-[length:var(--sds-typography-heading-size-base,24px)] leading-[1.2] tracking-[-0.48px]">
          Reset Your Closet
        </p>
        <p className="relative shrink-0 w-full font-[family-name:var(--sds-typography-body-font-family,'Inter',sans-serif)] font-[var(--sds-typography-body-font-weight-regular,400)] text-[length:var(--sds-typography-body-size-medium,16px)] leading-[1.4]">
          Sign up to shop millions of secondhand finds—and sell what you're
          ready to let go. It's style that feels good for your wardrobe, your
          wallet, and the world.
        </p>
      </div>

      {/* Button group */}
      <div
        data-name="Button Group"
        className="relative flex shrink-0 gap-[var(--sds-size-space-400,16px)] items-center justify-end w-full"
      >
        <Button size="medium" variant="neutral" onClick={onDismiss}>
          No Thanks
        </Button>
        <Button size="medium" variant="primary" onClick={onSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "Compositions/OnboardingModal",
  component: OnboardingModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An onboarding modal that prompts visitors to sign up. Features a full-bleed background image with a gradient overlay, headline copy, body copy, and a dismiss/sign-up button group.",
      },
    },
  },
  argTypes: {
    onDismiss: { action: "dismissed" },
    onSignUp: { action: "signed up" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OnboardingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default onboarding modal with background image and CTA buttons.",
      },
    },
  },
};

export const WithActions: Story = {
  args: {
    onDismiss: () => console.log("User dismissed the modal"),
    onSignUp: () => console.log("User clicked Sign Up"),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with dismiss and sign-up action handlers wired up.",
      },
    },
  },
};

export const NarrowViewport: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Modal at a narrow (mobile) viewport width.",
      },
    },
  },
};