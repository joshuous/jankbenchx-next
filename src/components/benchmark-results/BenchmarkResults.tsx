import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { ResultTile } from '../result-tile/ResultTile';
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';
import { Result } from '../../types';
import { ErrorPage } from '../error-page/ErrorPage';

export const GET_BENCHMARK_RESULTS_QUERY = gql`
  {
    allResults {
      data {
        _id
        device_name
        device_model
        device_board
        kernel_version
        fingerprint
        _ts
        results {
          test_name
          score
          jank_pct
          bad_frame_pct
        }
      }
    }
  }
`;

export const BenchmarkResults: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BENCHMARK_RESULTS_QUERY);
  const history = useHistory();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div className="mx-2">
      {data.allResults &&
        data.allResults.data &&
        data.allResults.data
          .slice(0)
          .reverse()
          .map((result: Result) => (
            <ResultTile
              key={result._id}
              result={result}
              onClick={() => history.push(`/results/${result._id}`)}
            />
          ))}
    </div>
  );
};
