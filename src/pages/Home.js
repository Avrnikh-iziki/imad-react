import React, { lazy, Suspense, useState } from 'react'
import Pagination from '../components/pagination/Pagination'
import LoadingSpinner from '../components/spinner/Spinner'
import Fotter from '../components/fotter/Fotter'
const Products = lazy(() => import('../components/products/Products'))
function Home() {

  const [numberOfPages, setTotalPages] = useState(0)
  const [page, setpage] = useState(1)

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        < Products setTotalPages={setTotalPages} page={page} />
      </Suspense>
      {numberOfPages > 0 && <Pagination numberOfPages={numberOfPages} page={page} setpage={setpage} />}
      <Fotter />
    </>
  )
}

export default Home