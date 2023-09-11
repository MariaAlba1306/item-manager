type ErrorProps = {
  error: Error;
};

const ErrorPage = ({ error }: ErrorProps) => (
  <>
    <h2>We have a problem loading your content...</h2>
    <pre>{error.message}</pre>
  </>
);

export default ErrorPage;
