import SectionTitle from "./SectionTitle";
import { Box } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Box mt={20}>
      <SectionTitle title={"Contact us"} />
      <Box mt={10}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactSection;
