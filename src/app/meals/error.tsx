"use client";

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <main className="error">
      <h1>And error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
};

interface ErrorProps {
  error: string;
}

export default Error;
