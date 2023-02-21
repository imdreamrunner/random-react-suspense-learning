import {useMySlowAjaxCall} from './useAjaxCall'

export default function Result2({param}) {

  const result = useMySlowAjaxCall(param);
  return <div>Result for {param} * 2: {JSON.stringify(result)}</div>
}