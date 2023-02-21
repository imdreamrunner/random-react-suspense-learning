export default function Counter({ value, setValue }) {
  return (
    <div>
      Counter: {value}{" "}
      <button
        onClick={() => {
          setValue((v) => v + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}
