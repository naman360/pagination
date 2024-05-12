type Props = {
  pageNumber: number;
  totalPages: number;
  handlePageNumberChange: (newPageNumber: number) => void;
};

const Pagination = ({
  pageNumber,
  totalPages,
  handlePageNumberChange,
}: Props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <span
        onClick={() => handlePageNumberChange(pageNumber - 1)}
        style={{
          display: pageNumber === 1 ? "none" : "block",
          cursor: "pointer",
        }}
      >
        ⬅️
      </span>
      {[...Array(totalPages)].map((_, i) => (
        <span
          key={`item-${i + 1}`}
          onClick={() => handlePageNumberChange(i + 1)}
          style={{
            padding: "20px",
            cursor: "pointer",
            border: pageNumber === i + 1 ? "1px solid black" : "",
          }}
        >
          {i + 1}
        </span>
      ))}
      <span
        onClick={() => handlePageNumberChange(pageNumber + 1)}
        style={{
          display: pageNumber === totalPages ? "none" : "block",
          cursor: "pointer",
        }}
      >
        ➡️
      </span>
    </div>
  );
};

export default Pagination;
