import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Node Bird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NodeBird;
