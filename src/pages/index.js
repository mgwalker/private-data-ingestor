import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const IndexPage = () => {
  const interviews = useStaticQuery(graphql`
    query IndexPage {
      allInterviews {
        nodes {
          id
          title
        }
      }
    }
  `)
    .allInterviews.nodes.map(({ id, title }) => ({ id, title }))
    .sort(({ title: a }, { title: b }) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Interviews</h1>
      <ul>
        {interviews.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/interviews/${title.toLowerCase().replace(" ", "-")}`}>
              {title}
            </Link>{" "}
            <Link to={`/private/${title.toLowerCase().replace(" ", "-")}`}>
              (private)
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
