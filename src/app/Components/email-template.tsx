import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const EmailTemplate = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={heading}>Hello {name},</Text>
          <Text style={paragraph}>
            Thanks for submitting the form. I will get back to you as soon as I
            can.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const heading = {
  color: "#FDBA74",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "24px",
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "1rem",
};

const box = {
  padding: "0 48px",
};

const paragraph = {
  color: "#776552",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};
