import React from "react";
import Builders from "../../components/builders/Builders";
import withAuth from "../../shared/hoc/withAuth";

function BuildersPage() {
  return <Builders />;
}

export default withAuth(BuildersPage);
