import { CodeBlock, Column,  Container, Button, dracula, Html, Row, Section,  Tailwind, Text, Head, Font } from "@react-email/components";
import * as React from "react";

export default function Email({userName, userInquiry, dateToday = new Date().toDateString()}) {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="DM Sans"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=DM+Sans",
              format: "woff2"
            }}
            fontWeight="500"
            fontStyle="normal"
          />
        </Head>
        <Container className="">
          <Section>
            <Row>
              <Column>
                <Text> Hi ! { userName ?? "JOHN_DOE" } wants to know if:  </Text>
              </Column>
            </Row>
            <Row className="border border-solid border-black rounded py-2 px-4">
              <Column>
                <Text className="px-2"> {userInquiry ?? "TEST_MESSAGE_PLEASE_IGNORE"} </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text>{dateToday}</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  );
}
