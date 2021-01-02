import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";
import JotformEmbed from "react-jotform-embed";

export default function contactPage() {
  return (
    <Layout>
      <SEO title={"İletişim"} />
      <Content>
        <div>
          <JotformEmbed src="https://form.jotform.com/210005671386046" />
        </div>
      </Content>
    </Layout>
  );
}
