import { gql } from '@apollo/client';
const getCountries = () => gql`
        query {
            countries {
                name,
                emoji,
                capital,
                currency,
                languages {
                  name
                }
          }
      }
    `;
export default { getCountries }