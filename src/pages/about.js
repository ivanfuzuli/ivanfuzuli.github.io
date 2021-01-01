import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function aboutPage() {
  return (
    <Layout>
      <SEO title={"Hakkımda"} />
      <div className="max-w-3xl mr-auto ml-auto p-4 bg-white border-gray-300 rounded mt-4 mb-4">
        <h1>Hakkımda</h1>
        <div>
          1989 doğumlu bir önyüz (front-end) geliştiriciyim. Aklınıza takılan
          bir şey olursa iletişime geçmekten çekinmeyin.
        </div>
      </div>
    </Layout>
  );
}
