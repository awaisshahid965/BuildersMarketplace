import React from "react";
import Homepage from "../../components/homepage/Homepage";
import withAuth from "../../shared/hoc/withAuth";

function HomePage() {
  return <Homepage />;
}

export default withAuth(HomePage);
