import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Question = ({ q, full = false }) => {
  const question = useStaticQuery(graphql`
    query MyQuery {
      allQuestions {
        nodes {
          id
          follow_ups
          great
          text
          warning
        }
      }
    }
  `)
    .allQuestions.nodes.filter(({ id }) => id === q)
    .pop();

  return (
    <div>
      <h4>{question.text}</h4>
      <h5>Possible follow-ups:</h5>
      <ul>
        {question.follow_ups.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
      {full ? (
        <table>
          <thead>
            <tr>
              <td>
                <strong>✅ Great signs:</strong>
              </td>
              <td>
                <strong>⚠️ Warning signs: </strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  {question.great.map((t) => (
                    <li>{t}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {question.warning.map((t) => (
                    <li>{t}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Question;
