import { CodeBlock, Column,  Container, Button, dracula, Html, Row, Section,  Text } from "@react-email/components";
import * as React from "react";

export default function Email({userName, userInquiry, dateToday = new Date().toDateString()}) {
  return (
    <Html>
      <Container>
        <Section>
          <Row>
            <Column>
              <Text> Hi! { userName ?? "JOHN_DOE" } wants to know if:  </Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text> {userInquiry ?? "TEST_MESSAGE_PLEASE_IGNORE"} </Text>
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
  );
}
