import { Meta, StoryObj } from "@storybook/react";
import { PlayerClassSummaryCard } from "~/app/classes/page";

const meta = {
  title: "Player Classes/PlayerClassSummaryCard",
  component: PlayerClassSummaryCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    playerClass: { control: "object" },
  },
} satisfies Meta<typeof PlayerClassSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Monk: Story = {
  args: {
    playerClass: {
      id: 1,
      name: "Monk",
      summary: "A martial artist who uses their body as a weapon.",
    },
  },
};

export const Paladin: Story = {
  args: {
    playerClass: {
      id: 1,
      name: "Paladin",
      summary: "A holy warrior who uses divine magic to protect their allies.",
    },
  },
};
