import React from 'react';

export default function FeedbackCount({
  total,
  type,
}: {
  total: number;
  type: string;
}) {
  return (
    <p>
      {type}:{total}
    </p>
  );
}
