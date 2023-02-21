import { useMySlowAjaxCall } from "./useAjaxCall3";

export default function Result3({ param }) {
  const result = useMySlowAjaxCall(param);
  return (
    <div>
      Result for {param} * 3: {JSON.stringify(result)}
    </div>
  );
}
