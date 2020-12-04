// eslint-disable-next-line react/prop-types
export default function Buttons({ pages }) {
  const pageNumbers = [];
  for (let i = 0; i < pages; i + 1) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
}
