import PageBanner from "@/components/common/PageBanner";
import PageHero from "../../components/common/PageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import TextArea from "@/components/privacy/TextArea";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage({ breadcrumbs = [{ label: "Terms and Conditions & Privacy Policy" }] }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={
          <>
            Terms and Conditions
            <br />
            <span>& Privacy Policy</span>
          </>
        }
        subtitle="This document is an electronic record in terms of the Information Technology Act, 2000 and the rules made thereunder, as amended from time to time, and does not require any physical or digital signature."
        image="/images/privacy-policy-banner.png"
        imageAlt="Privacy Policy"
      />
      <TextArea />
    </>
  );
}
