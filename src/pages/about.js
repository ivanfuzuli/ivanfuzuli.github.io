import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";

export default function aboutPage() {
  return (
    <Layout>
      <SEO title={"Hakkımda"} />
      <Content title="Hakkımda">
        <div>
          1989 doğumlu bir önyüz (front-end) geliştiriciyim. Aklınıza takılan
          bir şey olursa iletişime geçmekten çekinmeyin.
        </div>
      </Content>
    </Layout>
  );
}
