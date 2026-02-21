import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem, Section } from "layout";
import {
  Logo,
  Text,
  TextHeading,
  TextLink,
  TextLinkList,
  TextListItem,
} from "primitives";

const meta: Meta<typeof HTMLIFrameElement> = {
  title: "SDS/Hello",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryHello: StoryObj<{}> = {
  name: "Hello",
  render: () => (
    <Section>
      <Flex container type="third" alignPrimary="center">
        <FlexItem size="major">
          <Flex direction="column" gap="300">
            <Logo />
            <TextHeading>Design System Sandbox</TextHeading>
            <Text>
              This is a sandbox file built on Figma's Simple Design System.
            </Text>

            <TextLinkList density="tight">
              <TextListItem>
                <TextLink href="https://github.com/thredup/sds">
                  ThredUp SDS Repo
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.figma.com/community/file/1380235722331273046">
                  Figma Community File
                </TextLink>
              </TextListItem>
            </TextLinkList>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
};
