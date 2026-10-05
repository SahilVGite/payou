import Breadcrumbs from "@/components/common/Breadcrumbs";
import PageBanner from "@/components/common/PageBanner";
import SearchJobs from "@/components/career/SearchJobs";
import WhyWorkWithUs from "@/components/career/WhyWorkWithUs";
import HiringProcess from "@/components/career/HiringProcess";
import Recognition from "@/components/career/Recognition";
import React from "react";

export const metadata = { title: "Career" };

const page = ({ breadcrumbs = [{ label: "Careers" }] }) => {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageBanner
        title={
          <>
            <span>Careers</span>
          </>
        }
        subtitle={<>Join a growing team that values fresh ideas, continuous learning, <br />and meaningful impact in the world of financial solutions.</>}
        onlyTxt={true}
      />
      <SearchJobs />
      <WhyWorkWithUs />
      <HiringProcess />
      <Recognition />
    </>
  );
};

export default page;
