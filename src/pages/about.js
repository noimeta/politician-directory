import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/externalLink"

const h2 = {
  fontSize: "2rem",
}
const sectionContent = {
  marginBottom: "3rem",
}

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <section>
      <div className="container" css={{ paddingBottom: "8rem" }}>
        <h1>About Politician Directory</h1>

        <h2 css={h2}>เกี่ยวกับสมุดพกการเมือง</h2>
        <p css={sectionContent}>
          สมุดพกการเมืองติดตามข้อมูลของนักการเมืองในประเทศไทย ตั้งแต่ พ.ศ.​ 2562
        </p>

        <h2 css={h2}>ที่มาของข้อมูล</h2>
        <p css={sectionContent}>ข้อมูลที่ใช้มาจากไหน</p>

        <h2 css={h2}>อาสาสมัครที่ร่วมพัฒนา</h2>

        <div css={sectionContent}>
          <div>
            <strong>เขียนโปรแกรม 💻</strong>
          </div>
          <div>
            <ExternalLink href="https://github.com/rapee">
              Rapee Suveeranont
            </ExternalLink>
          </div>

          <div>
            <strong>ออกแบบ 🎨</strong>
          </div>
          <div>
            <ExternalLink href="https://www.instagram.com/messymachine/">
              @messymachine
            </ExternalLink>{" "}
            <ExternalLink href="https://www.instagram.com/namsaisupavong/">
              @namsaisupavong
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
