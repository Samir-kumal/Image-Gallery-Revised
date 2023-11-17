import { QueryClient,QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import HomeContainer from './container/HomeContainer'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <HomeContainer/>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App