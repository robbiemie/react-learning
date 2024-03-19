import { useParams, useSearchParams } from "react-router-dom"

function ArticlePage () {
  const [params] = useSearchParams()
  const param = useParams()
  return (<div>
    文章页: { params.get('id') || param.id }
  </div>)
}

export default ArticlePage