import { SectionWrapper , SectionHeader, SectionTitle, SectionBody } from "./styled";

const Section = ({ title, body, buttons }) => (
    <SectionWrapper>
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          {buttons}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionWrapper>
);

export default Section;