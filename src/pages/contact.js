import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import JotformEmbed from "react-jotform-embed";

export default function contactPage() {
  return (
    <Layout>
      <SEO title={"İletişim"} />
      <div className="max-w-3xl mr-auto ml-auto p-4 bg-white border-gray-300 rounded mt-4 mb-4">
        <div>
          <JotformEmbed src="https://form.jotform.com/210005671386046" />
        </div>
      </div>
    </Layout>
  );
}
