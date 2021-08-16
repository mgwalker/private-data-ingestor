import * as React from "react";
import { graphql } from "gatsby";
import Question from "../../components/question";

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
const IndexPage = ({ data: { interviews: data } }) => {
  return (
    <main style={pageStyles}>
      <title>{data.title}</title>
      <h1 style={headingStyles}>{data.title}</h1>
      {data.sections.map(({ description, name, questions }) => (
        <>
          <h2>{name}</h2>
          {description}
          {questions.map((q) => (
            <Question key={q} q={q} />
          ))}
        </>
      ))}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query ($id: String) {
    interviews(id: { eq: $id }) {
      title
      sections {
        description
        name
        questions
      }
    }
  }
`;
